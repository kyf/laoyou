package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		r.ParseForm()
		for k, v := range r.Form {
			w.Write([]byte(fmt.Sprintf("%v=%v", k, v)))
		}
	})

	fmt.Println("server is running ...")
	err := http.ListenAndServe(":1472", nil)
	if err != nil {
		fmt.Println("listen error : ", err)
	}
}
