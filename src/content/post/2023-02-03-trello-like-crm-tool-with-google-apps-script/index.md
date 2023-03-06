---
publishDate: 2022-05-26T17:04:48.123316
draft: true
archived: false
title: A Trello-like CRM tool with Google Apps Script
tags:
  - GoogleAppsScript
description: |-
  Keeping track of all the leads and opportunities when freelancing or now that I have just been laid off and am job hunting, can be a daunting task. I have built a simple tool in Google Apps Script to make the process easier
---

## Need a CRM? Why not just use ...?

_Why not just use a real CRM_? The issues with CRMs is that the problem they are trying to solve is quite broad. Commercial CRM software needs to be general enough to appeal to all types of users. To fit all their requirements, it often ends up overcomplicated and fiddly. Learning requires quite a time investment. Which might be worth if you work in sales and a CRM is your main tool. But I am a casual user. I tried [Capsule](https://capsulecrm.com/) and I found I spent most of my time trying to bend it to my needs.

_Why not just use Trello_? I never understood the appeal of Trello. Yes, it gives you a Kanban-like workflow and the ability to include pretty pictures. But entering and editing data is way too laborious for my taste. You always need several clicks to get where you want. Also, I couldn't find ways to reorder or archive steps. And the horizontal scroll thing doesn't work for me. It works for physical whiteboards on walls, but not so much for electronic devices, IMHO

## Google Sheets with Apps Script is a great tool for quick tools and prototypes

Google Sheets with some Google Apps Scripts (GAS) and maybe forms are quite underrated as prototyping tools. You can quickly put together small "apps" and distribute them around. No installation required. Just send a link and start gathering data and validating ideas. As long as you are aware of its strong points and limitations

## Tips on using Google Apps Script for prototyping

In these years of using Google Apps Scripts I have collected a couple of principles that helped me well.

### 1. Explicit interactions vs trying to build a SPA

Google are super cautious when it comes to security with GAS. They limit a lot of functionality. Trying to build a fully fledged <abbr title="Single Page Application">SPA</abbr> with it is going to run into walls pretty quick. You can't detect when a user is selecting a cell or interacting with the UI. I am talking about things like automatically reordering a list when a user edits or deletes an item in it. My suggestion is to save yourself some frustration and not even try.

Just build your "app" like in the good old days of the `cgi-bin`. But ONLY DOING THE JOB YOU NEED TO. That is, completely stateless. The typical flow would be:

1. User selects cell(s) in worksheet (optional)
1. User selects an entry from a custom menu which you have created
1. The GAS script looks at the spreadsheet (including current selection from 1., if any) and works out the App's phase from it
1. the script does whatever processing it needs and updates the App state
1. the script updates the spreadsheet to match the new App state
1. the scripts finishes and the user is free to mess with the spreadsheet manually
1. back to 1.

### 2. minimal work

### 2. Resist the temptation to start coding straight away

The nice thing about prototyping with Google Sheets is that you can start without needing any scripting. Just do everything completely manually. You just need to _think_ like a script, and repeat actions mechanically. Requires a bit of discipline, but it's doable. Then you can start adding scripting to replace the most common manual steps you take. The app will grow organically. It doesn't get more [Lean](https://www.natechplastics.com/four-stages-of-lean-product-development/) than that!

### 3. Model your problem space first

For small prototype the temptation is often to jump in and hack some code and see it at work. But that doesn't work so well with GAS. That's because your code will consist of endless variations on the same themes. Insert a cell, insert a row, copy some cell content elsewhere, remove a cell, etc. Over and over. All the code ends up looking the same with only minor variations. Then you notice some patterns, and decide to abstract them into generalised functions. But they also look exactly the same as everything else. It's like a house of mirrors. You'll get lost very quickly.

Instead try and create abstractions that reflect your problem space. You are writing a recipes app? Think of Ingredients, Steps or whatever else. A journey planner? Then you may need Destination and so on. That may seem an overkill at first, but it will be very helpful as your prototype grows. Also think of <abbr title="Object Oriented Programming">OOP</abbr>, and collect all your similar abstractions into a container / manager. So an IngredientList for Ingredients, a TripManager for a collection of Destinations, etc. Yes it smells like Java, but that's how the underlying stack works. It seems foolish to fight it.

something something layout of cells or multiple cells something

### 4. OOP is actually quite helpful (but there is a place for some FP too)

GAS is very classical-OOP based. You have a Sheet object, with contains Range objects, and so on. Whatever you think of OOP, It actually helps using the same approach for your abstraction. Once you have identified your abstractions, what can happen to them? An Ingredient in a recipes app, for example. You can recalculate amount if you change the number of servings. Then add a `recalculateAmount` method. Or you may have a "convert to metric" toggle - then add a `convertToMetric` method to your Ingredient class. And so on. Under the bonnet then the abstraction will interact with one of the GAS objects, and create a Sheet, or move a Range, and so on.

FP becomes useful when you want to share utilities, especially formatting. For example, an `asArchive` function would be useful to add consistent formatting to some of your abstractions. But then again you could do that with multiple inheritance or mixins.

### 5. Testing is not a solved problem

"We didn't write tests because we didn't have time... we didn't have time because we didn't write tests" is a well known programming meme. Sadly it's pretty much the only way with GAS. At the time of writing there isn't a testing framework for it. You will have to roll out your own. And it's not that easy (you can't simulate button clicks etc). The time investment in trying to write some sort of meaningful tests far outweigh the time it'd take you to fix any bugs. I know because I tried. Unless writing GAS is your full time job and you are really investing in it for the long term, of course. If you do let me know, I'd love to use your testing libraries 😉

### 6. Always save your co-ordinates (rows, cells) in constants

It's inevitable that during the app lifetime you will want to move rows around here, add a column there, and so on. That means changing co-ordinates of all your methods. You really don't want to have go through your functions and manually update all those numbers. Putting magic numbers in function is a standard good practice in programming, but imperative with gS. It's confusing enough that half the built-in methods are 0-indexed, and the other half 1-indexed.

### 7. Use sidebars to enter data

<https://developers.google.com/apps-script/guides/dialogs>

### 8. Beware of data conversions

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

## Designing a CRM app

### Step 1: Defining the problem

As a job seeker I have quite simple needs. In short:

- keep track of the **many** active **opportunities**, so that I know in what **phase** each opportunity is, and what **stages** in the interview process are coming up when
- archive opportunities when they are no longer active. So that they are out of the way but I can search through them to find out if I have history with recruiter x or company y

The words in bold look like good candidates for entities. The basic entity seems to be the **Opportunities**. There are _many_ of them, i.e. _collections_, or **Pools** of them. Each process goes through a sequence of **Steps**. Both opportunities and Steps can be in one of a predefined set of **States**. These are my main entities. Plus of course an **App** entity to orchestrate everything.

There are potentially many other entities (company, recruiter, interviewer, etc) but modelling them doesn't really help me (although they may still be useful). For now I'll just treat that information as background noise which I need to move around but not process.

Now I need to flesh out some details of each entity

#### State

![A list of States](/assets/trello-like-crm-tool-with-google-apps-script/states.png)

An Opportunity or Step can be in one of a predefined State. States are hierarchical. The main phases are DUE and COMPLETE. The States associated with DUE are: OVERDUE, MAYBE_FAIL, MAYBE_SUCCESS, DUE, TENTATIVE_DUE. The States associated with COMPLETE are FAIL, SUCCESS, COMPLETE, BLACKLIST. Each Step has style information associated with it (a background and foreground colour). This style information is used both as a visual hint for the user, and as a way for the app to find out what phase a certain entity is. This entity has no methods, it's just a map of strings to style information. The States are actually created in Row 1 of the LIVE Sheet, which must always be present. The style information, name of the phase, and name of parent phase, is embedded in the name. So for example the DUE/OVERDUE cell will take phase OVERDUE, and so on.

#### Step

![A Step](/assets/trello-like-crm-tool-with-google-apps-script/stage.png)

A Step is at the lowest level of the hierarchy. It typically involves an appointment or deadline or action (like sending a CV, a tech challenge, an interview). It is represented by a Cell in a Sheet, but the Step entity itself doesn't know which sheet or which Pool it belongs to. A Step is always associated with a State. It contains other data: phase, date, time, contact involved, name of step, comments. Note that all of these are just strings. When the app needs to do something to a Step, it reads the text content of a cell, parses it, extracts all of the data information from it and instantiates a data object. Then it does whatever processing it needs to do. Finally it does the same process but in reverse: encode the data as a string, puts it in the cell, then change the visual appearance according to the phase the cell is in.

The methods the Step entity will need are:

- loadFromSheet -> decodes a spreadsheet cell to instantiate a State entity
- writeToCell -> serialises a State entity to a spreadsheet cell
- addComment -> comments are a list; this is a utility function to add to them

#### Opportunity

![An Opportunity](/assets/trello-like-crm-tool-with-google-apps-script/opportunity.png)

The next level up. An Opportunity is a sequence of Steps with metadata. Every Opportunity has a State and at least a Step. The State of an Opportunity is the State of the latest Step within it. An Opportunity is associated with a spreadsheet row. When running a command, the app will read all of the cells in the row, decode the metadata, and then decode each of the Steps. From that information it can then create an Opportunity instance.

An Opportunity's metadata is displayed in a cell in column 1. The initial Step is shown in a cell in column 2. Both columns are frozen, and their information doesn't change. All of the subsequent steps are shown from column 3 onwards. The ordering is a bit tricky. Column 3 is always the next DUE Step, if any. After that come all the remaining DUE Steps with the latest dates last. Then come the COMPLETE Steps, but they are ordered the other way, i.e. earliest date last. This may sound counter-intuitive, but after experimenting with a few options it works quite well. It lets me see the phase of all the Opportunities at a glance (it's always in column 3), without constantly having to scroll horizontally. There cannot be duplicate Opportunities.

An Opportunity can:

- loadFromRow -> decodes a spreadsheet row to instantiate an Opportunity entity
- writeToRow -> the opposite
- activateNextStep -> changes the current Step (i.e, the one in column 3) to one of the COMPLETE States, and either promotes the next DUE Step to column 3 or it asks the user for input so that it can create one
- addComment -> to the metadata in column 1

#### Pools

![A pool](/assets/trello-like-crm-tool-with-google-apps-script/pool.png)

A Pool (=collection) of Opportunities. Each Pool corresponds to a Sheet. Opportunities can be moved from one Pool to another, but Pools don't need to know about it. They simply deal with whatever Opportunities they find in the current sheet. Pools don't have any metadata, except for the Sheet name which gives some information on the purpose of the Pool (for example LIVE, ARCHIVE BLACKLIST, etc)

A Pool can:

- loadFromSheet -> decodes a Sheet to instantiate an Pools entity
- writeToSheet -> the opposite
- sort -> the opportunities within it (grouped by State, descending by date)
- createOpportunity -> at the top of the Sheet

#### App

The App entity is at the top of the hierarchy. It consists of Pools. The list of Pools is arbitrary and hardcoded; the name of the sheet gives a hint of how the corresponding Pool will be managed. Not all Pools will exist, you can create them or remove them with the menu. Potential names:

- LIVE: all the Opportunities in one of the DUE States. This is the only Pool that _must_ exist
- LIVE OVERDUE: if this Pool exists, the OVERDUE Opportunities are moved from LIVE to here. Is this is deleted, the opposite will happen
- ARCHIVE yyyy-qq: all of the COMPLETE Opportunities from quarter qq of year yyyy
- ARCHIVE BLACKLIST: if it exists, the BLACKLIST Opportunities are moved to here
- ARCHIVE PROMISING: individual COMPLETE Opportunities can be moved here

The App entity can:

- createPool -> creates one of the Pools above if it doesn't exist, and move the relevant Opportunities around. It uses the LIVE Pool as a template
- destroyPool -> the opposite (doesn't apply to LIVE)
- moveProcess -> to a different Pool
- updatePools -> ensures all the Opportunities are allocated to the correct Pool, creating ARCHIVE yyyy-qq as needed

### Step 2: Iterating without programming to reach an initial MVP

The above is the result of days of experimentation. Without any coding. I tried different layouts and abstractions and then pretended I was a script and did it all by hand. Keeping notes as I went along. Once happy I made a copy of it, removed all the sheets except for one called 'LIVE', and deleted all the data from it except for the top row. That's where the States are defined (useful as a legend). The first two column stay frozen.

![Initial sheet](/assets/trello-like-crm-tool-with-google-apps-script/blank-slate.png)

### Step 3: Setup and menu

~~When you select `Extensions > Apps Script` from the menu, a script called Code.gs is created. I typically use that to create a menu for the app. I use the menu for most functionality. Right now I create a divider for each of my main entities. It won't stay like that long term. But first I create a file called `constants.gs` where I put all of the globals. To start off it will contain SS, a const for the active spreadsheet. SS is needed pretty much everywhere. `noop` is just an empty function, used as a placeholder.~~

```js
//const.gs
const SS = SpreadsheetApp.getActiveSpreadsheet();
const noop = Function.prototype;
```

`onOpen` is not as useful as one may think. Because of Google's paranoia it is quite limited in what it can do. But it can create menus, so that's what this file does. The SS variable is accessible here to; in fact all the top level variables are. Adding `null` to the array of menu entries will create a divider.

```js
// Code.js
function onOpen() {
  SpreadsheetApp.getActiveSpreadsheet().setSpreadsheetTimeZone("Europe/Berlin");
  const menuEntries = [];
  menuEntries.push(
    { name: "APP", functionName: "noop" },
    null,
    { name: "POOL", functionName: "noop" },
    null,
    { name: "OPPORTUNITY", functionName: "noop" },
    null,
    { name: "STAGE", functionName: "noop" },
    null,
    { name: "STATES", functionName: "noop" },
    null,
  );
  SS.addMenu("CRM 4.0", menuEntries);
}
```

![The initial menu, with placeholders](/assets/trello-like-crm-tool-with-google-apps-script/menu.png)

### Step 4: Creating opportunity

Let's start doing something useful: creating a new opportunity. A new menu entry will call an actual function.

```diff
// main.gs
    ...
    { name: "POOL", functionName: "noop" },
+   { name: "> New opportunity", functionName: "createOpportunity" },
    null,
    { name: "OPPORTUNITY", functionName: "noop" },
    ...
```

I create a separate file for all the menu function. That helps when debugging, because I can pick one of the function and then just run it by pressing the button at the top. That is essential to be able to view any error messages.

The sequence of steps within the function is quite self-explanatory. Function names which end with an underscore are "private" in GAS.

```js
// main.gs
function createOpportunity() {
  const pool = new Pool();
  pool.createOpportunity();
  pool.updateUI();
}
```

For this I will need a Pool class ...

```js
// pool.gs
class Pool {
  constructor({ sh = SS.getActiveSheet() } = {}) {
    this.sh = sh;
    this.opportunities = [];
    this.loadStateFromSheet_();
  }

  loadStateFromSheet_() {}

  updateUI() {}

  createOpportunity() {
    this.opportunities.unshift(new Opportunity({ sh: this.sh }));
  }
}
```

...and an Opportunity one

```js
// opportunity.gs
class Opportunity {
  constructor({ sh = SS.getActiveSheet(), row = DATA_ROW_START } = {}) {
    this.sh = sh;
    this.row = row;
    this.stages = [];
    this.loadStateFromSheet_({ sh: this.sh, row: this.row });
  }

  loadStateFromSheet_() {}

  updateUI() {}
}
```

Double check that selecting `> New opportunity` doesn't throw any error. Good. Now to fill in the gaps. The minimal work would be to insert a row at the top, and push all the others down, without touching them. But I prefer the _stateless_ approach - i.e., load the complete Pool phase, process it, save the complete Pool phase. That sounds wasteful, but it means that I can combine functions any way I want. I can always be sure that at the end of each step the UI is in sync with the app state. And I can encapsulate the two steps "load App state" and "save App state" in functions and forget about them. As for efficiency, I can optimise later, should I need to.

First, hard code some rows / cols coordinates in globals. The whole app starts at row 2 (the top row is for headers). Opportunities have two cols of metadata, col 1 and 2.

```diff
//globals.gs
const SS = SpreadsheetApp.getActiveSpreadsheet();
const noop = Function.prototype;

+ const DATA_ROW_START = 2;
+
+ const DATA_COL_META1 = 1;
+ const DATA_COL_META2 = 2;
```

I will insert enough rows at the top to write the whole sequence of Opportunities in them. Then I will remove the rows below them. That's because GAS complains if you try to insert rows in a empty Sheet. Pools don't actually render Opportunities; they tell them to render themselves. To do so, the Opportunities need to know where they are on spreadsheet. The utility function `reindex_` does exactly that.

```diff
// pool.js
  updateUI() {
    // make sure the Opportunities know where they are
+   this.reindex_();

    // make room for the new Opportunities
    this.sh.insertRowsBefore(DATA_ROW_START, this.opportunities.length);

    // tell the Opportunities to render themselves
+   for (let opportunity of this.opportunities) {
+     opportunity.updateUI();
    }

    // remove the old Opportunities from the UI
    const startRow = DATA_ROW_START + this.opportunities.length;
    const nRows = this.sh.getMaxRows() - DATA_ROW_START + this.opportunities.length - 1;
    this.sh.deleteRows(startRow, nRows)
  }

+ reindex_(sh = SS.getActiveSheet()) {
+   for (let i = 0; i < this.opportunities.length; i += 1) {
+     this.opportunities[i].reset({ sh: sh, row: i });
+   }
+ }
```

And now the two missing methods of Opportunities. `updateUI` will just show some random text for now

```diff
// opportunity.gs
  updateUI() {
+   const startRow = this.row;
+   const startCol = DATA_COL_META1;
+   const nRows = 1;
+   const nCols = 2;
+   this.sh.getRange(startRow, startCol, nRows, nCols).setValues([
+     ['NEW DATA', Math.random()]
+   ]);
  }

+ reset({
+   sh = die('reset needs a sheet argument'),
+   row = die('reset needs a row argument') } = {}
+ ) {
+   this.sh = sh;
+   this.row = row;
+ }
```

"Die" is a function that I have been using since my Perl days... a long time ago. It's for [failing fast](https://en.wikipedia.org/wiki/Fail-fast)

```js
// genericGotofritzUtils.gs
function die(prompt) {
  throw Error(prompt);
}
```

#### 5: Using an HTML form in a sidebar to create an Opportunity

![Adding an Opportunity with a form](/assets/trello-like-crm-tool-with-google-apps-script/form.mp4)

We can use an HTML form to add real data to an opportunity. Coding sidebars in vanilla js, like in 1999. Clunky but surprisingly easy. The form is a complete HTML document which you can load to the side. There two types of HTML documents you can load: pure HTML and templates. You load them in the sidebar in different ways. I don't know why they bother with that distinction. The only difference seems to be that templates can use the classic ASP looking `<?= some data ?>` tags. I did say 1999, didn't I.

![An HTML sidebar in a Google Sheet](/assets/trello-like-crm-tool-with-google-apps-script/sidebar.png)

You can share JS (for validation, for example) and CSS across those documents by using a trick. You create an HTML document which only has JS in it, and one which only has CSS. Then you import those inside the HTML template you are working with. It only works with templates. It's ugly but it works. I don't bother, I only have a couple of forms and a few lines of CSS. I am happy to copy and paste them in all the forms I need. And as for validation, you can go a long way with [standard HTML input field parameters](https://www.the-art-of-web.com/html/html5-form-validation/). Here's the [official documentation for the separating CSS/JS/HTML trick](https://developers.google.com/apps-script/guides/html/best-practices#separate_html_css_and_javascript).

```html
// formOpportunity.html

<!DOCTYPE html>
<html>
  <head>
    <base target="_top" />
    <script>
      function prefill() {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, "0");
        const dd = String(now.getDate() + 1).padStart(2, "0");
        document.getElementById("yyyy").value = yyyy;
        document.getElementById("mm").value = mm;
        document.getElementById("dd").value = dd;
        // ------ placeholders for testing
        document.getElementById("company").value = "Beatles";
        document.getElementById("position").value = "drummer";
        document.getElementById("source").value = "Melody Maker";
        document.getElementById("contact").value = "Brian Epstein";
        document.getElementById("comments").value =
          "The old drummer was too simple minded\nAlso ugly";
      }

      function handleFormSubmit(formObj) {
        google.script.run
          .withFailureHandler(onFailure)
          .withSuccessHandler(onSuccess)
          .handleCreateOpportunity(formObj);
        return false;
      }

      function onFailure(err) {
        document.getElementById("err").innerHTML = `ERROR: ${err}`;
      }

      function onSuccess() {
        google.script.host.close();
      }
    </script>
    <style>
      label {
        display: block;
      }
      div {
        margin-bottom: 1rem;
      }
      input[type="text"]:not([size]),
      textarea {
        width: 100%;
      }
      .err {
        display: block;
        background-color: red;
        color: white;
        padding: 4px;
      }
      .err:empty {
        display: none;
      }
    </style>
  </head>
  <body onload="prefill()">
    <div id="err" class="err"></div>
    <form onsubmit="handleFormSubmit(this)">
      <input type="hidden" name="date" id="date" />
      <div><button type="submit">OK</button></div>
      <div>
        <label for="company">Company</label>
        <input type="text" name="company" id="company" required="required" />
      </div>
      <div>
        <label for="position">Position</label>
        <input type="text" name="position" id="position" required="required" />
      </div>
      <div>
        <label for="date">Date</label>
        <input
          type="text"
          name="yyyy"
          id="yyyy"
          placeholder="yyyy"
          size="4"
          maxlength="4"
        />-
        <input
          type="text"
          name="mm"
          id="mm"
          placeholder="mm"
          size="2"
          maxlength="2"
          value=""
        />-
        <input
          type="text"
          name="dd"
          id="dd"
          placeholder="dd"
          size="2"
          maxlength="2"
        />
      </div>
      <div>
        <label for="source">Source (Linkedin, Email, etc)</label>
        <input type="text" name="source" id="source" />
      </div>
      <div>
        <label for="contact">Main Contact</label>
        <input type="text" name="contact" id="contact" />
      </div>
      <div>
        <label for="comments">More info (\n separated, no need for '-')</label>
        <textarea name="comments" rows="6" id="comments"></textarea>
      </div>
      <div><button type="submit">OK</button></div>
    </form>
  </body>
</html>
```

It's the simplest possible form, with barely any styling. `<body onload="prefill()">` will fill up the form with data. Gosh I think it's the first time I use a `body onload` in 25 years. Some of it is for testing, so that I don't have to type it all the time. The only interesting part is the form submission. `<form onsubmit="handleFormSubmit(this)">` handles that part.

`google.script.run.A_FUNCTION(formObj)` will call A_FUNCTION in your GAS app, and pass it a JSON object with all your form fields. Sweet. You then have this curious model where you create handlers for success and failure, and pass it to `run` before you call it. It's all relatively straightforward.

```diff
+ function handleFormSubmit(formObj) {
+   document.getElementById("date").value = [
+     document.getElementById("yyyy").value,
+     document.getElementById("mm").value,
+     document.getElementById("dd").value
+   ].join('-')
+   google.script.run
+     .withFailureHandler(onFailure)
+     .withSuccessHandler(onSuccess)
+     .handleCreateOpportunity(formObj);
+   return false;
+ }

+ function onFailure(err) {
+   // shows the error message at the top of the sidebar
+   document.getElementById("err").innerHTML = `ERROR: ${err}`;
+ }

+ function onSuccess() {
+   // closes the sidebar
+   google.script.host.close();
+ }
```

Then we actually need to show this sidebar. The code called by the menu is completely different. Instead of processing data, it loads the HTML form and does nothing else

```diff
// main.gs
function createOpportunity() {
- const pool = new Pool();
- pool.createOpportunity();
- pool.updateUI();
+ const html = HtmlService
+     .createHtmlOutputFromFile('formOpportunity')
+     .setTitle('New Opportunity...');
+ SpreadsheetApp.getUi().showSidebar(html);
}
```

The data processing is done in the function connected to the form submission, `handleCreateOpportunity`. A new file, `formHandlers.gs`, will contains all those form handlers.

```js
// formHandlers.gs
function handleCreateOpportunity(data) {
  const pool = new Pool();
  pool.createOpportunity(data);
  pool.updateUI();
}
```

```diff
// Pool.gs
  createOpportunity(data) {
-   this.opportunities.unshift(new Opportunity({ sh: this.sh }));
+   const newOpportunity = new Opportunity({ sh: this.sh, metadata: data });
+   this.opportunities.unshift(
+     newOpportunity
+   );
  }
```

And finally, we have to add some structured metadata, and not some random strings, to an opportunity. I have toyed with difference approaches, trying to keep it simple and yet flexible and easy to update. I came up with a generic utility class called `StructToUIBridge`, which I can reuse across projects.

The basic idea is that each spreadsheet cell is a mini UI component. Made up of strings, each with their formatting, joined together by separators. To refresh the cell you form a sequence by alternating strings and separators. Then apply formatting. When you want to extract the data from the cell you strip the formatting away. Then break up the text into string + separator pairs. This is somewhat like how [tagged template in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) work. The difficulty is that to format parts of a cell content you need to use RichText.

A Field is a simple ValueObject wich represents a string + separator pair. It does nothing but hold data. Although it could also have validation methods; that's what VOs often do. The 'style' attribute is a RichText style, which I create in the globals file. Styles are created by builders, themselves created by the top level app. Don't ask...

```js
// StructToUIBridge.gs

class Field {
  constructor({
    name = die("A field without a name makes no sense"),
    separator = "",
    defaultValue = "",
    value = defaultValue,
    style = normal,
    // TODO: we could pass a validation function here
  }) {
    this.name = name;
    this.separator = separator;
    this.style = style;
    this.defaultValue = defaultValue;
    this.value = value;
  }
}

// globals.js
const normal = SpreadsheetApp.newTextStyle()
  .setBold(false)
  .setItalic(false)
  .setFontSize(10)
  .build();
```

A `StructToUIBridge` is a sequence of `Fields`. Plus a couple of styling values like background colour applied to the whole cell. It has methods to update the field contents. As well as generating the strings + separators sequence.

```js
class StructToUIBridge {
  constructor({
    fields = [],
    colBg = COL_BG_DEFAULT,
    colFg = COL_FG_DEFAULT,
    vAlign = DEFAULT_VALIGN,
  }) {
    this.fields = fields.map((rawField) => new Field(rawField));
    this.colBg = colBg;
    this.colFg = colFg;
    this.vAlign = vAlign;
  }

  updateAllValues(fieldsData = {}) {
    for (let field of this.fields) {
      const { name, defaultValue } = field;
      field.value = name in fieldsData ? fieldsData[name] : defaultValue;
    }
  }

  updateSomeValues(fieldsData = {}) {
    for (let field of this.fields) {
      const { name } = field;
      if (name in fieldsData) field.value = fieldsData[name];
    }
  }

  asPlainText() {
    return this.fields.reduce(
      (accumulator, { value, separator }) => accumulator + value + separator,
      "",
    );
  }

  updateCell(cell) {}
}
```

The interesting part is the `updateCell` method. It first concatenates all the strings + separators. Then for each pair it finds out their length and puts markers at the beginning and end. RichText is then used to apply styling between those markers. It's not the easiest thing to debug...

```diff
+ updateCell(cell) {
+   // get the whole text as one long string
+   let wholeText = this.asPlainText();

+   // create a RichText builder
+   let richTextContent = SpreadsheetApp.newRichTextValue().setText(wholeText);

+   // add markers at start end end of each field
+   let startOffset = 0;
+   for (let field of this.fields) {
+     const { value, style, separator } = field;
+     let endOffset = Math.min(
+       wholeText.length,
+       startOffset + value.length + separator.length,
+     );

+     // sometimes we get weird combinations which are hard to debug
+     if (startOffset !== endOffset) {
+       richTextContent.setTextStyle(startOffset, endOffset, style);
+     }
+     startOffset = endOffset;
+   }

+   cell
+     .setRichTextValue(richTextContent.build())
+     .setVerticalAlignment(this.vAlign)
+     .setBackground(this.colBg)
+     .setFontColor(this.colFg)
+     .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);

+   return this;
 }
```

The nice thing about this `StructToUIBridge` class is that it hides away all of the ugliness of RichText. It's very clear what the `metadata1` and `metadata2` properties contain. They are simple to edit, which was the whole point.

```diff
// Opportunity.gs

class Opportunity {
  constructor({
    sh = SS.getActiveSheet(),
    row=DATA_ROW_START,
    metadata={}
  } = {}) {
    this.sh = sh;
    this.row = row;
    this.stages = [];

+   this.metadata1 = new StructToUIBridge({
+     fields: [
+       { name: "company", separator: " / ", defaultValue: "????", style: bold },
+       { name: "position", separator: "\n\n", defaultValue: "[TBC]", style: bold },
+       { name: "comments", style: smaller },
+     ],
+     colBg: COL_BG_META,
+     colFg: COL_FG_META
+   });

+   this.metadata2 = new StructToUIBridge({
+     fields: [
+       { name: "date", separator: "\n\n", defaultValue: asString(new Date()), style: bold },
+       { name: "source", separator: "\n", defaultValue: "LINKEDIN", style: bold },
+       { name: "contact", defaultValue: '???', style: normal },
+     ],
+     colBg: COL_BG_META,
+     colFg: COL_FG_META
+   });

    this.loadStateFromSheet_();
+   if (metadata) {
+     this.updateMetadata_(metadata);
+   }
  }
```

The `bold` and `smaller` style I created in `globals.gs`. It's easy to create a set of styles for the whole app.

```diff
// globals.gs
+ const bold = SpreadsheetApp.newTextStyle().setBold(true).build();
+ const italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
+ const smaller = SpreadsheetApp.newTextStyle()
+   .setBold(false)
+   .setFontSize(9)
+   .build();
```

Instantiating the Opportunity object, with some very basic validation, and then updating the spreadsheet cell, is fairly concise.

```diff
// Opportunity.gs

+ updateMetadata_(metadata) {
+   if (!metadata) return;

+   this.validateMetadata_(metadata);
+   this.metadata1.updateAllValues(metadata);
+   this.metadata2.updateAllValues(metadata);
+ }

+ validateMetadata_(metadata) {
+   validDate(metadata.date, 'Date');
+ }

  updateUI() {
    const startRow = this.row;
    const startCol = DATA_COL_META1;

-   const nRows = 1;
-   const nCols = 2;
-   this.sh.getRange(startRow, startCol, nRows, nCols).setValues([
-     ['NEW DATA', Math.random()]
-   ]);

+   let metadataCell = this.sh.getRange(startRow, startCol);
+   this.metadata1.updateCell(metadataCell);

+   metadataCell = this.sh.getRange(startRow, startCol + 1)
+   this.metadata2.updateCell(metadataCell);
  }
```

`validDate` is one of a number of generic functions I share from project to project. Nothing super sophisticated. I use JSDoc for these functions because GAS is actually quite good with tooltips and showing you typing hings. Although they are not JSDoc, they are Closure Compiler annotations. So, not as useful.

```js
/**
 * @param {string|date|number} maybeDate the date we are testing
 * @param {string} name the name of the field, for the error meage
 * @throws if date is not valid
 * @return {string|date}
 */
function validDate(maybeDate, name) {
  const maybeDateUnderTest = new Date(maybeDate);
  if (isNaN(maybeDateUnderTest)) {
    throw Error(`${name} should be a valid date, but is ${maybeDate}`);
  }
  return maybeDate;
}
```

#### Loading the state of the app from the spreadsheet

Right now every time I create a new Opportunity in the app, the old ones are removed. That's because I haven't implemented `loadStateFromSheet_` yet. It's time to tackle that. First the easy part: getting the Opportunity object to delegate the job to its metadata objects.

```js
//Opportunity.gs
  loadStateFromSheet() {
    this.metadata1.loadDataFromSheet(
      this.sh.getRange(this.row, DATA_COL_META1)
    );
    this.metadata2.loadDataFromSheet(
      this.sh.getRange(this.row, DATA_COL_META2)
    );
  }
```

Now for implementing those methods. I'll be using regular expressions. What could possibly go wrong, right? Actually A LOT could go wrong. If a field has no separator, then it won't work as there will be no boundary between fields. If the separator is found within any of the strings, then the whole thing will fall apart.

The first part is easily solvable: we can simply force a separator. The next cannot be solved easily. I guess the code could reject separators which are potentially too dangerous (commas, dashes). But that's an overkill for an app which will only be used by myself. I'll live with the risk

```diff
// StructToUIBridge.gs
  }) {
    this.fields = fields.map((rawField) => new Field(rawField));
    // forcing a separator - except on the last field
+   this.fields.slice(0, -1).forEach(field => {
+     if (!field.separator) throw Error("Error: fields must have a separator")
+   });
    this.colBg = colBg;
```

The next part is slightly trickier. The script needs to generate a RegExp based on the fields and separator it expects. The `generateParsingRegexp_` does that with a simple array.reduce, no special tricks required. Tricky is deciding which of the capturing strings to make greedy `(.*)` and which not `(.*?)`. There must be at least a greedy one. I opt for putting it last, but it may backfire in the future. We'll see. I hope it doesn't because debugging it is a quite painful.

```js
// StructToUIBridge.gs
  generateParsingRegexp_() {
    const parser = new RegExp(
      this.fields.reduce(
        // accumulator -> the string so far
        // {separator} -> the Field we are dealing with now,
        //                but only take the separator property
        // i -> the current index, to see whether it's the last
        // arr -> the whole array, so that we can compare the length to i
        (accumulator, {separator}, i, arr) =>
          i === arr.length - 1
            ? `${accumulator}(.*)${separator}`
            : `${accumulator}(.*?)${separator}`,
        "^"
      ) + "$",
      "sm"
    );
    return parser;
  }
```

And finally the money shot, `loadDataFromSheet`. Most of the work is done by the RegExp. This function will simply plyg

```js
  loadDataFromSheet(cell = die("loadDataFromSheet called without a cell")) {
    let dataToParse = cell.getValue();

    // GAS always tries to be helpful and convert strings to something else 🙄
    if (dataToParse instanceof Date) {
      dataToParse = asString(dataToParse[i]);
    }

    const matches = dataToParse.match(this.parser);
    if (!matches) return this;

    for (let i = 0, j = 1; i < this.fields.length && j < matches.length; i += 1, j += 1) {
      this.fields[i].value = matches[j];
    }
    return this;
  }
```

Now when I add a field, the previous ones stay there.

![Demonstrating that now when I add a field, the previous ones stay there](/assets/trello-like-crm-tool-with-google-apps-script/load-from-cell.mp4)

### Editing an Opportunity

I have done Create, Read, I might as well do the rest of the <b>CR</b>UD operations. So <b>U</b>pdate, or edit. All the pieces of the puzzle are already there. The app can read from a cell, and it can submit a form. All it needs is to connect the two, so that the data in form comes from the cell, and vice versa. Let's start fetching data from the cell and pushing it to the form. There is already a function for the fetching part, `loadDataFromSheet`. But how do you inject data into the form?

#### Injecting data into an HTMLHtmlService form in a sidebar with Apps Script

I assumed it would be relatively easy, perhaps by passing a payload as second argument to `createHtmlOutputFromFile`, but nope. There is a way to do it, but it's hacky. You turn the data into a DOM fragment - it could just be a string, or a whole DOM subtree - and then append it to the HTML form. Don't forget to CSS display to none! Then at the other end the form can extract it from the HTML and use it. As I said - hacky. There is a variation using HTML templates instead of documents, but I prefer not to use templates. They are not as useful as they seem. Even the documentation cautions against using them! So hacky DOM snippets it is.

Start with adding a new menu entry, and a placeholder function. The function will be a variation of `createOpportunity`, so let's copy that to start.

```diff
// main.gs
    ...
    { name: "POOL", functionName: "noop" },
    { name: "> New opportunity", functionName: "createOpportunity" },
    null,
    { name: "OPPORTUNITY", functionName: "noop" },
+   { name: "> Edit opportunity", functionName: "editOpportunity" },
    ...

+ function editOpportunity() {
+   const html = HtmlService
+       .createHtmlOutputFromFile('formOpportunity')
+       .setTitle('New Opportunity...');
+   SpreadsheetApp.getUi().showSidebar(html);
+ }
```

First I will try and make sure I can actually pass data to the HTML form. The form will need data from an Opportunity. The user will need to have an Opportunity selected. So let's start fetching the Opportunity index, and then passing that as JSON. I use two of my standard functions for that, `dieUnlessSelection` and `indexOfSelectedRow`.

```js
// genericGotofritzUtils.gs
function indexOfSelectedRow() {
  // hardcoding SS - because the ActiveRange can only be in the ActiveSheet
  return SS.getSelection().getActiveRange().getRow();
}

function dieUnlessSelection(msg = "You need to select a cell") {
  if (!SS.getSelection()) {
    msgAndDie(msg);
  }
}

function msgAndDie(prompt) {
  Browser.msgBox(prompt);
  throw Error(prompt);
}
```

I will encode the JSON in an HTML div with a standard ID, saved in the globals file. The HTML form will not have access to it though. I will have to copy and paste it there manually. For now I make the div pink so that I can see it, but later on it will be display:none.

```diff
// globals.gs
+ const HTML_ID_EXTRA_FORM_DATA = 'fromSheet';

// main.gs

function editOpportunity() {
+  dieUnlessSelection();

+  const opportunityRow = indexOfSelectedRow();
+  const htmlFragment = `
+    <div style="display: block; background: pink" id="${HTML_ID_EXTRA_FORM_DATA}">
+   { "selectedRow": ${opportunityRow} }
+   </div>
+   `;

  const html = HtmlService
      .createHtmlOutputFromFile('formOpportunity')
-     .setTitle('New Opportunity...');
+     .setTitle('Edit Opportunity...')
+     .append(htmlFragment)
  SpreadsheetApp.getUi().showSidebar(html);
}
```

I click on the form and yeah, the HTML Div is there.

![Select a row to edit an Opportunity](/assets/trello-like-crm-tool-with-google-apps-script/select-row.png)

Then in the form

```diff
  function prefill() {
+   const htmlId = "fromSheet";
+   initData = JSON.parse(document.getElementById(htmlId)?.innerHTML || "{}");

+    // NOTE: in the form you can debug with `debugger` and console.logs
+   console.log('------ initData ------')
+   console.table(initData)

```

and I can confirm I got the data. Cool, now that I have confirmed it works, let's wire it all app properly. First, a util function to format a JS obj as an HTML string, since I will be using it for different forms.

```js
// genericGotofritzUtils.gs
function asHTMLfragment(jsonData = {}, htmlId = HTML_ID_EXTRA_FORM_DATA) {
  return `
    <div style="display: block; background: pink" id="${htmlId}">
      ${JSON.stringify(jsonData)}
    </div>
  `;
}
```

Then I need a JSON representation of the Opportunity object. Since the data of interest is all in the StructToUIBridge, I add a generic `asJson` method to that. And then a similarly named one for Opportunity

```js
// StructToUIBridge/gs
class StructToUIBridge {
  ...

  asJson() {
    const jsonRepresentation = {};
    for (let {name, value} of this.fields) {
      jsonRepresentation[name] = value;
    }
    return jsonRepresentation;
  }


// Opportunity.gs
class Opportunity {
  ...

  asJson(additionalData={}) {
    return {
      ...this.metadata1.asJson(),
      ...this.metadata2.asJson(),
      ...additionalData
    }
  }
  ...
```

Finally, pass all that data to the form. I add an 'id' property so that the Pool object will know what to edit later. It is important to make the difference between the id of the Opportunity in the Pool, i.e. the index in the array, and the index of the row in the Sheet. I create static methods in the Pool class to make the conversion

```js
// Pool.gs
class Pool {
  ...

  static asOpportunityIndex(row=die("No row passed")) {
    return row - DATA_ROW_START;
  }

  static asRowIndex(opportunityIndex=die("No opportunityIndex passed")) {
    return opportunityIndex + DATA_ROW_START;
  }
```

```diff
function editOpportunity() {
  dieUnlessSelection();

  const opportunityRow = indexOfSelectedRow();
  if (opportunityRow < DATA_ROW_START) {
    msgAndDie('You need to select one of the opportunities, not there');
  }
+ const opportunityIndex = Pool.asOpportunityIndex(opportunityRow);
+ const pool = new Pool();
+ const opportunityToEdit = pool.opportunities[opportunityIndex];
- const htmlFragment = `
-   <div style="display: block; background: pink" id="${HTML_ID_EXTRA_FORM_DATA}">
-  { "selectedRow": ${opportunityRow} }
-  </div>
-  `;
+  const htmlFragment = asHTMLfragment(
+   opportunityToEdit.asJson({
+     id: opportunityIndex
+   })
+ );

  const html = HtmlService
      .createHtmlOutputFromFile('formOpportunity')
  ...
```

The form doesn't change much - I fetch the prefill data from the data embedded to the HTML, if present. I added a hidden field for the id. If the form is for creation, and there is no data embedded in the HTML in the form, I remove the id field from the HTML. That's the easiest approach, rather than mess about with the value of 'id'. In fact the submit form doesn't change, it keeps sending all the form data as before.

```diff
// formOpportunity.html

  function prefill() {
    const htmlId = "fromSheet";
   initData = JSON.parse(document.getElementById(htmlId)?.innerHTML || "{}");

+   const idEl = document.getElementById("id");
+   if ('id' in initData) {
+     idEl.value = initData.row;
+   } else {
+     idEl.parentNode.removeChild(idEl)
+   }

+    // this could be slicker... but no much benefit
+   document.getElementById("yyyy").value = initData.yyyy ?? "";
+   document.getElementById("mm").value = initData.mm ?? "";
+   document.getElementById("dd").value = initData.dd ?? "";
+   document.getElementById("company").value = initData.company ?? "";
+   document.getElementById("position").value = initData.position ?? "";
+   document.getElementById("source").value = initData.source ?? "";
+   document.getElementById("contact").value = initData.contact ?? "";
+   document.getElementById("comments").value = initData.comments ?? "";
...

    <form onsubmit="handleFormSubmit(this)">
+     <input type="hidden" name="id" id="id" />
      <input type="hidden" name="date" id="date" />
```

The form handler only needs a little amend - a new branch to an update call if an id was found

```diff
// formHandlers.gs
function handleCreateOpportunity(data) {
  const pool = new Pool();
+ if (data.id) {
+   pool.updateOpportunity(data, data.id);
+ } else {
    pool.createOpportunity(data);
+ }
  pool.updateUI();
}
```

And finally the method that does the update. Because I have decoupled the data manipulation and the rendering, an update is pretty simple. It just puts an instance of a Opportunity in an array.

```js
  updateOpportunity(data, id=-1) {
    if (!(id in this.opportunities)) {
      msgAndDie(`There isn't an opportunity ${id}`)
    }
    this.opportunities[id] = new Opportunity({
      sh: this.sh,
      metadata: data,
      row: Pool.asRowIndex(data.id)
    });
  }
```

### Deleting an Opportunity

Having done all the ground work already, deleting an Opportunity is a 10 mins job. I use the same shared methods to get the user's selection. Then the built-in `ui.alert` to show an 'are you sure' dialog. Finally I call pool's yet to be coded `deleteOpportunity` method, and redraw the UI.

```js
// main.gs
  ...
  { name: "POOL", functionName: "noop" },
  { name: "> New opportunity", functionName: "createOpportunity" },
  null,
  { name: "OPPORTUNITY", functionName: "noop" },
  { name: "> Edit Opportunity", functionName: "editOpportunity" },
  { name: "> Delete Opportunity", functionName: "deleteOpportunity" },
  null,
  { name: "STAGE", functionName: "noop" },
  ...

function deleteOpportunity() {
  dieUnlessSelection();
  const opportunityRow = indexOfSelectedRow();
  if (opportunityRow < DATA_ROW_START) {
    msgAndDie('You need to select one of the opportunities, not there');
  }

  const ui = SpreadsheetApp.getUi();
  response = ui.alert(
    'Are you sure you want to delete this opportunity?',
    ui.ButtonSet.OK_CANCEL
  );
  if (response === ui.Button.OK) {
    const pool = new Pool();
    const opportunityIndex = Pool.asOpportunityIndex(opportunityRow);
    pool.deleteOpportunity(opportunityIndex);
    pool.updateUI();
  }
}
```

`pool.deleteOpportunity` is a simple array splice

```js
// Pool.gs
  deleteOpportunity(id) {
    if (!(id in this.opportunities)) {
      msgAndDie(`There isn't an opportunity ${id}`)
    }
    this.opportunities.splice(id, 1);
  }
```

### Adding Steps

A reminder of how the problem space is mapped into classes in this app. A Sheet represents a Pool of Opportunities. An Opportunity is a row in the sheet, and it uses the first two columns to the left to display metadata. I have already added CRUD functionality for all of that. To the _right_ of those two columns, there should be a sequence of Steps, each taking a cell in the row and growing horizontally, with the least recent at the far right. This is the part which I tackle now. It sounds like it's going to be a slog, but in fact it's not that bad. That's because as a Pool contains an array of Opportunity, an Opportunity contains an array of Steps. So the code is pretty similar. In fact I can pretty much copy and paste it in a new class, adapt it so that it uses columns rather than rows, and that's about it.

The Step class is not too dissimilar from the Opportunity. Step has a col, which Opportunity doesn't need. And Opportunity has a list of Steps, which is not needed by Step. Of course the data displayed in the cell is different, but the basic idea is the same. All the basic CRUD functionality (Create, Update, Delete) from Opportunity can be ported to Step without too much trouble. I'll leave it as an exercise for the reader to adapt that. In future refactor I may look into extracting common feature to a commen parent class or mixin, but now's not the time.

<table>
<tr>
  <th>Opportunity</th>
  <th>Step</th>
</tr>
<tr>
<td>

```diff
class Opportunity {
  constructor({
    sh = SS.getActiveSheet(),
    row=DATA_ROW_START,

-   metadata
  } = {}) {
    this.sh = sh;
    this.row = row;

+   this.stages = [];

    this.metadata1 = new StructToUIBridge({
      fields: [
        {
          name: "company",
          separator: " / ",
          defaultValue: "????",
          style: bold
        },
        {
          name: "position",
          separator: "\n\n",
          defaultValue: "[TBC]",
          style: bold
        },
        {
          name: "comments",
          style: smaller
        },
      ],
      colBg: COL_BG_META,
      colFg: COL_FG_META
    });

    this.metadata2 = new StructToUIBridge({
      fields: [
        {
          name: "date",
          separator: "\n\n",
          defaultValue: asString(new Date()),
          style: bold
        },
        {
          name: "source",
          separator: "\n",
          defaultValue: "LINKEDIN",
          style: bold
        },
        {
          name: "contact",
          defaultValue: '???',
          style: normal
        },
      ],
      colBg: COL_BG_META,
      colFg: COL_FG_META
    });

    this.loadStateFromSheet();
    if (metadata) {
      this.updateMetadata_(metadata);
    }
  }
...
```

</td>
<td>

```diff
class Step {
  constructor({
    sh = SS.getActiveSheet(),
    row,
+   col = DATA_COL_LATEST,
+   stepData
  } = {}) {
    this.sh = sh;
    this.row = row;
+   this.col = col;


    this.data = new StructToUIBridge({
      fields: [
        {
          name: "date", separator: " __ ",
          defaultValue: asString(new Date()),
          style: bold
        },
        {
          name: "time",
          separator: "\n\n",
          defaultValue: '',
          style: bold
        },
        {
          name: "title",
          separator: "\n",
          defaultValue: "INTERVIEW",
          style: bold },
        {
          name: "contact",
          separator: "\n\n",
          defaultValue: '???',
          style: normal
        },
        {
          name: "comments",
          style: smaller
        },
      ],
      colBg: '#00ffff',
      colFg: COL_FG_META
    });















    this.loadStateFromSheet();
    if (stepData) {
      this.updateStepdata_(stepData);
    }
  }
...
```

</td>
</tr>
</table>

For the record, the updated app menus will look like this

```diff
  ...
  { name: "POOL", functionName: "noop" },
  { name: "> New opportunity", functionName: "createOpportunity" },
  null,
  { name: "OPPORTUNITY", functionName: "noop" },
  { name: "> Edit Opportunity", functionName: "editOpportunity" },
  { name: "> Delete Opportunity", functionName: "deleteOpportunity" },
+ { name: "> New Step", functionName: "createStep" },
  null,
  { name: "STAGE", functionName: "noop" },
+ { name: "> Edit Step", functionName: "editStep" },
+ { name: "> Delete Step", functionName: "deleteStep" },
  ...
```

#### Some utility functionality

At this stage I added a couple of useful menu entries which replicate existing functionality: Add Comment. These are similar to Edit Step / Opportunity but only focus on comments. Why? Because when I am talking to someone in a video call or phone, I want to have a larger than normal text box with no distractions. That spurred some refactoring - until now, whenever I edited an instance (of Opportunity, Step) I simply created a new one and replaced it. But now I want to fiddle with individual fields within the objects. I could of course access them directly, but that of course is a big no-no.

I change the generic `StructToUIBridge` container to make it easy to locate a specific field by name. After this change, if the fields were `[{ name: 'mouse', ...}, { name: 'cat', ... }]` then fieldNames would contain `{ mouse: 0, cat: 1, ...}`

```diff
// StructToUIBridge.gs
  constructor({
    ...
  this.fields = fields.map((rawField) => new Field(rawField));
+ this.fieldNames = this.fields.reduce(
+   (accumulator, {name}, i) => {
+     accumulator[name] = i;
+     return accumulator;
+   },
+   {}
+ )
  this.fields.slice(0, -1).forEach(field => {
    ...
```

And then a method to use those keys

```js
// StructToUIBridge.gs
  getFieldValue(name) {
    if (name in this.fieldNames) {
      return this.fields[this.fieldNames[name]].value;
    }
    return null;
  }
```

A new form for editing comments for both Opportunity and Step. A variation on the existing forms, bit with only a textarea and two hidden field. If no 'row' value was passed, the hidden input with id 'row' will be removed from the DOM

```html
...
<script>
  function prefill() {
    const htmlId = "fromSheet";

    initData = JSON.parse(document.getElementById(htmlId)?.innerHTML || "{}");
    if (!("id" in initData)) {
      throw Error("Missing 'id' property");
    }

    const rowEl = document.getElementById("row");
    if ("row" in initData) {
      rowEl.value = initData.row;
    } else {
      rowEl.parentNode.removeChild(rowEl);
    }
    document.getElementById("id").value = initData.id;
    document.getElementById("comments").value = initData.comments ?? "";
  }
</script>
...
<form onsubmit="handleFormSubmit(this)">
  <div>
    <button type="submit" id="b">OK</button>
  </div>
  <input type="hidden" name="id" id="id" />
  <input type="hidden" name="row" id="row" />
  <div>
    <label for="comments">More info (free form for comments)</label>
    <textarea name="comments" id="comments"></textarea>
  </div>
</form>
```

The menu creates two similar entries for editing comments. I had to make sure the names were different - if you have two menu entries with the same name in GAS, the `onOpen` handler will fail silently.

```diff
    { name: "> Delete Opportunity", functionName: "deleteOpportunity" },
+   { name: "> Edit Opportunity Comments", functionName: "editCommentsOpportunity" },
    { name: "> New Step", functionName: "createStep" },
    null,
    { name: "STAGE", functionName: "noop" },
    { name: "> Edit Step", functionName: "editStep" },
    { name: "> Delete Step", functionName: "deleteStep" },
+   { name: "> Edit Step Comments", functionName: "editCommentsStep" },
```

The two functions are very similar, as it's obvious by putting them side by side. Again, room for refactoring there. But not yet.

<table>
<tr>
  <th>Opportunity</th>
  <th>Step</th>
</tr>
<tr>
<td>

```diff
function editCommentsOpportunity() {
  dieUnlessSelection();
  const opportunityRow = indexOfSelectedRow();
  if (opportunityRow < DATA_ROW_START) {
    msgAndDie('You need to select one of ' +
      'the opportunities, not there');
  }
+ const opportunityIndex = Pool
+   .asOpportunityIndex(opportunityRow);









  const pool = new Pool();


  const opportunityToEdit = pool.opportunities[
    opportunityIndex
  ];
  const htmlFragment = asHTMLfragment({
    id: opportunityIndex,

    comments: opportunityToEdit.getFieldValue(
      'comments'
    )
  });

  const html = HtmlService
      .createHtmlOutputFromFile(
        'editCommentForm'
      )
      .append(htmlFragment)
      .setWidth(DIALOG_WIDTH)
      .setHeight(DIALOG_HEIGHT);
  SpreadsheetApp
    .getUi()
    .showModalDialog(
      html,
      'Edit Comment...'
    );
}
```

</td>
<td>

```diff
function editCommentsStep() {
  dieUnlessSelection();
  const opportunityRow = indexOfSelectedRow();
  if (opportunityRow < DATA_ROW_START) {
    msgAndDie('You need to select one of ' +
      'the opportunities, not there');
  }



+ const stageCol = indexOfSelectedCol();
+ if (cellIsEmpty(opportunityRow, stageCol)) {
+   msgAndDie('Nothing to edit');
+ }
+ const stageIndex = Opportunity.asStepIndex(
+   stageCol
+ );

  const opportunity = new Opportunity(
    { row: opportunityRow }
  );
  const stageToEdit = opportunity.stages[
    stageIndex
  ];
  const htmlFragment = asHTMLfragment({
    id: stageIndex,
+   row: opportunityRow,
    comments: stageToEdit.getFieldValue(
      'comments'
    )
  });

  const html = HtmlService
      .createHtmlOutputFromFile(
        'editCommentForm'
      )
      .append(htmlFragment)
      .setWidth(DIALOG_WIDTH)
      .setHeight(DIALOG_HEIGHT);
  SpreadsheetApp
    .getUi()
    .showModalDialog(
      html,
      'Edit Comment...'
    );
}

```

</td>
</tr>
</table>

Both use `getFieldValue`, which is a wrapper for `StructToUIBridge`'s version:

```js
// Step.gs
  getFieldValue(name) {
    return this.data.getFieldValue(name);
  }
```

Both use a modal dialog box instead of a sidebar like in the other cases. That's because the size of a sidebar is fixed at 300px, whereas a dialog can be changed. Here I use values I have set in `globals.gs`

```js
const html = HtmlService.createHtmlOutputFromFile("editCommentForm")
  .append(htmlFragment)
  .setWidth(DIALOG_WIDTH)
  .setHeight(DIALOG_HEIGHT);
SpreadsheetApp.getUi().showModalDialog(html, "Edit Comment...");
```

Finally the form handler handles both cases. It switches to a Step if it has a row attribute, to Opportunity if it hasn't

```js
// formHandlers.gs
function handleEditComment(data) {
  if (!data.id) return;

  const weAreEditingAStep = "row" in data;

  if (weAreEditingAStep) {
    const opportunity = new Opportunity({ row: data.row });
    opportunity.updateFieldInStep(
      { comments: data.comments },
      // in this case the id represents the Step, i.e. a col
      data.id,
    );
    opportunity.updateUI();
  } else {
    const pool = new Pool();
    pool.updateFieldsInOpportunity(
      { comments: data.comments },
      // in this case the id represents the Opp., i.e. a row
      data.id,
    );
    pool.updateUI();
  }
}
```

`updateFieldsInOpportunity` and `updateFieldsInStep` are wrappers for `StructToUIBridge`'s method

```js
//Pool.gs
  updateFieldsInOpportunity(data, id=-1) {
    if (!(id in this.opportunities)) {
      msgAndDie(`There isn't an opportunity ${id}`);
    }
    this.opportunities[id].updateFields(data);
  }
```

And here's the final result

![Editing comments for both Opportunity and Step](/assets/trello-like-crm-tool-with-google-apps-script/add-comment.mp4)

### States and ordering

The CRM is beginning to look good, but it's missing a very important thing. "The ability to tell the the phase of an Opportunity at a glance". The time has come to deal with States.

#### Defining a State

States give me a bird view of an Opportunity. Did all the steps so far look promising, what's the next step. Opportunities do not have States, it's the individual Steps that make it up who do. The State of an Opportunity is merely the State of the the "current" Step. More about "current" Steps later. For now, I will focus on managing States for Steps.

Through experimentation, I found that a two levels hierarchical structure works best. I need to know whether a Step is Complete or still Due. Or whether there are issues of some sort and the step needs Attention. Complete, Due, Attention are my top level State Groups, and will be hard coded in the app. They will be used to group Opportunities when ordering. Within each of those groups there are nuances, which I want to capture. For example, Step X is complete. But did it go well or bad? Step Y is simply Due, or Overdue? There are the States proper. The app will encode them as a background / foreground colours pairs. Encoding information with colours is not good for Accessibility. But I am not building an universal app. I am building a little proof of concept for myself.

The last requirement is the ability to define States without code, just by editing cells in the spreadsheet. To achieve that, the app will be used to store definitions for those states. The string content will be in the form `GROUP / STATE`, and the app can read the colours from the sheet. The App instance will manage loading up the States from the Sheet.

#### Creating a StatesMgr and loading States lazily

![An example of States definitions in the top row](/assets/trello-like-crm-tool-with-google-apps-script/states-row.png)

A State is a simple value obj. I don't think I will actually need an `order` attribute, but let's add it anyway just in case.

```js
// State.gs
class State {
  constructor({ order, bg, fg, name, group }) {
    this.order = order;
    this.bg = bg;
    this.fg = fg;
    this.name = name;
    this.group = group;
  }
}
```

The StatesMgr does all the heavy lifting when it comes to Stages. For now I will add all the states to a `list` property. The order in which they are found will determine the order in which they are sorted.

```js
// State.gs
class StatesMgr {
  constructor() {
    this.list = [];
  }

  loadStates(range) {
    const max = range.getValues()[0].length;
    for (let order = 1; order <= max; order += 1) {
      const cell = range.getCell(1, order);

      // from " a_group   /  a_name " to "a_group", "a_name"
      const [group, name] = cell
        .getValue()
        .split("/")
        .map((x) => x.trim());

      const bg = cell.getBackground()
      const fg = cell.getFontColor(),

      const state = new State({
        order,
        bg,
        fg,
        name,
        group,
      });
      this.list.push(state);
    }
  }
}
```

In the original version I would read the background colour with a simple call to `.getBackground`. But it turns out it's not so simple. Colours in Google Sheets are either "normal" RGB colours, or they are Theme colours. They are both available in the colour picker, there is no way for a user to know which one is which.

![The Google Sheets colour picker](/assets/trello-like-crm-tool-with-google-apps-script/rgb-colours.png)

#### Getting the background and font colour of a Google Sheet cell with Apps Script

Why does it matter? A Theme colour doesn't know what it's RGB value is. If you try you'll either get an error or an empty string. Instead you'll have to fetch information from the Theme. A pointless complication IMHO. Even weirder is that if you change the background colour to a theme one, the foreground also becomes a theme colour. Even though it isn't. Be as it may, I hid that complexity away by creating two utility functions. To get the RGB value of a ThemeColor in Apps Scripts you need to get the Theme, then call its `getConcreteColor` method passing it the label of the ThemeColor. Then once you have the Apps Script representation of the Color Object, it's treated as if it was a "normal" color, i.e. convert to RGB and then Hex. All very unnecessary if you ask me, but it is what it is.

```js
// genericGotofritzUtils.gs
function getBgColor(cell) {
  const colorObj =
    cell.getBackgroundObject().getColorType() === SpreadsheetApp.ColorType.RGB
      ? cell.getBackgroundObject()
      : SS.getSpreadsheetTheme().getConcreteColor(
          cell.getBackgroundObject().asThemeColor().getThemeColorType(),
        );
  return colorObj.asRgbColor().asHexString();
}

function getFgColor(cell) {
  const colorObj =
    cell.getFontColorObject().getColorType() === SpreadsheetApp.ColorType.RGB
      ? cell.getFontColorObject()
      : SS.getSpreadsheetTheme().getConcreteColor(
          cell.getFontColorObject().asThemeColor().getThemeColorType(),
        );
  return colorObj.asRgbColor().asHexString();
}
```

I can now amend the loadStates function to use those util functions

```diff
// State.gs
    .map((x) => x.trim());

- const bg = cell.getBackground()
+ const bg = getBgColor(cell)
- const fg = cell.getFontColor(),
+ const fg = getFgColor(cell),

  const state = new State({
```

#### Creating a global App object in Apps Scripts

...is not possible as far as I can see. Google Sheets is best thought of as a bunch of serverless functions. Your scripts contain the definitions, and your triggers and menus can cause some of them to call each other. But once all the calls are finished... poof! It's gone. There is no runtime global environment. Although there is a global scope in which your variables and deinfitions live. Let's look at an example

When you open the Spreadsheet, `A_CONST`, `app`, `App`, `test` and `onOpen` all exist within the global scope. Then `onOpen` runs (it's one of the few triggers that does). It creates a menu and an instance of `App`. Then it completes. After that the menu stays there, but `app` goes back to 'what it was originally'. If you run 'What is App?' from the menu, it will give you "what it was originally"

```js
// globals.gs
const A_CONST = 123;
let app = "what it was originally";

// Code.gs
function onOpen() {
  SpreadsheetApp.getUi().createMenu("a menu").addItem("What is App?", "test");
  app = new App();
}

// App.gs
class App {
  constructor() {
    this.a = A_CONST;
  }
}

// func.gs

function test() {
  Browser.msgBox(A_CONST);
  Browser.msgBox(app);
}
```

So how does one create a global singleton? One way is to create a getter function that lazily instantiates the class, when needed. Throughout the code, you will use `getApp()` to access the global App instance

```js
// global
let app_;
function getApp() {
  if (!app_) {
    app_ = new App();
  }
  return app_;
}
```

With that out of the way, I can now concentrate on the States. I will actually use the same pattern to lazily instantiate the StatesMgr. I don't often use getters in JS, but when I do is usually for lazy evaluation. `get states` will return `states_`, and will create it if it doesn't exist.

```js
class App {
  constructor() {
    this.states_ = null;
  }

  get states() {
    if (!this.states_) {
      this.states_ = new StatesMgr();
      this.loadStates_();
    }
    return this.states_;
  }

  loadStates_() {
    const sh = SS.getActiveSheet();
    const range = sh.getRange(
      DATA_ROW_HEADER,
      DATA_COL_STATES_START,
      1,
      sh.getLastColumn() - DATA_COL_STATES_START,
    );
    this.states_.loadStates(range);
  }
}
```

To test it all works I create a quick menu entry

```diff
// main.gs
function onOpen() {
  SpreadsheetApp.getActiveSpreadsheet().setSpreadsheetTimeZone("Europe/Berlin");

  SpreadsheetApp.getUi().createMenu("CRM 4.0" )
+     .addItem('APP - test', function () {
+       Logger.log(getApp().states)
+     })
```

I run it, check in the "executions" tab in the Script editor... and the states are logged there. So far so good.

#### Adding States to Steps and Opportunities

Quick reminder of the classes involved in this app: an Opportunity contains

- 2 StructToUIBridge instances for metadata
- NO State (or rather, the State is inherited from the 'current' Step)
- an array of Steps, each one of which has...
  -- ..a State
  -- ..a StructToUIBridge

The question arises, whether the State should be included in the Step or the `StructToUIBridge`. There is no compelling argument for either. In the end, considering that `StructToUIBridge` interacts with the actual Spreadsheet, and `State` information is read from / written to as colours in a cell, I went for it. But what about the two stateless `StructToUIBridge` instances within `Opportunity`? That can be dealt with by making statefulness optional.

#### Add State to StructToUIBridge

When instantiating a `StructToUIBridge`, you can pass a `state` parameter. If boolean true, it sets up the instance as stateful, but without any `State` data. The instance will load that lazily whenever it needs to sync with the Sheet. But you can pass a `State` instance as `state`, in which case the instance will load it up. Finally, if no `state` argument is passed, the instance will be considered stateless. It won't run any of the state-related methods.

```diff
// StructToUIBridge.gs
class StructToUIBridge {
  constructor({
    fields = [],
    colBg = COL_BG_DEFAULT,
    colFg = COL_FG_DEFAULT,
    vAlign = DEFAULT_VALIGN,
+   state,
  }) {
    ...
    this.vAlign = vAlign;
+   this.state_ = state;
    this.parser = this.generateParsingRegexp_();
  }

+ get state() {
+   return this.state_;
+ }

+ set state(stateThing) {
+ }
```

I want to be able to pass `States` around either as colours, or names, or `State` instances. Not necessarily a good idea for a large complex app. But this is simple enough I should be able to get away with it. This is handled by the setter for `.state`. It does different things for different values it is passed. It also updates the colour values associated with a `State`. This is rather smelly code and I expected to be refactoring it before long. But it turned out to work quite well and it hasn't given me any trouble.

```js
// StructToUIBridge.gs

  set state(stateThing) {
    // if state_ is falsy, it means this is stateless, so we don't care
    // if boolean but truthy, it means we haven't initialised it yet
    // either way, no need for anything fancy
    switch (typeof stateThing) {
      case "boolean":
      case "undefined":
        this.state_ = stateThing;
        return;

      // a string can be either the bgColor or the name of the state
      case "string":
        stateThing = getApp().stateFromName(stateThing) ??
          getApp().stateFromColor(stateThing) ??
          {};
        // I don't normally use fall-throughs in switch statements,
        // but here it seems to fit

      default:
        if (stateThing instanceof State) {
          this.colBg = stateThing?.bg;
          this.colFg = stateThing?.fg;
          this.state_ = stateThing?.name;
        } else {
          msgAndDie(`Unexpected type for State: ${typeof stateThing} (${stateThing})`)
        }
    }
}
```

I make sure `Steps` initialised their `StructToUIBridge` with `state` set to true. `Opportunity` don't need to change

```diff
// Step.gs
class Step {
  constructor({
    sh = SS.getActiveSheet(),
    row,
    col = DATA_COL_LATEST,
    stepData
  } = {}) {
    this.sh = sh;
    this.row = row;
    this.col = col;

    this.stepData = new StructToUIBridge({
+     state: true,
      ...
```

`loadDataFromSheet` used to handle the text content of a cell, but now it also has to handle colors. For readability, I move the original text handling code into its own private function, `loadTextDataFromSheet_`. The colour will be handled by a new method, `loadStateDataFromSheet_`. The original `loadDataFromSheet` will now call the two. `loadStateDataFromSheet_` will pass a colour to the global `App` instance, which will then use its `StatesMgr` to return a State corresponding to the colour.

```diff
// StructToUIBridge.gs

  loadDataFromSheet(cell = die("loadDataFromSheet called without a cell")) {
+   this.loadTextDataFromSheet_(cell);
+   this.loadStateDataFromSheet_(cell);
+   return this;
+ }

+ loadTextDataFromSheet_(cell) {
    let dataToParse = cell.getValue();

    // GAS always tries to be helpful and convert strings to something else 🙄
    if (dataToParse instanceof Date) {
      dataToParse = asString(dataToParse[i]);
    }

    const matches = dataToParse.match(this.parser);
    if (!matches) return this;

    for (let i = 0, j = 1; i < this.fields.length && j < matches.length; i += 1, j += 1) {
      this.fields[i].value = matches[j];
    }
    return this;
  }

+ loadStateDataFromSheet_(cell) {
    // if this.state_ is falsy this is stateless
+   if (!this.state_) return this;
+   this.state = getBgColor(cell);
+   return this;
+ }
```

`stateFromColor` is a wrapper for a method of the `StatesMgr`

```diff
// App.gs
class App {
  ...

+ stateFromColor(color) {
+   return this.states.fromColor(color)
+ }

  ...
}
```

The `StateMgr` is changed so that it keeps a reference to `State` by background colours in a `.byColor` property. `fromColor` is then a simple lookup. Because objects are stored by reference, this is the kind of naive coding that can cause a world of pain. Changing objects in one place ends up affecting objects in another. In practice these are all read only stores that do not change once the States are loaded up. But still, for extra safety I change the constructor of `StatesMgr` to return a frozen instance. And I also freeze the `list` and `byColor` objects.

```diff
// State.gs
class StatesMgr {
  constructor() {
+   this.byColor = {};
    this.list = [];
+   return Object.freeze(this);
  }

+ fromColor(rgb) {
+   return this.byColor[rgb];
+ }

  loadStates(range) {
    const max = range.getValues()[0].length;
+   const list = [];
+   const byColor = {};
    for (let order = 1; order <= max; order += 1) {
      ..
+     byColor[bg] = state;
-     this.list.push(state);
+     list.push(state);
    }
+   this.list = Object.freeze(list);
+   this.byColor = Object.freeze(byColor);
  }
```

Now the App should know what State each Step is in, at least internally. Next, I am going to surface that information to the form used for editing Steps.

#### Editing States

```diff
// main.gs
  const htmlFragment = asHTMLfragment(
    stepToEdit.asJson({
      id: stepIndex,
      row: opportunityRow,
+     allStates: getApp().statesAsList(),
    })
  );
```

The current State of a Step should be part of the Step's `asJson` export function, so no change in the menu function. The change will be in the exporter

```diff
// StructToUIBridge.gs
  asJson() {
-   const jsonRepresentation = {}
+   const jsonRepresentation = this.state_
+   ? {
+       state: this.state_,
+       colBg: this.colBg,
+       colFg: this.colFg,
+     }
+   : {};
    for (let {name, value} of this.fields) {
      jsonRepresentation[name] = value;
    }
    return jsonRepresentation;
  }
```

The global App instance will provide the list of states with a new function. It will call a new function from the StatesMgr.

```js
// App.gs
class App {
  ...
  statesAsListOfNames() {
    return this.states.asListOfNames()
  }
  ...
}
```

For ease, on loading up the StatesMgr will also store the States by name. Fetching a list of names will then involve getting the keys of that store.

```diff
// State.gs

class StatesMgr {
  constructor() {
    this.byColor = {};
+   this.byName = {};
    this.list = [];
  }

  ...

+ asListOfNames() {
+   return Object.keys(this.byName);
+ }

  loadStates(range) {
    const max = range.getValues()[0].length;
    const list = [];
    const byColor = {};
+   const byName = {};
    for (let order = 1; order <= max; order += 1) {
      const cell = range.getCell(1, order);

      // from " a_group   /  a_name " to "a_group", "a_name"
      const [group, name] = cell
        .getValue()
        .split("/")
        .map((x) => x.trim());

      const bg = getBgColor(cell);
      const fg = getFgColor(cell);

      const state = new State({
        order,
        bg,
        fg,
        name,
        group
      });
-     byColor[bg] = state;
+     byColor[bg] = byName[name] = state;
      list.push(state);
    }
    this.byColor = Object.freeze(byColor);
+   this.byName = Object.freeze(byName);
    this.list = Object.freeze(list);
  }
```

I briefly change the display of the div appended to the form so that I can see the data

```diff
// genericGotofritzUtils.gs
function asHTMLfragment(jsonData={}, htmlId=HTML_ID_EXTRA_FORM_DATA) {
  return `
-   <div style="display: none; background: pink" id="${htmlId}">
+   <div style="display: block; background: pink" id="${htmlId}">
     ${JSON.stringify(jsonData)}
    </div>
  `;
}
```

It's there

![All states](/assets/trello-like-crm-tool-with-google-apps-script/all-states.png)

Now it's just a matter of displaying that data in the HTML form

```diff
// formStep.gs
    <script>
      let initData = {};

      function prefill() {
        ...
+       const el = document.getElementById("state");
+       if (Array.isArray(initData.allStates)) {
+         initData.allStates.forEach((state, i) => {
+           el.add(new Option(state));
+         })
+       }
+       el.value = initData.state;
      }
      ...
      <div>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" required="required" />
      </div>
+     <div>
+       <label for="title">State</label>
+       <select name="state" id="state">
+       </select>
+     </div>
      <div>
        <label for="contact">Contact</label>
```

![Pulldown menu for States](/assets/trello-like-crm-tool-with-google-apps-script/state-pulldown.png)

#### Updating the cell with State data

The nice thing about the code is that most of it already works. The `formHandler` takes whatever data is sent and passes it on to the `Opportunity` instance. Which passes it on to the relevant `Step` (either a new one if adding, or an existing one if editing). `.updateStepData_` only needs a couple of line changes to split the state and rest of form data into two variables, and handling them separately. Finally `Step` passes `state` to its `StructToUIBridge` instance, and the setter does the rest.

```diff
// Step.gs
class Step {
  ...

+ get state() {
+   return this.stepData.state;
+ }

+ set state(state) {
+   this.stepData.state = state;
+ }

- updateStepData_(stepData) {
-   if (!stepData) return;
+ updateStepData_(initData) {
+   if (!initData) return;

    this.validateStepData_(initData);
+   const { state, ...stepData } = initData;
+   this.state = state;
    this.stepData.updateAllValues(stepData);
  }
```

And there it is. It's beginning to look useful. Only a couple of major things left to tackle: sorting, archiving, and search.

![Editing Steps with States](/assets/trello-like-crm-tool-with-google-apps-script/step-editing-with-states.mp4)

## Sorting

With `States` implemented, there is enough information for sorting. Sorting happens in two stages: first the `Opprtunity` sorts its `Steps`. Then the `Pool` sorts its `Opportunities`.

### Sorting Steps

One of the requirements of this app is to show me what's next due at a glance. After manual experimentation, I discovered a way that works for me. Starting from column C (A and B are taken up by the Opportunity) and moving towards the right:

- column C shows the 'current' step. That is one of, in order
  -- the stepthe due step with the earliest

- If there `Steps` in the `Attention` group, they go first. Sarting from the one with the earliest data in column C, and then in ascending date order
- Exactly the same for Steps in in the `Due` group
- Last come the Steps in the `Complete` group. But their order is reversed. The leftmost column is the most recent and the ones to its right are in descending date order.

This may sounds confusing and prone to error, but in practice it has been working very well. Having all the next steps in column makes them easy to scan. Having half the row in ascending order and half in descending is not a big issue in practice. That's because the colour coding keeps them visually separate. One learns to navigate them very quickly.

The next question is _when_ to sort. I am not doing any automatic processing; i.e. 'Due' steps are not set to 'Overdue' if x days after the due date have passed. Even if it were useful (and I'm not sure it'd be), Apps Script triggers are too unreliable to bother. That leaves three occurrences: when editing and when creating a Step. Plus a manual entry from the menu (it makes development easier).

First the menu, and related function

```js
// main.gs
...
      .addSubMenu(
        SpreadsheetApp.getUi().createMenu('OPPORTUNITY')
          ...
          .addItem('Sort steps in this opportunity', 'sortSteps')
          ...

 ...

function sortSteps() {
  dieUnlessSelection();
  const opportunityRow = indexOfSelectedRow();
  if (opportunityRow < DATA_ROW_START) {
    msgAndDie('You need to select one of the opportunities, not there');
  }
  const opportunityIndex = Pool.asOpportunityIndex(opportunityRow);

  const pool = new Pool();
  const opportunityToEdit = pool.opportunities[opportunityIndex];
  opportunityToEdit.sortSteps();
}
```

Then the changes in `Opportunity`, where most of the action is

```js
// Opportunity.gs
  createStep(data) {
    ...
    this.sortSteps();
  }

  updateStep(stepData, id=-1) {
    ...
    this.sortSteps();
  }


  sortSteps() {
    this.steps.sort((a, b) => {
      const sortedByGroup = StatesMgr.sortByGroup(a, b);
      if (sortedByGroup !== 0) {
        return sortedByGroup;
      }

      const aDate = new Date(
        `${a.getFieldValue('date')} ${a.getFieldValue('time') ?? ''}`
      );
      const bDate = new Date(
        `${b.getFieldValue('date')} ${b.getFieldValue('time') ?? ''}`
      );
      if (a.state?.group === 'COMPLETE') {
        return aDate < bDate ? 1: -1;
      }
      return aDate < bDate ? -1: 1;
    })
  }
```

Finally, I delegate sorting of groups to the `StatesMgr`, since that's its responsibility

```diff
class StatesMgr {
  constructor() {
    this.byName = {};
    this.byColor = {};
    this.list = [];
  }

+ static sortByGroup(a, b) {
+   const GROUPS_RANKED = new Map([
+     ['ATTENTION', 3],
+     ['DUE', 2],
+     ['COMPLETE', 1],
+   ]);
+   const aGroupRank = GROUPS_RANKED.get(a.group);
+   const bGroupRank = GROUPS_RANKED.get(b.group);
+   if (aGroupRank === bGroupRank) {
+     return 0;
+   }
+   if (aGroupRank < bGroupRank) {
+     return -1;
+   }
+   return 1;
+ }
```

### Conclusion and potential next steps

I have used this app for a while and does the job quite well, with a minimum of fuss. And what is more, it was usable from day 1 - with a lot of manual data entry at the beginning, which became less and less as I automated more and more steps. Obviously it's not as slick as a SPA put together by a team of UX and FE devs, but then it costed rather less in term of efforts. I find Google Apps Script great for knocking together quick prototypes like this.

I am not going to take this any further as my basic needs are met. But should I want to, it would be possible, for example to

- integrate with email to automatically generate steps from incoming messages, or generate emails from steps
- integrate with calendar to generate appointments and set reminders
- all of the above, to automatically generate emails with a list of available slots from my calendar.

This would actually be quite useful, and who knows, I may well tackle it one of these days.
