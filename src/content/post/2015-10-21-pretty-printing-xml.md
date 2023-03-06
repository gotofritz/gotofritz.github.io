---
title: Pretty printing XML
publishDate: 2015-10-21 00:38
description: <a href="http://www.w3.org/People/Raggett/tidy/">tidy</a> is a command line tool for formatting XML and HTML. Also available as a <a href="http://www.html-tidy.org/">Visual Studio Code Extension</a>
draft: false
tags:
  - HTML
  - Tools
  - XML
---

## What is tidy?

It's a very unslick util for tidying up HTML markup which gets the job done. To install it on OS X, simply do

```bash
❯ brew install tidy

```

## Tidy usage

To pretty print `input.xml` and save the output to `pretty_printed.xml`

```bash
❯ tidy -xml -i input.xml > pretty_printed.xml

```

There are several [command line options](http://tidy.sourceforge.net/docs/quickref.html#break-before-br). For example, to change the case of tabs to uppercase:

```bash
❯ tidy -xml --uppercase-tags y  -i input.xml

```

## Visual Studio Code

To install it on VSCode, just search for "Tidy" in the Extension Panel. Then you can use from the command panel (CMD-SHIFT-P) by simply typing "tidy"
