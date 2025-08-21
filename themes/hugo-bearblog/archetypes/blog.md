---
title: '{{ replaceRE "^\\d{4}-\\d{2}-\\d{2}-" "" .Name | replaceRE "-" " " | title }}'
date: "{{ .Date }}"

description: ""

tags: [{{ range $plural, $terms := .Site.Taxonomies }}{{ range $term, $val := $terms }}"{{ printf "%s" $term }}",{{ end }}{{ end }}]
---

This is a page about »{{ replace .Name "-" " " | title }}«.
