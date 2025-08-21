---
date: "{{ .Date }}"
draft: true
title: '{{ replaceRE "^\\d{4}-\\d{2}-\\d{2}-" "" .File.ContentBaseName | replace "-" " " | title }}'
description: "{{ .Description }}"
---
