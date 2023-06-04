---
publishDate: 2023-03-07
draft: true
archived: false
title: "A Trello-like CRM tool with Google Apps Script. Part 4: Clasp"
tags:
  - GoogleAppsScript
description: |-
  And now with clasp
---

## Using clasp

I create the project with Copier and my [Clasp project starter](./clasp-template-for-local-google-apps-script-projects-using-copier.md)

## What I am building

For some reason <abbr title="Google Apps Script">GAS</abbr> brings out the enterprise OOP engineer in me. Perhaps it's what staring at spreadsheets all day does to you. But it's useful to create UML diagrams of what I'm going to build

...

## Serverless means Stateless

Even though one typically edits their Scripts in an editor attached to their Sheet (or Doc, or...), what they are actually doing is creating serverless functions, which just happen to affect their spreadsheet in the other tab. And serverless means stateless. There are no variables persisted between your calls, no "result of the previous calculation", no state. So how does one build an app at all? How does it remember what the user selected two steps ago? There are different approaches

- Connecting to a **third party service** - for example using the [JDBC connector](https://developers.google.com/apps-script/guides/jdbc)
- Serialising the state to string fragments, and saving it as **key/value pairs to a different Sheet**. That was the only option in the early days
- Serialising the state to string fragments, and saving it as **key/value pairs to the [PropertiesService](https://developers.google.com/apps-script/guides/properties)**, which is a mini-Redis attached to the current doc
- **Encode / Decode** state from the state of the document itself.

I am not a fan of using a third party service - at that stage why not build the whole app wherever the third party service is. And serialising to strings can be useful, but it becomes a chore to debug. The last option appeals the most. Since all changes eventually lead to changes in the UI, why not make the UI the source of truth for the app? The extra benefit is that one can start updating the document manually even if the code is not ready yet. Debugging is easier; the state is right there in the document. Always in sync. The downsides are that manually editing the document can lead to invalid data if the format is too strict. But that is always a problem; documents can be edited independently from the GAS code. Having the code load the state from the UI also validates the document. Another downside is that parsing the document can be slow if the document gets big, but if the state is complex that would be the case with any approach.

## Loading States from the Sheet

Back to the class diagram. Each Step is associated with a State, which has has some colours and names associated with it. The top row will contain a visual reference for the user, but not only: the app itself will parse this visual reference and create internal list of States for future use. Creating and accessing those reference States is the job of the StateMgr.
