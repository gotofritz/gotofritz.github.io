---
publishDate: 2023-02-03
draft: true
archived: false
title: A Trello-like CRM tool with Google Apps Script
tags:
  - google apps script
description: |-
  Keeping track of all the leads and opportunities when freelancing or otherwise job hunting, can be a daunting task. I have built a simple tool in Google Apps Script to make the process easier
---

## A CR...what?

<abbr title="Customer Relationship Management">CRM</abbr> (Customer Relationship Management) is quite a wide field within Business Administration. But the part I am interested in is automated sales pipelines. I am talking about the sales that happens between companies, or when buying a house. Processes that have a few steps to them; not selling goods in a shop. And that's exactly how CRM software treats the whole sales process: as steps in a progression. It gives you a bird's-eye view of the whole progression, reminds you of overdue steps, among other things.

What has CRM got to do with getting hired in tech? Well, it is just a different sales pipeline. The only difference is that I'm selling my services instead of a boat or a house. There are still various steps and several parties involved. Being able to keep track at a glance of who I spoken to when, how I felt about it, when the next step is due, is super helpful. The more so when handling several processes at once.

## Need a CRM? Why not just use ...?

**Why not just use a _real_ CRM**? The issues with CRM software is that the problem they are trying to solve is quite broad. Commercial CRM software needs to be general enough to appeal to all types of users. To fit all their requirements, it often ends up overcomplicated and fiddly. Learning requires quite a time investment. Which might be worth if you work in sales and a CRM is your main tool. But I am a casual user. I tried [Capsule](https://capsulecrm.com/) and I found I spent most of my time trying to bend it to my needs. After that experience, I didn't feel like trying another one.

**Why not just use Trello**? I never understood the appeal of Trello. Yes, it gives you a Kanban-like workflow and the ability to include pretty pictures. But entering and editing data is way too laborious for my taste. You always need several clicks to get where you want. Also, I couldn't find ways to reorder or mark steps as done without archiving them. And the horizontal scroll thing doesn't work for me. It works for physical whiteboards on walls, but not so much for electronic devices, IMHO

**What's wrong with just writing your thoughts in a text file?** Nothing _wrong_ per se, but pretty primitive. You have to scan the whole file to extract information. And how do you get a bird's eye view of _all_ your processes at once?

## Google Sheets with Apps Script is a great tool for quick tools and prototypes

Google Sheets with some Google Apps Scripts (GAS) are quite underrated as prototyping tools. You can quickly put together small "apps" and distribute them around. No installation required. Just send a link and start gathering data and validating ideas. As long as you are aware of its strong points and limitations, which is the topic of the next section.
