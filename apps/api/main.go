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

	// Start server
	e.Logger.Fatal(e.Start(":8080"))
}
