---
title: dd can create random files of any size
date: '2025-08-09T13:20:28+02:00'

description: |-
    I needed to generate files of a certain size for performance testing - their contents were irrelevant. The `dd` utility was perfect for the task.

tags: ['cli']
---

## Creating a 100MB file full of random binary data

```bash
dd if=/dev/urandom \
    of=a_file \
    bs=1048576 \
    count=100
```

<dl class="code-breakdown">
<dt>dd</dt>
<dd>A command-line utility for copying and converting data</dd>

<dt>if</dt>
<dd>the input file</dd>

<dt>/dev/urandom</dt>
<dd>takes advantage of UNIX's philosophy of treating all resources as files. This is a standard UNIX utility (it generates random bytes), but to dd it works as if it was a file</dd>

<dt>of</dt>
<dd>the output file</dt>

<dt>a_file</dt>
<dd>in this case we generate an actual file</dd>

<dt>bs</dt>
<dd>block size; the amount of data to read/write at once. It should be a power of 2</dd>

<dt>1048576</dt>
<dd>That is the closest power of 2 to 1 MB</dd>

<dt>count</dt>
<dd>How many blocks to write</dd>

<dt>100</dt>
<dd>We are creating a 100MB file full of gibberish</dd>
</dl>

## Creating a 1Kb file full of random ASCII data

The same command can be adapted to create ASCII data, by piping another command that translates the output to ASCII

```bash
dd if=/dev/urandom \
    bs=1 \
    count=1024 \
    2>/dev/null \
    | base64 \
    | head -c 1024 \
    > a_file.txt
```

<dl class="code-breakdown">
<dt>dd if=/dev/urandom</dt>
<dd>The same command as above (except that there is no output file this time)</dd>

<dt>bs=1 count=1024</dt>
<dd>this time just 1 byte of data at the time, for a total of 1024 bytes</dd>

<dt>2>/dev/null</dt>
<dd>if there are any errors or debugging info, just send them to the "black hole" (/dev/null) so we don't see them</dt>

<dt>| base64</dt>
<dd>send the output to the util `base64`, which converts binary data into text. It is commonly used to encode, say, images in email attachments</dd>

<dt>| head </dt>
<dd>send the output to the util `head`, which takes only the initial part of any ouput and discards the rest. This is needed, because base64 makes the output larger by about 33% (there is a reason why we use binary and not text to encode data)</dd>

<dt>-c 1024</dt>
<dd>in this case only take the first kilobyte (note how it matches the initial count)</dd>
</dl>
