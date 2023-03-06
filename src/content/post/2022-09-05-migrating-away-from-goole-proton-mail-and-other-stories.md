---
title: "Migrating away from Google: Hello Proton Mail!"
publishDate: 2022-09-05
description: Google informed me they would start charging me for letting me use their mail servers with my gotofritz.net domain. Fair enough, infrastructure costs money. But if I have to pay, why pay <i>them</i>? I'm can shop around. And so I did.
draft: false
tags:
  - Email
  - Google
  - ProtonMail
---

## Times are tough, ad revenue is down

Google is not well. Not only the search engine is losing its edge, but ad revenue is going down. They sent an email to one of my free accounts which simply said "A quick reminder that showing ads is the primary way we fund our services". And then a link to change my privacy settings. The mail didn't even tell me which settings exactly are troubling them. Smacked of desperation. And then of course if you follow the link, out of curiosity more than goodwill, you have to login first. And once logged in, the UI forgets what the original link was and you are just left there. Oh google, google.

More importantly, they want to charge ["small businesses" for using the google mail servers](https://www.inputmag.com/tech/google-charging-small-business-owners-google-workspace). By "small business" they mean anyone with their own domain. What a mercantile view of the internet, google! Just because I have a domain name doesn't mean I am a businessman! Anyway I see their point of view, they already data mined the shit out of our private correspondence. They don't need us any more, they know us better than we know ourselves. I wish I had the time, skills, and inclination to manage my own web server, but I don't. And people with much more knowledge than me think [self-hosting email is not longer a realistic option](https://news.ycombinator.com/item?id=32715437), anyway. So I will take this chance to migrate away from them. As it happens my Samsung also died at the same time (second time around - I don't think I will bother with them any more), so it's a chance to move to an iPhone.

## Migrating away from Google - a laundry list

1. **GCP, apps, etc**. At work we use GCP heavily of course, but outside work I don't. Not by choice, I simply don't need it. Except for GAS and accessing various APIs. But that's quite different. I can keep using the free tier with one of my free accounts. None of the stuff I use it for is mission critical, if Google shuts me off tomorrow I can survive.
1. **[GAS (Google Apps Script)](/tags/Google%20Apps%20Script)**. I use it quite heavily, but luckily I use [clasp](https://developers.google.com/apps-script/guides/clasp). This is Google's own tool to develop on my terminal rather than the Apps Editor. Besides the convenience, Clasp allows you to store the scripts on GitHub or any other external storage of your choice. Which I already do. So there is nothing to migrate, except the documents they are attached to. Yippee!
1. **Google Drive / Docs / Sheets**. I wanted to simply transfer ownership to one of my free accounts. But Google won't let me. That's because according to Google the docs belong to "my org", and cannot be transferred to people outside it. But not to worry, I can simply use the [takeout page](https://takeout.google.com/settings/takeout/) and download the lot, then upload them to the other account. It wasn't a big deal, the instructions are quite clear and the whole thing relatively fast.
1. **YouTube playlists**. I had quite a few of them, mostly for learning stuff. As well as music - although music is annoying, there is literally an advert before each song. Still. Downloading them is quite easy, it's part of the same takeout I used to get the google drive stuff. But playlist information without YouTube is quite useless, it's just a bunch of ids. I used some python scripting to upload those to a new account. It was quite involved and it's explained in [a separate post](/blog/migrating-youtube-playlists-by-adding-videos-via-cli)
1. **Google Maps**. This stuff could also be exported with the takeout, but to be honest it wasn't worth the effort, so I didn't
1. **Google Mail, Contacts, Calendar**. There is no easy way around this - I need to transfer them to a new provider. I picked ProtonMail, because they are based in Europe and they seem to have a good reputation. Although of course, [they will also hand your private data to law enforcement](https://www.theverge.com/2021/9/6/22659861/protonmail-swiss-court-order-french-climate-activist-arrest-identification) if required. But who doesn't? I don't expect anyone to be willing to go to jail for the sake of the 20 bucks a year I pay for their services. The other alternative was Tutanota, but some very inappropriate content they posted put me off them.

## Migrating to Proton mail

### Setting up and importing mail

The [ProtonMail onboarding page](https://proton.me) is very good. Buying an account and setting it up is child's play. Importing all my data from Google is also super easy and very fast. The data is all there. Changing DNS settings is quite clearly explained, I had no problems whatsoever. So far so good.

### Pain point: not able to convert GMail labels to Proton Mail folders

Importing data was fast and easy, but the mails needed some filing. I am quite well organised with mail. I spent more than a decade fine tuning a system that I mutated from GTD, and I am quite happy with it. I have seven major areas I organise my activity in, and then nested subfolders within them. Of course GMail doesn't use folders but labels.

Proton is quite confusing in that it asks you to assign a label to your import. It's not spelled out, but that is an _additional_ label (with the date and time of your import). Your GMail labels will stay. Although renamed. For example I had a hierarchical label `Admin > Bills > DE Bills`. Proton creates three labels for that: `Admin`, `Admin-Bills`, `Admin-Bills-DE-Bills`. There is no hierarchy for labels, so they all sit at the top level. Proton also has folders, which _can_ be hierarchical. But AFAIK there is no easy way to convert labels to folders. You have to do it manually. It took me a good 3 to 4 hours (I have a lot of emails)

### Pain point: Proton mail client is bare bones

In fact, it's even worse. Under the bonnet, labels and folders are the same thing. I know because I couldn't create a folder, say, called `Admin`. Proton says there is already one. But there is only a label of that name. Hence they _must_ be the same thing.

"Who cares?" I heard myself think. Well you do if you want to create children of `Admin`. To create the tree folder structure inherent in the Gmail labels, one needs to:

- manually create a folder for each label, bearing in mind that:
  - if the folder is part of a tree, you need to create all the parent folders first. So for `Admin > Bills > DE Bills` you need to create three folders, `Admin`, and inside it `Bills`, and inside it `DE Bills`
  - if the folder is top level, you need to rename the label of the same name first, as labels and folders cannot share names (for example rename `Admin` to `Admin2`)
- Once the folder structure is in place, you can go label by label and manually move the mail to the corresponding folder. But it isn't straightforward. Mails are paginated to a maximum of 50 mails per page. There is no 'select all mails in this folder' button. You have to go through it page by page by page by page... and when you dealt with all the mails in a label, delete it. IT TAKES FOREVER.

The whole process is quite laborious, and made more so by the UI. Labels are not in an alphabetical order, for a start. Also the page which lists them and the page where you can edit them are different (you can't just right click and rename it). So it's two tabs open and lots of back and forth. And to delete a label you have to select from a pulldown menu and then confirm. And you can't delete them in order - if you delete the `Admin` label you also delete the nested labels (even though they are not officially nested 🤦‍♂️). It's all quite laborious and messed up.

But it's a one off process, so I won't hold it again them. Mail has been working perfectly since.

### Pain point: filters migration

You will have to recreate all your mail filters by hand. There is no way to import them

### Pain point: making Thunderbird talk to the Proton Bridge

Proton provides a good mobile app, but no desktop client as such. Rather, it has a bridge that fetches "raw" mails, and then makes them available to your mail client. Quite smart. It was however quite painful to configure for Thunderbird. That's mostly Thunderbird's fault though. Thunderbird is by default suspicious of using 127.0.0.1 to fetch emails from. Adding exceptions should happen automatically when you set up the account. But if it doesn't, then the buttons to make it happen are buried deep in the preferences. They are in Preferences > Privacy and Security. Where you need to scroll to the very bottom and find the "Manage certificates" button. It took me a good couple of hours of googling and trouble shooting before getting there.

## Migrating to Proton contacts and calendar

Import works smoothly out of the box.

### Pain point: ProtonMail contacts do not sync with iPhones ones

There is only one glitch with contacts. On mobile, the contacts in the Proton app are separate from the ones in your contacts app. And there is no way to sync them. You have to download the csv file on your desktop and massage it there if you want to keep the two in sync. That means if you get a call from someone you've only ever conversed with via email, it takes a few steps to add their phone number to the contact. I suspect in the long term that may become problematic. But with my low level of activity I'm sure it will be fine for quite a while

### Pain point: you cannot share calendars any more

At first it looks like the shared calendars imported by Proton are perfect. But it soon turns out they are just a snapshot of the calendars as they were when you imported them. They are no longer connected to the ones you imported. Any changes you make will only be visible to you. Similarly, when someone makes changes to the originals, those changes will not be reflected in your Proton ones. There is no workaround for that. You can only share calendars if all users involved are on the same platform I'm afraid. If you want people to be aware of your appointments, you'll actually have to invite them. Shame.

## Conclusion: saved from a potential Kafkaesque nightmare

I always wanted to migrate away from Google. Not because I am anti-Google or anything, but out of anxiety. They are a huge, faceless organisation without even a hint of customer support. Any glitch in the system, any breach of some unspoken rule, and I can find myself locked out of my account. So many services depend on it! And nobody to contact for help. It would be a Kafkaesque nightmare. Glad I'm no longer in danger now.

Migrating was slightly laborious, but not overwhelmingly so. At least for me, who works in the software industry. I suspect it'd have been much harder for a "civilian". ProtonMail seems to be a good product. The mail client is much more barebone compared to Google's, but what _is_ there works well.
