---
date: 2021-11-06
draft: true
archived: false
title: A Trello-like CRM tool with Google Apps Script
permalink: /blog/trello-like-crm-tool-with-google-apps-script
tags:
  - google apps script
excerpt: Keeping track of all the leads and processes when freelancing or now that I have just been laid off and am job hunting, can be a daunting task. I have built a simple tool in Google Apps Script to make the process easier
---

## Why not just use ...?

_Why not just use a real CRM_? The issues with CRMs is that the whole problem area is quite broad, and CRM software needs to be general enough to appeal to all types of users. As a result the software is often difficult to learn and fiddly to adapt to your own particular workflow. This time investment is probably worth if you work in sales and a CRM is your main tool, but that's not my case. I tried [Capsule](https://capsulecrm.com/), but I found I spent way to much time wrestling with it rather than doing what I needed to do.

_Why not just use Trello_? Trello is great for teams using Kanban-like workflows, but I found entering and editing data far too laborious for my taste. You always need several clicks to get where you want. Also, I couln't find ways to reorder or archive steps. Finally, I prefer to arrange processes top to bottom rather than horizontally.

## Google Sheets with Apps Script is a great tool for quick tools and prototypes

## Tips on using Google Apps Script

### Lazy loading vs trying to build a SPA

### Start with the data and use abastractions

### OOP for modeling problem, FP for shared functionality

### Testing is not a solved problem

## Coding the App

### Setup and menu

### Iterating without programming to reach an initial MVP

### Modelling the data

#### Generic Atom component

#### Derived components: Step, Current, Meta

#### A Sequence of Steps

#### There must be a better way to provide input...

#### Bringing it All Together: Store

#### Conclusion and potential next steps

I have used this app for a while and does the job quite well, with a minimum of fuss. And what is more, it was usable from day 1 - with a lot of manual data entry at the beginning, which became less and less as I automated more and more steps. Obviously it's not as slick as a SPA put together by a team of UX and FE devs, but then it costed rather less in term of efforts. I find Google Apps Script great for knocking together quick prototypes like this.

I am not going to take this any further as my basic needs are met. But should I want to, it would be possible, for example to

- integrate with email to automatically generate steps from incoming messages, or generate emails from steps
- integrate with calendar to generate appointments and set reminders
- all of the above, to automatically generate emails with a list of available slots from my calendar.

This would actually be quite usefaul, and who knows, I may well tackle it one of these days.
