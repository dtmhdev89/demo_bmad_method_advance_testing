package main

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/labstack/echo/v4"
	"github.com/stretchr/testify/assert"
)

func TestHealthCheck(t *testing.T) {
	// Setup
	e := echo.New()
	req := httptest.NewRequest(http.MethodGet, "/health", nil)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)

	// Handler
	h := func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"status": "healthy",
		})
	}

	// Assertions
	if assert.NoError(t, h(c)) {
		assert.Equal(t, http.StatusOK, rec.Code)
		assert.Contains(t, rec.Body.String(), "healthy")
	}
}

func TestBindConceptRequest(t *testing.T) {
	e := echo.New()
	conceptJSON := `{"meaning_central":"Apple"}`
	req := httptest.NewRequest(http.MethodPost, "/concepts", strings.NewReader(conceptJSON))
	req.Header.Set(echo.HeaderContentType, echo.MIMEApplicationJSON)
	rec := httptest.NewRecorder()
	c := e.NewContext(req, rec)

	type Request struct {
		MeaningCentral string `json:"meaning_central"`
	}
	var r Request
	err := c.Bind(&r)

	assert.NoError(t, err)
	assert.Equal(t, "Apple", r.MeaningCentral)
}
