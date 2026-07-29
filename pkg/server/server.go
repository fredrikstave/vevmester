package server

import (
	"errors"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func New() {
	fs := http.FileServer(http.Dir("./public"))

	http.Handle("/css/", fs)
	http.Handle("/gfx/", fs)
	http.Handle("/icons/", fs)
	http.Handle("/js/", fs)

	http.HandleFunc("/", serveTemplate)

	log.Fatal(http.ListenAndServe(":80", nil))
}

func serveTemplate(w http.ResponseWriter, req *http.Request) {
	pathName := filepath.Clean(req.URL.Path)

	if pathName == "/" {
		pathName = "index.html"
	} else if filepath.Ext(pathName) == "" {
		pathName = pathName + ".html"
	}

	layout := filepath.Join("templates", "layout.html")
	page := filepath.Join("pages", pathName)

	if _, err := os.Stat(page); errors.Is(err, os.ErrNotExist) {
		w.WriteHeader(http.StatusNotFound)
		page = filepath.Join("pages", "404.html")
	}

	tmpl, err := template.ParseFiles(layout, page)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintln(w, "Internal server error")
		return
	}

	tmpl.ExecuteTemplate(w, "layout", nil)
}
