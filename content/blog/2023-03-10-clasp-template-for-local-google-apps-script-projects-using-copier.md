---
publishdate: 2023-03-10
draft: false
archived: true
title: A Clasp template for local Google Apps Script projects, using copier
tags:
  - BoilerPlate
  - Copier
  - GoogleAppsScript
description: |-
  Google Apps Script (GAS) is something I've been using for years and always end up going back to. I explored [Clasp](https://github.com/google/clasp) for developing locally in typescript. But I am not pursuing this any further.
slug: clasp-template-for-local-google-apps-script-projects-using-copier
---

## What exactly _is_ Clasp?

[Clasp](https://github.com/google/clasp) is a small Google tool which lets you create a Google Apps Script (GAS) project (i.e., a scripted Sheets / Doc / Slides or other similar) locally, with Typescript, and syncs it with a local folder. It provides some useful Typescript types for all GAS entities. It kind of works, but it was a bit of a fuff to set up correctly locally. That's why I created a copier templatehttps://github.com/gotofritz/copier-template-clasp to quickly bootstrap new projects.

However I have no interest in maintaining the template or, indeed, work with Clasp at all. For all I know, Google may drop support for the project tomorrow.
