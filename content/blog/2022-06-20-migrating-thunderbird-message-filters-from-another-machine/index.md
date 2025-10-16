---
description: Thunderbird doesn't sync message filters. Its roots are from ancient times, before distributed computing was prevalent. If you want to copy your filters from one machine to another you have to do it the old-fashioned way, by copying config files
publishdate: 2022-06-20
draft: false
archived: false
title: Migrating Thunderbird message filters from another machine
tags:
  - Email
  - Thunderbird
slug: migrating-thunderbird-message-filters-from-another-machine
---

## Surely syncing profiles is basic functionality which is baked in, right?

Don't bet on it. There's <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=446444">this unresolved issue from 14 years ago</a>.. And to be fair, syncing requires some sort of distributed infrastructure. Thunderbird is no longer under the Mozilla umbrella, it's run by volunteers. Syncing across devices is not a realistic expectation.

A more realistic expectations would be the ability to export and import filters from / to files. That's <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=166842">been raised 20 ago already</a>... and there hasn't been any activity whatsoever on it. The only solution offered was a plugin abandoned 12 years ago. So it's fair to say it's not going to happen.

The only way then, is to get that CLI out and start copying files.

## Which files needs to be copied where in order to migrate Thunderbird's message filters?

I do it via Dropbox, but of course you can use any intermediate storage of your choice. The following works for my GMail IMAP accounts, but the same idea works if you are using POP or another provider. You simply have to go through the various folders in your profile until you find the one that does the job. Sadly, there is no shortcut. If you didn't do anything special and are just using the standard Thunderbird Profile, then the one you want is the one that ends with `xxxx.default-release`. Other than that, it's all trial and error.

Note that `e8fiz6tv` and `j41re1op` are just random strings Thunderbird creates and associates with a user. You'll find a couple of those in the Profile folder, more if you have set up more profiles. Presumably renaming a folder in there would break things, so they went for a random string which doesn't need to be changed even if you rename the profile.

You need to quit Thunderbird on the target machine before you run the commands below

```sh
# source machine, the one with the filters
❯ cp ~/Library/Thunderbird/Profiles/e8fiz6tv.default-release/ImapMail/imap.gmail.com/msgFilterRules.dat \
  ~/Dropbox

# target mchine, the one where I want to copy the filters to
❯ mv ~/Dropbox/msgFilterRules.dat \
  ~/Library/Thunderbird/Profiles/j41re1op.default-release/ImapMail/imap.gmail.com/
```

## Conclusion

All said and done it's actually a quite simple procedure. The time consuming part is researching to confirm that's actually the way to do it.
