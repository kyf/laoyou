package main

import (
	"fmt"
	"net/http"
	"strings"
)

func init() {
	hs := []map[string]interface{}{
		{
			"path":   "/admin/create",
			"method": METHOD_POST,
			"handler": func(r *http.Request) string {
				r.ParseForm()

				circle := r.Form.Get("circle")
				pass := r.Form.Get("password")

				result := make([]string, 0)
				for k, v := range r.Form {
					result = append(result, fmt.Sprintf("%v=%v", k, v))
				}
				return strings.Join(result, "\n")

			},
		},
	}

	handlers = append(handlers, hs...)
}
