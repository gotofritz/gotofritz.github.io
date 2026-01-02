---
title: Can SAM Audio Be Used for Stem Separation, Like Demucs?
date: "2026-01-01T22:46:16+01:00"

description: |-
  Now I can finally play with my local SAM Audio installation and discover just how useful it really is. Meta advertises it as a professional-grade tool, but is it?

tags: ["audio", "llm", "macos", sam-audio"]
mastodon: https://hachyderm.io/@gotofritz/115823139121839360
---

## TL;DR

No.

## A more nuanced summary of my experience running <nobr>SAM Audio</nobr> locally, so far

[Getting SAM Audio to work on my Mac laptop](/blog/2025-12-20-playing-with-the-sam-audio-model-on-my-m1-macbook/) was laborious, and the performance is not amazing. Some of the limitations arise because I run the model on a macOS laptop. With more firepower, I could probably wring more out of it. That said, macOS laptops are very common in audio processing, so this is not an unrealistic setup. For the record, I use a machine with an M1 Max chip, which has an integrated GPU, and 64 GB of RAM.

Until now I have been using another package, also from Meta, called [Demucs](https://github.com/adefossez/demucs). It is no longer supported, so I forked the version one of the original developers had already forked, and I am using that. Demucs is designed to separate a sound file into four tracks: bass, drums, vocals, and other. There is also an experimental branch with additional stems such as guitar and piano, but the results are inconsistent. Demucs mostly does the job, and on my laptop it never takes more than 30 minutes for a track, and it Just Works™. The quality is not great, but it is enough for my needs.

### 1. <nobr>SAM Audio</nobr> cannot handle whole tracks; 10-second segments are recommended

With my setup, you cannot pass a whole track to <nobr>SAM Audio</nobr> and get the extracted instruments back, like you can with Demucs. You have to split the original into segments a few seconds long, pass each segment in turn to the model to get two output segments (the target and the residual), and then reassemble the complete tracks from those output segments. This is doable but laborious, and it requires a bit of coding.

How long should these segments be? One Meta developer suggested 10 seconds, since those are the clip lengths the models were trained on. I use values between 9 and 18 seconds for the sam-audio-large model. So a typical 3 to 4 minute track ends up split into roughly 20 segments.

Splitting into segments is not the end of the world, but it causes two main issues. First, there are sometimes **boundary artifacts** between segments. Second, the overall **tone changes** between segments. Both are significant enough to make the model unsuitable for professional use as a stem separator, in my opinion, though still good enough for hobbyists like myself.

An example of **boundary artifacts** is this bass fragment from the Stevie Wonder track I linked below. It's the only clearly audible artifact in a 4 mins track (others are more subtle), but it's quite noticeable.<br>
{{<audio src=./stevie/bass-sam-artefacts.mp3 >}}

One common solution to boundary artifacts is the use of Hann windows, which basically means having a one or two second overlap across adjacent segments and then crossfading between them. I tried applying this, but it did not consistently remove the artifacts. In fact, sometimes it introduced artifacts of its own. This may improve with more experimentation, but for now I decided against using overlaps and windowing, as the artifacts are not always present and depend on what the instrument is doing.

**Tone changes** across segments occur because each segment has its own internal mix of instruments. The results of extracting the bass in, say, the intro of a song, which might consist only of kick drum and bass, versus the middle of the song, which has the whole band and maybe a string section, sound slightly different.

In this bass fragment from the D’Angelo piece below, which used 13.22s windows, there is hardly any bass in the first window, so <nobr>SAM Audio</nobr> decided to pick the rhythmic guitar and the kick drum. In the next window there is enough bass for <nobr>SAM Audio</nobr> to do its processing, so it abruptly drops the other two instruments. The quality is a bit low, probably due to the audience noises. By the next window the audience quiets down and the bass suddenly becomes much brighter. Again, for my needs it is more than enough, but definitively not professional quality.<br>

{{<audio src="dangelo/bass-sam-bands.mp3" >}}

Demucs handles all of this under the hood, so you do not notice any of the issues I mentioned. I intend to investigate their source code further to see how they manage segmentation, and whether there are tricks worth borrowing.

### 2. <nobr>SAM Audio</nobr> is not actually a stem separator, like Demucs is

As mentioned earlier, Demucs is designed to do one thing: separate a sound file into four tracks, and nothing else. <nobr>SAM Audio</nobr>, by contrast, is designed to extract a single target (which they claim could be anything) from a sound file. If you want to extract bass, drums, and vocals, you have to run <nobr>SAM Audio</nobr> three times. But it gets worse.

There is no explicit concept of an "other" stem in <nobr>SAM Audio</nobr>. What you get for each run is the target instrument and a residual: bass and everything except bass, drums and everything except drums, vocals and everything except vocals. That gives you six tracks in total, none of which corresponds to "everything except bass, drums, and vocals".

Getting creative with prompts does not help. Prompts like "other", "everything except bass or drums", or "bass and drums" do not work. This is not just a limitation of my local setup. The same behaviour appears when running [their demo](https://aidemos.meta.com/segment-anything/editor/segment-audio).

To obtain an "other" track, you have to chain residuals. For example, you extract the bass first and get a bass track and a residual. Then you extract the drums from that residual and get a drum track and another residual. Then you extract vocals from that second residual and get a vocal track and a final residual. That last residual is your "other." This works in principle, but the quality degrades with each pass. At that point, it is often faster and cleaner to use <nobr>SAM Audio</nobr> to extract bass, drums, and vocals from the original file, and then use Demucs for the "other." Which approach works best varies case by case.

Another approach I briefly toyed with was subtracting the extracted instruments from the original mix, to avoid the quality loss associated with multiple passes. This turned out to be problematic because the processed segments do not line up perfectly with the original audio. The lengths differ slightly, possibly due to padding, resampling, or other internal processing. Sample rates also play a part - output generated by <nobr>SAM Audio</nobr> are 48kHz, which is good but different from most inputs you'll come across. Fixing this issue would require phase alignment and sample-accurate matching, which gets complicated very quickly. For now, I am not pursuing this approach.

### 3. Text prompts are an illusion; <nobr>SAM Audio</nobr> only knows bass, drums, and vocals

One of the things that initially appealed to me about <nobr>SAM Audio</nobr> was the idea of communicating with it via text prompts. I was hoping to create interesting filters by passing unusual prompts, not just "extract the bass," but things like "extract the contagious laughter of the sun" and see what it came up with.

In reality, the model appears to be trained on the same dataset as Demucs, and it only really understands bass, drums, and vocals. One of the developers mentioned that it can distinguish between male and female voices, but I have not tested that. Never mind surreal prompts. Even straightforward requests like "keyboard" or "guitar" result in silence or a nearly blank track.

This is all rather disappointing, though the models may improve over time.

### 4. It is time-consuming

Once you factor in segmentation, running each prompt three times for the main instruments, plus additional runs to obtain a usable residual, splitting a single track into stems takes hours.

For a track that is 4 minutes and 31 seconds long, the total processing time was 5 hours, 36 minutes, and 3 seconds with sam-audio-small, and 5 hours, 34 minutes, and 50 seconds with sam-audio-large. Yes, it was slightly faster with the larger model, but I do not think this difference is meaningful. It likely depends on what else the computer was doing at the time.

For comparison, Demucs processed the same track in about 20 minutes.

## Where <nobr>SAM Audio</nobr> shines

The raw audio quality from <nobr>SAM Audio</nobr> is noticeably better than what you get from Demucs. Demucs can sound like music streamed over 1990s-era internet. <nobr>SAM Audio</nobr> is particularly good at bass. With the sam-audio-large model, it captures not just the fundamental bass notes but also details like fingers sliding on the strings. At least, I assume it is capturing them. It could also be hallucinating them, so more experimentation is needed.

It also handles slap bass quite well, including popped notes that Demucs often misses. That said, there are cases where Demucs does better on drums. I have encountered examples where <nobr>SAM Audio</nobr> failed to capture snare hits cleanly while Demucs managed to extract them reasonably well. I list a few examples below.

## So where does that leave us?

I am a bass player, and I use stem separation to extract bass and drums, combine them into a bass-plus-drums track for transcription, and also create bassless tracks to play along to. For this use case, a combination of <nobr>SAM Audio</nobr> and Demucs works very well, and I plan to keep experimenting to streamline and improve the workflow.

Beyond that, though, <nobr>SAM Audio</nobr> does not seem ready. Extracting a trumpet part, the sound of jets, or a frog croaking? No, not really. And even when it does work, you can reliably extract only one element at a time, not build complex multitrack layouts. I am not entirely sure how Meta can claim this is professional quality.

## Some examples

### Propaganda · Salami Rose Joe Louis

Here <nobr>SAM Audio</nobr> just couldn't get the drums right; missing the rim shots and and snares, and even the cymbals are low quality. Demucs worked better; the only part worth keeping from <nobr>SAM Audio</nobr> is the bass.

{{< youtube TtGaI0fF-U0 >}}
<br>

<b>Drums</b><br>

**Demucs**: muffled hi-hat, but has all the parts<br>
{{<audio src=./salami/drums-demucs.mp3 >}}

**Sam Audio**: muffled hi-hat, missing snares<br>
{{<audio src=./salami/drums-sam.mp3 >}}

<b>Bass</b><br>

**Demucs**: muffled<br>
{{<audio src=./salami/bass-demucs.mp3 >}}

**Sam Audio**: decent, can hear articulation<br>
{{<audio src=./salami/bass-sam.mp3 >}}

<b>Other</b><br>

**Demucs**: loud and clear<br>
{{<audio src=./salami/other.mp3 >}}

**Sam Audio**: includes drums, and not clear<br>
{{<audio src=./salami/residual.mp3 >}}

### Stevie Wonder - I wish

SAM Audio does a much better job than Demucs, but again, the residual chain (i.e. extracting residual from residual from residual) is just not good enough quality. I also compared sam-audio-large and sam-audio-small

{{< youtube B6cqrjlqjuM >}}
<br>

<b>Drums</b><br>

**Sam Audio Large**: muffled hi-hat, more presence than demucs<br>
{{<audio src=./stevie/drums-sam-large.mp3 >}}

<b>Bass</b><br>

**Demucs**: muffled<br>
{{<audio src=./stevie/bass-demucs.mp3 >}}

**Sam Audio Small**: decent<br>
{{<audio src=./stevie/bass-sam-small.mp3 >}}

👍🏽**Sam Audio Large**: decent, can hear articulation<br>
{{<audio src=./stevie/bass-sam-large.mp3 >}}

<b>Other</b><br>

**Demucs**: decent<br>
{{<audio src=./stevie/other-demucs.mp3 >}}

**Sam Audio**: not fit for purpose<br>
{{<audio src=./stevie/other-sam-large.mp3 >}}

### D'Angelo - Left and Right, Live

This is a low quality recording with a lot of audience noises.

{{< youtube zOPtgYeUtMw >}}
<br>

<b>Drums</b><br>

**Demucs**: missing cymbals<br>
{{<audio src=./dangelo/drums-demucs.mp3 >}}

**Sam Audio**: decent<br>
{{<audio src=./dangelo/drums-sam.mp3 >}}

<b>Bass</b><br>

**Demucs**: decent<br>
{{<audio src=./dangelo/bass-demucs.mp3 >}}

**Sam Audio**: decent, a bit less muffled<br>
{{<audio src=./dangelo/bass-sam.mp3 >}}

**Sam Audio**: the start of the song, showing how segmentation windows change the sound<br>
{{<audio src="./dangelo/bass-sam-bands.mp3" >}}

<b>Other</b><br>

**Demucs**: loud and clear<br>
{{<audio src="./dangelo/other-demucs.mp3" >}}

**Sam Audio**: mangled up<br>
{{<audio src="./dangelo/other-sam.mp3" >}}
