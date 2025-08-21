---
description: Prettier autoformatting screws up Django html templates in Visual Studio Code. For example, it puts tags on the same line when they shouldn't be. The fix is pretty simple and involves a couple of different formatting extension.
publishdate: 2022-03-24
draft: false
archived: false
title: Fixing autoformatting Django templates in Visual Studio Co
tags:
  - Django
  - Python
  - VSCode
slug: fixing-autoformatting-django-templates-in-visual-studio-code
---

This post consolidates the information I got the information from a couple of <abbr title="Stack Overflow">SO</abbr> answers.

1. Install the [Django](https://github.com/vscode-django/vscode-django) extension. It will give you some snippets, and syntax higlighting. But most important, it will add the `django-html` filetype to <abbr title="Visual Studio Code">VSC</abbr>
1. Install the [Beautify](https://github.com/HookyQR/VSCodeBeautify) extension. This will replace Prettier for those specific files
1. Open the User settings, and switch to JSON mode. You will be adding a few settings manually
1. The `files.associations` block could be already in your settings. If it isn't, you need to add it. Otherwise add the following associations to it

   ```json
   "files.associations": {
     "**/templates/*.html": "django-html",
     "**/*.html": "html"
   },
   ```

1. Tell Beautify about Django templates

   ```json
   "beautify.language": {
     "html": ["htm", "html", "django-html"]
   },
   ```

1. Replace Prettier with Beautify for Django templates. Note that `"prettier.disableLanguages": ["django-html"],` is no longer supported by VSC.

   ```json
   "[django-html]": {
     "editor.defaultFormatter": "HookyQR.beautify"
   },
   ```

   You can of course add more settings to that particular block; for example, mine is

   ```json
   "[django-html]": {
     "editor.defaultFormatter": "HookyQR.beautify",
     "editor.formatOnSave": true,
     "editor.tabSize": 2
   },
   ```

1. If you like emmet, which is now part of VSC by default, also add

   ```json
   "emmet.includeLanguages": {
     "django-html": "html"
   }
   ```

## Prior art

I got some of the information from [this SO answer](https://stackoverflow.com/questions/42170561/vscode-html-autoformat-on-django-template) and [this other SO answer](https://stackoverflow.com/questions/55175822/there-is-no-document-formatter-for-django-html-files-installed/63091040#63091040)
