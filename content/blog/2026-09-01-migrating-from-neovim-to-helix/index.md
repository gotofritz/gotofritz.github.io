---
title: 'Migrating From Neovim to Helix'
date: "2026-09-01T12:41:18+02:00"

description: |-
  It's a shame it took [some weirdness in neovim world](https://hachyderm.io/@davidculley/117180221746840524) to make me switch editor to helix. I much prefer it.

mastodon: https://hachyderm.io/@gotofritz/117197601815496998
tags: ["helix","neovim"]
---

[Neovim](https://neovim.io/) is a CLI tool which evolved from the ancient [vi](https://en.wikipedia.org/wiki/Vi_(text_editor)) (created 50 years ago this year!) via the slightly less ancient [vim](https://en.wikipedia.org/wiki/Vim_(text_editor)) (25 years old this year!). It's super configurable, battle tested and has been around for ages.

I "learned" vi in college, but refused to use it, opting for the much simpler [nano](https://en.wikipedia.org/wiki/GNU_nano). Professionally I went for various IDEs as they came in and out of fashion, with Visual Studio Code being the latest (current) one. Eventually I noticed that more and more engineers I knew could get quite a lot done with CLI tools, and over the last year I slowly started migrating to neovim, but falling back on VSCode whenever I got stuck.

 I liked the power of neovim, but found getting into it quite a chore. The mountain of options are bewilderiung to a beginners. The best approach is to start with a distribution that sets things up for you. There are plenty of those; that's right, even the easy option requires choosing between a dozen beginner packages. I followed [Pawel's advice](https://pawelgrzybek.com/from-helix-to-neovim/) and picked [Kickstart](https://github.com/nvim-lua/kickstart.nvim)

![One Doesn't simply "start using neovim"](./feature.png)

It worked relatively well but it took me a couple of days to actually get it to work. Also I didn't like the sneaky feeling I was using configuration I didn't understand and only 2% of the tool's power.
## Helix : Neovim = Prettier : ESLint

I had heard good things about [Helix](https://helix-editor.com/) but didn't want to change yet again. Turns out I should have. It comes with everything one needs to get down to work (like language servers, file pickers, themes) and it's infinitely easier to configure. It reminded me of when front end developers migrated en masse from the code quality tool ESLint ("configure all the things!") to the much simpler Prettier ("just do something sensible that works!"). In a couple of days I am just as productive with Helix as I was with Neovim.

### Differences between Vim and Helix

There are a few differences, but overall the general gist is the same: `<ESC>` to switch to normal mode and run commands. `i` to type text. `h,j,k,l` move around the same way. Many basic concepts are the same. There is a [migrating from vim to helix page](https://docs.helix-editor.com/master/from-vim.html) with more details

### Some things that tripped me up

1. In the keymap documentation they mention <b>Home/End/Delete/PageUp/PageDown</b> keys, to navigate to the start of the line and so on. They are not available on many laptops. Turns out [the documentation is obsolete](https://github.com/helix-editor/helix/discussions/9957)

2. <b>World wrap</b> is not enabled by default, but it's easily done either [as a command](https://github.com/helix-editor/helix/discussions/2108#discussioncomment-10671197) or in the config.

3. The hardest one is that they use <b>ALT keys</b> a lot, but they don't work on Macs (Option is not strictly the same as Alt). That was never an issue with neovim but somehow it is with helix. The best workaround is to set the terminal (in my case iTerm) to send the left ALT key as ESC+, and keep the right one for the standard Mac usage (because it's needed for chars like # and accents), as [described here](https://github.com/helix-editor/helix/issues/2280#issuecomment-1165542932)

4. <b>[File Pickers](https://github.com/helix-editor/helix/wiki/7.-Tutorial:-Pickers)</b> are great, but it took me a while to work out how to go up and down the list (it's [<CTRL+N> and <CTRL+P>](https://docs.helix-editor.com/keymap.html#picker))

5. <b>Copying and pasting</b> from/to the clipboard into Helix took me some figuring out. It's <SPACE-y>for copy (yank) and <SPACE-p> for paste

## I would recommend Helix over Neovim

Regardless of the maintainers' shenanigans.
