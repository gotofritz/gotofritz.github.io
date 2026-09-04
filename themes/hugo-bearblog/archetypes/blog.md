---
title: '{{ replaceRE "^\\d{4}-\\d{2}-\\d{2}-" "" .Name | replaceRE "-" " " | title }}'
date: "{{ .Date }}"

description: ""

tags: [
{{- range $term, $val := .Site.Taxonomies.tags }}
 "{{ $term }}",
{{- end }}
]

---

This is a page about »{{ replace .Name "-" " " | title }}«.
