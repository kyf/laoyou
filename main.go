package main

import (
	"fmt"
	"github.com/go-martini/martini"
)

var (
	handlers []map[string]interface{} = make([]map[string]interface{}, 0)
)

func main() {
	m := martini.Classic()

	for _, h := range handlers {
		if method, ok := h["method"].(string); ok {
			switch method {
			case METHOD_POST:
				if p, ok := h["path"].(string); ok {
					m.Post(p, h["handler"])
				}
			case METHOD_GET:
				if p, ok := h["path"].(string); ok {
					m.Get(p, h["handler"])
				}
			default:
			}
		}
	}

	fmt.Println("server is running ...")
	m.Run()
}
