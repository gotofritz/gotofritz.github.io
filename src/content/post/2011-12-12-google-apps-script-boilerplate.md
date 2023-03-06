---
description: I used to do a lot of Google Apps Script (GAS) programming, but Google's never seemed to interested in that product so I gave up. Here I document a simple boilerplate project so that I don't forget how to do it.
publishDate: 2011-12-12 13:34
title: A Google Apps Script boilerplate
tags:
  - GoogleAppsScript
---

## About Google Apps Script

[GAS](https://developers.google.com/apps-script/) allows you to add Javascript scripts to control all your various Google Apps like Calendar, Word documents, Spreadsheets, ... At one stage it looked very promising and exciting - I even started a whole series of tutorials (since deleted). That was until I realised the platform was very unstable and, more importantly, low priority for Google.

I still use GAS from time to time, whenever I need to exchange data with people who only really feel comfortable using spreadsheets, or for prototypes. So I thought it'd be useful to crystallise the little I know into a boilerplate, perhaps adding some extra bits.

## Minimal Google Apps Script boilerplate

The script is [available on GitHub](https://github.com/gotofritz/google-apps-script-boilerplate/blob/master/minimal.js).

When I created it, you couldn't import GAS scripts into your spreadsheet. I don't know if that's changed, but the old way to use it is

- Create your spreadsheet and name it so that it gets saved
- Select Tools > Script Editor from the spreadsheet menu. That will open a new browser tab with the script editor
- Copy and paste the content of [minimal.js](https://raw.githubusercontent.com/gotofritz/google-apps-script-boilerplate/master/minimal.js) into it
- In the menu above the script select 'onOpen' (it was the one next to the 'bug' icon when I wrote this), and then the 'play' button
- Now go back to the spreadsheet - there should be a new menu entry 'MY MENU' beside 'Help'

Once you got get going, you are ready to hack away. The 'help' menu will take you to API references for the various Google Apps products (Spreadsheet is only one of the available ones)
