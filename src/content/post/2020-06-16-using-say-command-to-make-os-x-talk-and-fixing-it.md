---
description: One can easily make OS X read out text from the CLI with the <a href="https://ss64.com/osx/say.html">say</a> command. But what to do when it gets stuck and stops working?
publishDate: 2020-06-16
draft: false
archived: false
title: Using the 'Say' command to make OS X talk, and fixing it when it gets stuck
tags:
  - os x
---

## What OS X's say command can do

`Say` can be quite useful to mess about with synthesized voices; I can't do any better than refer you to the [concise and informative command reference on the wonderful SS64.com](https://ss64.com/osx/say.html), but in short you can have it read text from other commands, from text file, and you can even save the result to a sound file or send it to the local network.

## Killing OS X's Say when it gets stuck

Sometimes `say` does get stuck though and stops making sounds (without actually throwing any errors). In those cases, you can simply kill the process with

```bash
❯ pkill speechsynthesisd say
```

## And now for something utterly pointless

Did you ever want to have random Wikipedia pages read to you by a synthesised voice? Well, now with this bash command you can! I have picked Luca and it.wikipedia because for some reason the Italian synthetic voice sounds much more realistic then the English ones. To change language just change the wikipedia subdomain and the voice...

```bash
❯ while :; do curl -L \
  'http://it.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=random&exlimit=max&exintro=1&explaintext=1&clshow=!hidden&cllimit=max&grnnamespace=0&grnfilterredir=nonredirects&grnlimit=1' | \
  jq ".query.pages | values[].extract" | \
  say -v "Luca"; sleep 1; \
  done
```

## jq is a very useful CLI tool for transforming and searching through JSON

Oh yes, for the command above to work you need to install jq with `brew install jq`... In case you are not familiar with it, jq is a great must-have tool for developers, it's worth installing it and getting familiar with it. For example, you can easily find out the version number inside a project's package.json with

```bash
❯ cat package.json | jq ".version"
```

And that's that for today, all the best.
