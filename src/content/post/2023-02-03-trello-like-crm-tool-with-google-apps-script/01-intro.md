---
publishDate: 2023-03-06
draft: true
archived: false
title: "A Trello-like CRM tool with Google Apps Script: 1/ introduction"
slug: trello-like-crm-tool-with-google-apps-script/01-introduction
tags:
  - GoogleAppsScript
description: |-
  Keeping track of all the leads and opportunities when freelancing or job hunting, can be a daunting task. A series of articles on how to create a Google Apps Script app to make the process easier.
---

## Articles in this series

1. [Introduction](./01-intro.md)
1. [GAS principles](./02-gas-principles)
1. The main classes

## The problem am I trying to solve: keeping track of several hiring processes at once

In the good old zero interest rate days I found I had to juggle several interview processes at once. Each one with multiple steps and several people which you only meet briefly. After a while keeping track of all of those becomes a daunting task. Particularly if you still have a full time job as well. This is where software can help.

### What is CRM software?

<abbr title="Customer Relationship Management">CRM</abbr> software manages sales pipeline - when did you last contact customer X, what was said, what are the changes you'll make a deal, when is the next contact due, etc. If you replace "sale" with "hire" this is very similar to the recruitment process. CRM software treats the process as steps in a progression. It gives you a bird's-eye view of the whole progression, reminds you of overdue steps, among other things. So far so good. But CRM is quite a wide field within Business Administration. CRM software tries to cover it all, and as a result it tends to be complex. It's a time and money investment only worth if you use it daily as your main tool. I don't, therefore I need something simpler.

### Why not just use Trello? Or Basecamp? Or Notion? Or ...?

I never understood the appeal of Trello. Yes, it gives you a Kanban-like workflow and the ability to include pretty pictures. But entering and editing data is way too laborious for my taste. You always need several clicks to get where you want. Also, I couldn't find ways to reorder or mark steps as done without archiving them. And the horizontal scroll thing doesn't work for me. It works for physical whiteboards on walls, but not so much for electronic devices, IMHO

Of all the other options, only outliners like Workflowy come close to what I need. But not as close as a spreadsheet. Really, for tasks you do only once in a while, spreadsheets rock.

### Google Sheets with Apps Script is a great tool for quick tools and prototypes

Google Sheets with some Google Apps Scripts (GAS) are quite underrated as prototyping tools. You can quickly put together small "apps" and distribute them around. No installation required. Just send a link and start gathering data and validating ideas.

## The requirements

Without getting into too many details, here's a bird view of what it needs to do

1. It lists all the current leads and give me quick visual indication of which look promising, which are overdue, etc
1. It arranges the processes by date due so that I can tell what is next
1. It shows me all the details of each steps in a process, including people I have spoken to and bullet points of what was discussed
1. It applies CRUD operations to steps in a process - create, edit. Steps include a date due
1. It applies CRUD operations to processes - create, add steps, archive
1. Data entry has to be quick - one mouse click and tabbing for most actions

Here's a short video showing the end product
