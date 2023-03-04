---
publishDate: 2022-05-22T13:10:12.382129
title: Remove lines matching some patterns from all files in a dir
tags:
  - bash
  - sed
description: A CLI task I find myself doing often with sed
is_empty: false
---

A typical use case was when [rebuilding this site with Sveltekit](/blog/blog-with-sveltekit-and-markdown). I had a bunch of markdown files who had a been through a lot of migrations from tool to tool. The frontmatter had gotten messy, it was interfering with Sveltekit.

## TL;DR: the command

```sh
❯ find /PTH/TO/FILES/*.txt -type f | \n  xargs sed -i.bak -f /PTH/TO/SED_RULES.sed
```

Read further for more explanations

### Breaking down the command

<dl class="code-breakdown">
<dt>find /PTH/TO/FILES/*.txt</dt>
<dd>use the `find` command on all files that match `/PTH/TO/FILES/*.txt`</dd>

<dt>-type f</dt>
<dd>ignore directories - an extra precaution which you may not need</dd>

<dt>|</dt>
<dd>every filename you find will be passed to...</dd>

<dt>xargs</dt>
<dd>transform what it receives (i.e., the filename) into a CLI argument for ...</dd>

<dt>sed</dt>
<dd>So that will be equivalent to `sed filename1`, `sed filename2`, ...</dd>

<dt>-i.bak</dt>
<dd>`-i` will make the changes in place. Macs force you to create a backup file, for your own protection. In this case they will be called `filename1.bak` `filename2.bak` ...</dd>

<dt>-f /PTH/TO/SED_RULES.sed</dt>
<dd>Loads a list of scripts to apply from SED_RULES.sed. The file can be named everything, doesn't have to end with .sed</dd>
</dl>

## What exactly _is_ sed?

[Sed](https://www.gnu.org/software/sed/manual/html_node/index.html) is a stream editor. A stream editor goes through a text file once, from top to bottom one line at the time. As it goes through it applies a sequence of _scripts_, and then the text comes out at the other end. The scripts can be very short, and look pretty much like regular expressions. For example `s/he/they/g`. They can rearrange the line of text, delete it or apply other transforms. And also capture some of the text and accumulate it until the end.

## Example: remove all blanks from end of each line

For small jobs you pass those scripts as command line arguments. For example the one liner below will remove all blanks at the end of each line, and spit out the output to the CLI.

```bash
❯ sed 's/[[:blank:]]*$//' some-text-file.txt
1st line of some-text-file.txt
2nd line
....
```

## Example: load a list of delete commands from a file

But if you want to reuse the patterns you can put them in a text file, one per line, and tell sed to load them from there. That can also be useful if there are too many patterns for the CLI and writing them all gets awkward. You can pass the file containing the patters with the `-f` flag. The example below will apply `illegal-pizza-toppings.sed` to the text stream. `/something/d` is the sed command which will delete the whole line if `something` is in it.

```sh
# illegal-pizza-toppings.sed
/pineapple/d
/ketchup/d

# pizzas.txt
margherita: tomato, mozzarella
hawai: tomato, mozzarella, ham pineapple
fiorentina:  tomato, mozzarella, spinach, egg

$ sed -f illegal-pizza-toppings.sed pizzas.txt
margherita: tomato, mozzarella
fiorentina: tomato, mozzarella, spinach, egg
```

## Prior art

As always there is more on <abbr title="Stack Overflow">SO</abbr>. For example you could achieve the same with `grep -v xxx`, which passes the lines who _do not_ match xxx. But the command above is my favourite

- [sed - delete lines taking patterns from external file](https://superuser.com/questions/1376305/sed-delete-lines-taking-patterns-from-external-file)
- [Remove line of text from multiple files in Linux](https://stackoverflow.com/questions/1182756/remove-line-of-text-from-multiple-files-in-linux)
