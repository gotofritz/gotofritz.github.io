---
publishDate: 2022-05-26T17:04:48.123316
draft: true
archived: false
title: A Trello-like CRM tool with Google Apps Script
tags:
  - GoogleAppsScript
description: |-
  Keeping track of all the leads and opportunities when freelancing or otherwise job hunting, can be a daunting task. I have built a simple tool in Google Apps Script to make the process easier
---

## Tips on using Google Apps Script for prototyping

In these years of using Google Apps Scripts I have collected a couple of principles that helped me well.

### To clasp or not to clasp?

[Clasp](https://github.com/google/clasp) is a Google library for helping develop Google Apps Script projects locally in typescript. Sounds great, right? Well not quite. It's a very minor project at Google, which has already peaked and seems to be in Keep The Lights On mode. There have been four major contributors to it, none of whom is currently at Google (and only one was, to start with). All of them have stopped contributing a couple of years ago. A new Google employee has been pushing a few commits a few months ago, and that was that. My spider sense tells me clasp will keep working until suddenly it doesn't. But then, is that any different from vanilla GAS? or anything Google for that matter? The moment you pick their stack you know the score.

Another objection is the development cycle: write - compile - push. You can't run your scripts locally, of course, you have to bundle them and push them to Google. That is actually the same as if you were using the standard editor. The standard editor also bundles the various files that make up your app into a single js file which is then run by Rhino. The cycle is just invisible to us. One could theoretically set up clasp to do the bundling and pushing automatically on save. Should you choose to.

A bigger risk is that once you start using Clasp you can't go back. You can't get your individual .ts files back. You can't apply a quick fix directly in the editor. If clasp stops working, you'll be left with one big bundled .gs file. If you use comments at the top your individual files to separate them and include their path, it should be possible to recreate them manually later. But it will be ugly transpiled .ts and not "native" GAS / JS.

#### With so many downsides, why bother at all?

It may seem daft to even consider it, given the downsides, but it has some very big advantages IMHO

- **Developer experience and tooling** Tooling is not just the ability to use prettier and eslint, but also basic functionality like global search, which has been broken in the Google Script editor for years with no sign it will ever be fixed.
- **Tests** Well it would be nice
- **Third party libraries** working locally with pnpm also allows you to bundle any third party script you fancy, from currency formatters to date handlers, to Ramda, you name it. And that include your own shared libraries, of course

So it's a bit of a risky bet, but all in all a risk I'm willing to take.

[PopGoesTheWza wrote](https://stackoverflow.com/a/66715855/345007):

> Don't rely on @google/clasp for compiling your typescript into .gs
>
> Trust me (as a major contributor to clasp) you'll be best by handling the compilation yourself, with clasp only being used to push your compiled files.
>
> I have a github template which may get you started: <https://github.com/PopGoesTheWza/ts-gas-project-starter>

## Using clasp

I am going to fork [PopGoesTheWza/ts-gas-project-starter](https://github.com/PopGoesTheWza/ts-gas-project-starter) and use it as starting point, hoping it's not going to become obsolete too soon. The repo is quite old, but it's not as if the Google Apps Script / Clasp space is abuzz with activity. I could updated it to the current (Q12023) version of Typescript, so it can't be that bad.

### Simplifying the clasp starter

PopGoesTheWza's repo is designed to be a centralised platform from which to publish separate GAS projects. I'd rather keep the projects separate, so first of all I will simplify that part.

### 1. Don't try and model the app's state. A spreadsheet _is_ already a state manager, just read it

Google are super cautious when it comes to security with GAS. They limit a lot of functionality. Trying to build a fully fledged <abbr title="Single Page Application">SPA</abbr> with it is going to run into walls pretty quick. You can't detect when a user is selecting a cell or interacting with the UI. I am talking about things like automatically reordering a list when a user edits or deletes an item in it. My suggestion is to save yourself some frustration and not even try.

Just like in the good old days of the `cgi-bin`, your app shouldn't keep the state of the application in memory. The spreadsheet _is_ the app's state. Nor should the app do anything until the user clicks on a button, or picks an entry from a menu. When that happens, the app should look at the command that was just sent, look at the state of the spreadsheet at that moment, and decide what to do next. And when that is finished, it should completely forget about it. Until the user clicks again.

The typical flow would be:

1. User selects cell(s) in worksheet (optional)
1. User selects an entry from a custom menu which you have created
1. The GAS script looks at the spreadsheet (including current selection from 1., if any) and works out the App's phase from it
1. the script does whatever processing it needs and updates the App state
1. the script updates the spreadsheet to match the new App state
1. the scripts finishes and the user is free to mess with the spreadsheet manually
1. back to 1.

### 2. Resist the temptation to start coding straight away

The nice thing about prototyping with Google Sheets is that you can start without needing any scripting. Just do everything completely manually - add a row, change the background colour of a cell, type some text. You just need to _think_ like a script, and repeat actions mechanically and methodically. It requires a bit of discipline, but it's doable. Then when you notice a standard sequence of repetitive steps, you can start adding scripting to replace them. The app will grow organically. It doesn't get more [Lean](https://www.natechplastics.com/four-stages-of-lean-product-development/) than that!

### 3. Model your problem space first

For small prototype the temptation is often to jump in and hack some code and see it at work. But that doesn't work so well with GAS. That's because your code will consist of endless variations on the same themes. Insert a cell, insert a row, copy some cell content elsewhere, remove a cell, etc. Over and over. All the code ends up looking the same with only minor variations. Then you notice some patterns, and decide to abstract them into generalised functions. But they also look exactly the same as everything else. It's like a house of mirrors. You'll get lost very quickly.

Instead try and create abstractions that reflect your problem space. You are writing a recipes app? Think of Ingredients, Steps or whatever else. A journey planner? Then you may need Destination and so on. That may seem an overkill at first, but it will be very helpful as your prototype grows. Also think of <abbr title="Object Oriented Programming">OOP</abbr>, and collect all your similar abstractions into a container / manager. So an IngredientList for Ingredients, a TripManager for a collection of Destinations, etc. Yes it smells like Java, but that's how the underlying stack works. It seems foolish to fight it.

### 4. OOP is actually quite helpful (but there is a place for some FP too)

GAS is very classical-OOP based. You have a Sheet object, with contains Range objects, and so on. Whatever you think of OOP, It actually helps using the same approach for your abstraction. Once you have identified your abstractions, what can happen to them? An Ingredient in a recipes app, for example. You can recalculate amount if you change the number of servings. Then add a `recalculateAmount` method. Or you may have a "convert to metric" toggle - then add a `convertToMetric` method to your Ingredient class. And so on. Under the bonnet then the abstraction will interact with one of the GAS objects, and create a Sheet, or move a Range, and so on.

FP becomes useful when you want to share utilities, especially formatting. For example, an `asArchive` function would be useful to add consistent formatting to some of your abstractions. But then again you could do that with multiple inheritance or mixins.

### 5. Testing is not a solved problem

"We didn't write tests because we didn't have time... we didn't have time because we didn't write tests" is a well known programming meme. Sadly it's pretty much the only way with GAS. At the time of writing there isn't a testing framework for it. You will have to roll out your own. And it's not that easy (you can't simulate button clicks etc). The time investment in trying to write some sort of meaningful tests far outweigh the time it'd take you to fix any bugs. I know because I tried. Unless writing GAS is your full time job and you are really investing in it for the long term, of course. If you do let me know, I'd love to use your testing libraries 😉

### 6. Always save your co-ordinates (rows, cells) in constants

It's inevitable that during the app lifetime you will want to move rows around here, add a column there, and so on. That means changing co-ordinates of all your methods. You really don't want to have go through your functions and manually update all those numbers. Saving magic numbers in constants is a standard good practice in programming, but imperative with gS. It's confusing enough that half the built-in methods are 0-indexed, and the other half 1-indexed.

### 7. Use sidebars to enter data

<https://developers.google.com/apps-script/guides/dialogs>

### 8. Beware of data conversions: create util functions

Spreadsheets are notorious for their irritating habit of converting cell data to something you don't want. GAS is not exempt from that. Dates, or anything date-like, are particularly tricky. Numbers are always represented with one decimal point internally, so be careful you may get a "4.0" when you are expecting a "4". I suggest creating util functions for forcing conversion and be double sure.

### Script structure

![My standard Google Apps Script file structure](/assets/trello-like-crm-tool-with-google-apps-script/scripts.png)

I tend to organise the scripts in my projects pretty much the same way.

<dl class="code-breakdown">
<dt>main.gs</dt>
<dd>When you select a <code>Extensions > Apps Script</code> from the menu, a script called Code.gs is created. I rename it to <code>main.gs</code>. In it, I put the <code>function onOpen() ...</code> that creates the main menu I use to enhance the spreadsheet. Each entry in the menu is mapped to a function, and those functions are all in this script as well. They will then call functions in other scripts. This allows me to run scripts from the editor, which is essential if you want to debug. <code>noop</code> is just an empty function, used as a placeholder. ![Running functions with debugger](/assets/trello-like-crm-tool-with-google-apps-script/debug.png)</dd>

<dt>globals.gs</dt>
<dd>All constants are here, like <code>const SS = SpreadsheetApp.getActiveSpreadsheet();</code> which is always needed. Colors. I assign rows and columns to variables, like <code>const DATA_ROW_START = 2;</code></dd>

<dt>genericGotofritzUtils.gs</dt>
<dd>GAS is quite quirky, and I have a few trusty functions which I use in all projects. Things like <code>getIndexOfSelectedRow</code> or converting to/from date which is often problematic</dd>

<dt>utils.gs</dt>
<dd>These are generic functions specific to this project</dd>

<dt>..the rest</dt>
<dd>Then I tend to create a file for each class, and encapsulate functionality that way</dd>
</dl>
