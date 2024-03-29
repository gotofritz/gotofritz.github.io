---
publishDate: 2011-09-04 13:55
title: Advanced Evernote search
tags:
  - Evernote
description: It isn&#39;t immediately obvious, but <a href="http://evernote.com/">Evernote</a> offers advanced search operators.
---

## Basic Evernote search

Evernote search is quite quirky. It is an 'all' search by default, and the order of the search operators matters.

<dl class="code-breakdown">
<dt>word</dt>
<dd>
  Searching for word will match any occurrences of word, obviously, but also those starting with word (e.g. 'wordpress'). In other words, think of it as the equivalent to word&ast;. Note that this is <i>not</i> what it says in the <a href="http://dev.evernote.com/documentation/local/chapters/search_grammar.php" title="[new window] Evernote Search Grammar - Evernote Developers" target="_blank">Evernote API documentation</a>, where it states "Words in the content of the note are split by whitespace or punctuation".  This is unfortunate, because sometimes you only want the exact match, but luckily you can use quotation marks in that case.
</dd>

<dt>word&ast;</dt>
<dd>
Wildcards are allowed only at the end, and in theory `potato&ast;` should match both  'potatoes' and 'potato' whereas `potato` should only match the singular. But in the Evernote app at least, the wildcard seems to be implied so this is redundant.
</dd>

<dt>strange word</dt>
<dd>
By default searches only returns notes that match all words, regardless of the order. `strange word` will match notes containing "this word is strange", "this is a strange word", and "Strange! [...15 pars later...] my word"
</dd>

<dt>"strange word"
"word"</dt>
<dd>
Quotation marks limit the search to an exact match, so this will only match "this is a strange word" in the previous example. You can also use quotation marks to remove the implied wildcard - `word` will also match <i>wordpress</i> and <i>wording</i>, but `"word"` (with the double quotes) will not.
</dd>

<dt>-word</dt>
<dd>
matches notes that do not contain words starting with "word"
</dd>
</dl>

## Advanced search options: tag and intitle

They normally take the form option:value. Note that in these cases, the wildcards works - i.e., option:value is different from option:value\*. The former means "any note where [option] is _exactly_ [value]", whereas the latter means "any note where [option] starts with [value]".

<dl class="code-breakdown">

<dt><del>nb:notebook </del></dt>
<dd><del>
Only search notes assigned to notebook. This has to be the first search option.
</del><br>
this seems to have been removed in later versions
</dd>

<dt> any:</dt>
<dd>
match notes with any of the search terms instead of all. This has to be the first search option, or second if nb: is used.
</dd>

<dt>tag:theTag</dt>
<dd>
will match notes with tag theTag. Note that wildcards do work for tags, so this will match only theTag, not theTags
</dd>

<dt>tag:theTag&ast;</dt>
<dd>
use wildcards for looser matches. Note that you can only put them at the end of a word.
</dd>

<dt>tag:&ast;</dt>
<dd>
any tagged note
</dd>

<dt>-tag:theTag&ast;</dt>
<dd>
match notes that don't have tags starting with theTag.
</dd>

<dt>intitle:theTitle</dt>
<dd>
a title search. Exact matches only
</dd>

<dt>intitle:theTitle&ast;</dt>
<dd>
title search using wildcards.
</dd>

<dt class="long-line">intitle:strange intitle:word</dt>
<dd class="long-line">
Matches all words, in any order, within the title.
</dd>

<dt>intitle:"strange word"</dt>
<dd>
exact match of sequence "strange word". The algorithm seems a bit buggy - a note with title "this is a strange word" will be matched by `intitle:"strange word"`, `intitle:"strange a word"`, `intitle:"strange that word"` but not `intitle:"strange b  word"` or `intitle:"word strange"`
</dd>

<dt>-intitle:word</dt>
<dd>
Excludes notes with "word" in the title.
</dd>

<dt class="long-line">intitle:strange -intitle:word</dt>
<dd class="long-line">
all notes with the word "strange" but not "word" in the title
</dd>

<dt>author:name</dt>
<dd>
Notes with author equal to 'name'. Notes don't have authors unless you create one yourself.
</dd>
</dl>

## Search evernote by date

Evernote has some useful date searches capabilities. A date match means 'since that date (and time)". If you want to have a range of dates instead of just a starting point, use two dates, a positive one for the start and a negative one for the end - e.g. `created:2009 -created:2011` for dates between 2009 and 2010.

Dates use either the ISO 8601 format or relative date format. ISO 8601 is either yyyyMMdd for dates or yyyyMMddTHHmmss for date times. The T is the actual capital 'T' to separate date and time, and the other letter stand for y=year, M=month etc.

The relative format is easier; the word "day" stands for midnight of current day; "week" = midnight of the closest sunday, in the past, to current day; "month" = midnight of 1st of current month; "year" = midnight of 1st of January of current year. You can also subtract an integer to refer to dates further back, e.g. day-2.

<dl class="code-breakdown">

<dt>created:day</dt>
<dd>
matches notes created since last midnight
</dd>

<dt>updated:day-1</dt>
<dd>
matches notes updated since midnight yesterday
</dd>

<dt class="long-line">created:week-2 -created:week</dt>
<dd class="long-line">
matches notes created last week (but not this week, because of the -created:week)
</dd>

<dt>updated:20110411</dt>
<dd>
matches notes updated since the 11th of April  2011
</dd>

<dt class="long-line">created:20110411T191500 -created:20110411T1202500</dt>
<dd class="long-line">
matches notes created between 19:15 and 20:25 of 11th of April  2011
</dd>
</dl>

## More advanced search options

There are even more parameters some of which I had to dig out from the Thrift API files.

### Resource

Resources match notes which include at least one of the MIME types you list. Using MIME types is good news, because you can, say, use resource:image/gif for matchin gif files, or resource:image/\* for matching any image. Note: here's the [official list of MIME types](http://www.iana.org/assignments/media-types/index.html).

<dl class="code-breakdown">
<dt>resource:audio/&ast;</dt>
<dd>
Match notes with audio files embedded in them.
</dd>

<dt class="long-line">resource:application/pdf</dt>
<dd class="long-line">
Match notes with pdf files
</dd>

<dt class="long-line">resource:image/&ast; -resource:image/gif</dt>
<dd class="long-line">
Match notes with images which are not gifs
</dd>
</dl>

### SourceURL

The URL the note comes from. Note that you need to include the <http://> as well if using wildcards. This is not as useful as it may seem, because wildcards only work at the end of the string, so you need to write out all possible variations of a url to be sure:

<dl class="code-breakdown">
<dt class="long-line">sourceurl:http://www.bbc&ast; sourceurl:http://news.bbc&ast; sourceurl:http://bbc&ast;</dt>
<dd class="long-line">
Match notes from BBC websites, including news
</dd>
</dl>

### Source

When you add a note, Evernote creates a 'source' attribute to keep track of where the note comes from - unless it was created from within Evernote itself.

<dl class="code-breakdown">
<dt>source:app.ms.word</dt>
<dd>
Matches notes created with the MS Word plugin
</dd>

<dt>source:app.ms.&ast;</dt>
<dd>
Matches notes created with any Microsoft plugin
</dd>

<dt>source:mail.smtp</dt>
<dd>
Matches notes which were created by sending an email to your evernote account
</dd>

<dt>source:web.clip</dt>
<dd>
Notes created with one of the browser plugins
</dd>

<dt>source:mobile.wn</dt>
<dd>
Notes created with the mobile app
</dd>

<dt>-source:&ast;</dt>
<dd>
Notes created within the Evernote app (i.e., with no source attribute)
</dd>
</dl>

### Those are the useful Evernote search attributes

There are other, like latitude and longitude, but they are more useful for software connecting to the API.
