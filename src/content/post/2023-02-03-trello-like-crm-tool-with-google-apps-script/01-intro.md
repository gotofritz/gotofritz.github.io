---
publishDate: 2023-03-06
draft: true
archived: false
title: "A Trello-like CRM tool with Google Apps Script. Part 1"
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

Back in the days of zero interest rates, I had to juggle multiple interview processes simultaneously. Each step involved quick encounters with different people. But keeping track of them all became an overwhelming task, especially while working full-time. This is where software can help.

### What is CRM software?

<abbr title="Customer Relationship Management">CRM</abbr> software is designed to manage your sales pipeline. It tracks crucial details such as the last time you contacted a customer, the content of the conversation, the changes you'll make to secure a deal, and when the next contact is due. If you substitute "getting hired" for "sale," it pretty much describes the recruitment process. The software treats each step as a progression, providing a bird's-eye view of the entire process and reminding you of overdue tasks. But CRM encompasses a broad field within Business Administration, making it complex and time-consuming. To make it worthwhile, you must use it daily as your primary tool. However, if you are just an occasional user, like me, it may not be the best investment.

### Why not just use Trello? Or Basecamp? Or Notion? Or ...?

I've never been a fan of Trello. Sure, the Kanban-style flow and pretty pictures are nice, but entering and editing data it's a laborious chore. The endless clicking to get where you want is just painful. And don't get me started on the inability to reorder or mark steps as done without archiving them. Plus, the horizontal scroll is a complete nightmare on electronic devices (it would work quite well on physical whiteboards, though).

Of the other options out there, only as outliners like Workflowy come close for speed of entry, shallow learning curve, and easy access to all the information. But not as close as good old spreadsheets. Let's be real, when it comes to tasks you only do once in a while, spreadsheets are the real deal.

### Google Sheets with Apps Script is a great tool for quick mvps and prototypes

Google Sheets with some Google Apps Scripts (GAS) are quite underrated as prototyping tools. You can quickly put together small "apps" and distribute them around. No installation required. Just send a link and start gathering data and validating ideas.

## The requirements

This is what the homemade CRM-like, souped up spreadsheet needs to do

1. It shows me all the ongoing processes in one page, ordered from most urgent to least
1. It makes it easy to see what I need to do next
1. It shows me all the processes which have gone cold in another page, ordered by date
1. It color codes processes to indicate promising, hopeless, cowboys, and a few other categories
1. Each process is a sequence of steps arranged chronologically
1. Steps can be created, edited. Every time this is done, the page is reordered
1. Processes can be created, edited, archived, or have steps added to it

After experimenting for a while I came up with the UI shown in the video. This series of articles show how it was built
