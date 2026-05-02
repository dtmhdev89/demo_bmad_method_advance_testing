package main

import (
	"log"
	"net/http"
	"strings"
	"github.com/hieu/polyglot-cards/api/db"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	client := db.NewClient()
	if err := client.Prisma.Connect(); err != nil {
		log.Printf("Warning: Could not connect to database: %v. Continuing for mock testing.", err)
	}

	defer func() {
		if err := client.Prisma.Disconnect(); err != nil {
			panic(err)
		}
	}()

	// Create Echo instance
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	// Routes
	e.GET("/health", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"status": "healthy",
			"service": "Polyglot Cards API",
		})
	})

	// Create a new Concept Node
	e.POST("/concepts", func(c echo.Context) error {
		type Request struct {
			MeaningCentral string `json:"meaning_central"`
		}
		var req Request
		if err := c.Bind(&req); err != nil {
			return err
		}

		meaning := strings.TrimSpace(req.MeaningCentral)
		if meaning == "" {
			return c.JSON(http.StatusBadRequest, map[string]string{"error": "meaning_central is required and cannot be empty"})
		}
		if len(meaning) > 255 {
			return c.JSON(http.StatusBadRequest, map[string]string{"error": "meaning_central must be less than 255 characters"})
		}

		ctx := c.Request().Context()
		created, err := client.ConceptNode.CreateOne(
			db.ConceptNode.MeaningCentral.Set(meaning),
		).Exec(ctx)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		return c.JSON(http.StatusCreated, created)
	})

	// Get Concept Node with Definitions and Examples
	e.GET("/concepts/:id", func(c echo.Context) error {
		id := c.Param("id")
		ctx := c.Request().Context()
		concept, err := client.ConceptNode.FindUnique(
			db.ConceptNode.ID.Equals(id),
		).With(
			db.ConceptNode.Definitions.Fetch(),
			db.ConceptNode.Examples.Fetch(),
		).Exec(ctx)

		if err != nil {
			return c.JSON(http.StatusNotFound, map[string]string{"error": "Concept not found"})
		}

		return c.JSON(http.StatusOK, concept)
	})

	// Add Definition
	e.POST("/concepts/:id/definitions", func(c echo.Context) error {
		id := c.Param("id")
		type Request struct {
			Text         string `json:"text"`
			LanguageCode string `json:"language_code"`
		}
		var req Request
		if err := c.Bind(&req); err != nil {
			return err
		}

		ctx := c.Request().Context()
		created, err := client.Definition.CreateOne(
			db.Definition.Text.Set(req.Text),
			db.Definition.LanguageCode.Set(req.LanguageCode),
			db.Definition.ConceptNode.Link(db.ConceptNode.ID.Equals(id)),
		).Exec(ctx)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		return c.JSON(http.StatusCreated, created)
	})

	// Update Definition
	e.PUT("/definitions/:id", func(c echo.Context) error {
		id := c.Param("id")
		type Request struct {
			Text         string `json:"text"`
			LanguageCode string `json:"language_code"`
		}
		var req Request
		if err := c.Bind(&req); err != nil {
			return err
		}

		ctx := c.Request().Context()
		updated, err := client.Definition.FindUnique(
			db.Definition.ID.Equals(id),
		).Update(
			db.Definition.Text.Set(req.Text),
			db.Definition.LanguageCode.Set(req.LanguageCode),
		).Exec(ctx)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		return c.JSON(http.StatusOK, updated)
	})

	// Delete Definition
	e.DELETE("/definitions/:id", func(c echo.Context) error {
		id := c.Param("id")
		ctx := c.Request().Context()
		_, err := client.Definition.FindUnique(
			db.Definition.ID.Equals(id),
		).Delete().Exec(ctx)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		return c.NoContent(http.StatusNoContent)
	})

	// Add Example
	e.POST("/concepts/:id/examples", func(c echo.Context) error {
		id := c.Param("id")
		type Request struct {
			Text         string `json:"text"`
			LanguageCode string `json:"language_code"`
		}
		var req Request
		if err := c.Bind(&req); err != nil {
			return err
		}

		ctx := c.Request().Context()
		created, err := client.Example.CreateOne(
			db.Example.Text.Set(req.Text),
			db.Example.LanguageCode.Set(req.LanguageCode),
			db.Example.ConceptNode.Link(db.ConceptNode.ID.Equals(id)),
		).Exec(ctx)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		return c.JSON(http.StatusCreated, created)
	})

	// Update Example
	e.PUT("/examples/:id", func(c echo.Context) error {
		id := c.Param("id")
		type Request struct {
			Text         string `json:"text"`
			LanguageCode string `json:"language_code"`
		}
		var req Request
		if err := c.Bind(&req); err != nil {
			return err
		}

		ctx := c.Request().Context()
		updated, err := client.Example.FindUnique(
			db.Example.ID.Equals(id),
		).Update(
			db.Example.Text.Set(req.Text),
			db.Example.LanguageCode.Set(req.LanguageCode),
		).Exec(ctx)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		return c.JSON(http.StatusOK, updated)
	})

	// Delete Example
	e.DELETE("/examples/:id", func(c echo.Context) error {
		id := c.Param("id")
		ctx := c.Request().Context()
		_, err := client.Example.FindUnique(
			db.Example.ID.Equals(id),
		).Delete().Exec(ctx)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}

		return c.NoContent(http.StatusNoContent)
	})

	// Start server
	e.Logger.Fatal(e.Start(":8080"))
}
