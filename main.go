package main

import (
	"fmt"
	"github.com/go-martini/martini"
	"net/http"
	"strings"
)

func main() {
	fmt.Println("server is running ...")
	m := martini.Classic()
	m.Post("/", func(r *http.Request) string {
		r.ParseForm()
		result := make([]string, 0)
		for k, v := range r.Form {
			result = append(result, fmt.Sprintf("%v=%v", k, v))
		}
		return strings.Join(result, "\n")
	})

	m.Run()
}
