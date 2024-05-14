---
publishDate: 2024-05-14
draft: false
archived: false
title: "Disabling DJLint on non-Django projects"
tags:
  - Django
  - VSCode
description: Finally found out how to stop the annoying "djLint is not installed for the current active Python interpreter" modal window on VSCode.
---

## What is DJLint?

<a href="https://djlint.com/">DJLint</a> is a useful little tool to lint HTML templates in DJango projects. It does a great job and I recommend it.

## A little annoyance

I didn't install DJLint globally, I prefer each project to be self contained. And only a small percentage of the projects I work on are DJango projects. The issue is that DJLint attempts to lint _all_ the HTML files, regardless of whether they are part of a Django project or not. And then you get the annoying toaster message which you have to stop what you are doing to get rid of

![VSCode toaster displaying message 'djLint is not installed for the current active Python interpreter'](/assets/disabling-djlint-on-non-django-projects/annoying-djlint-toaster.png)

## Finally found the setting to turn it off

The [Django extension](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django) adds the "django-html" association to VScode, and that should be good enough to keep HTML files in the two stacks separate. But DJLint decides that all \*.html files are Django files. To disable this, you can change this in your settings:

```json
  "[html]": {
    "djlint.enableLinting": false
  },
```
