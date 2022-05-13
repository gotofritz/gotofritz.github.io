---
date: 2011-12-22 12:34
title: Combining images with ImageMagick
prev: google-apps-script-boilerplate
next: change-title-cmd-window
excerpt: Assorted <a href="http://www.imagemagick.org/script/index.php">ImageMagick</a> commands for combining images
tags:
  - imagemagick
---

## Combining images vertically with a line separating them

This is useful for combining a few images into a single vertical strip, with a 10px white border between each image, like the portrait photos from photo boots.

```sh
convert *.png[400x400] -splice 0x10 \\
    -background "#ffffff"  -append  -crop -0+10 output.png
```

<dl class="code-breakdown">
  <dt>convert</dt>
  <dd>calls up one of the ImageMagick commands, convert</dd>

  <dt>*.png[400x400] </dt>
  <dd>an expression using wildcards to match all png images in the current folder, and resize each as it is read so that neither width and height are greater than 400px</dd>

  <dt>-splice 0x10</dt>
  <dd>add a 10px vertical border to each image</dd>

  <dt>-background "#ffffff"</dt>
  <dd>make that border white (using HTML color ocde)</dd>

  <dt>-append</dt>
  <dd>combine images vertically - use +append to combine them horizontally</dd>

  <dt>-crop -0+10</dt>
  <dd>crop the top 10 pixels from the combined image, as we want the borders only between images</dd>

  <dt>output.png</dt>
  <dd>this is the result image file. It could just as easily be a .jpg</dd>
</dl>

## Removing window artefacts from the top of the images first

If you have, say, a bunch of screenshots with the address bar etc at the top, you need to modify the command to get rid of it first. This time you can't use the shortcut resize.

```sh
convert *.png -gravity south -splice 0x111 \\
    -shave 0x111 -resize 400x400  -splice 0x10 -background "#ffffff"  \\
    -append  -crop -0+10 output.png
```

<dl class="code-breakdown">
  <dt>convert</dt>
  <dd>calls up one of the ImageMagick commands, convert</dd>

  <dt>*.png </dt>
  <dd>an expression using wildcards to match all png images in the current folder</dd>

  <dt>-gravity south</dt>
  <dd>aligns the next command(s) bottom</dd>

  <dt>-splice 0x111</dt>
  <dd>because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command</dd>

  <dt>-shave 0x111</dt>
  <dd>This removes 111px from the top and bottom; -shave is easier to work with than -crop</dd>

  <dt>-resize 400x400 </dt>
  <dd>now i can resize so that the image does not exceed 400 px either direction. From now on carry on as for previous command</dd>

  <dt>-splice 0x10</dt>
  <dd>add a 10px vertical border to each image</dd>

  <dt>-background "#ffffff"</dt>
  <dd>make that border white (using HTML color ocde)</dd>

  <dt>-append</dt>
  <dd>combine images vertically - use +append to combine them horizontally</dd>

  <dt>-crop -0+10</dt>
  <dd>crop the top 10 pixels from the combined image, as we want the borders only between images</dd>

  <dt>output.png</dt>
  <dd>this is the result image file. It could just as easily be a .jpg</dd>

</dl>

## Combining images into an animated gif

If instead you'd rather create an animated gif, here's the simplest way to do it - without any of the powerful options that ImageMagick offers.

```sh
convert *.png -gravity south -splice 0x111 \\
    -shave 0x111 -resize 400x400  -set delay 300 output.gif
```

<dl class="code-breakdown">
  <dt>convert</dt>
  <dd>calls up one of the ImageMagick commands, </dd>

  <dt>*.png </dt>
  <dd>an expression using wildcards to match all png images in the current folder</dd>

  <dt>-gravity south</dt>
  <dd>aligns the next command(s) bottom</dd>

  <dt>-splice 0x111</dt>
  <dd>because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command</dd>

  <dt>-shave 0x111</dt>
  <dd>This removes 111px from the top and bottom; -shave is easier to work with than -crop</dd>

  <dt>-resize 400x400 </dt>
  <dd>now i can resize so that the image does not exceed 400 px either direction</dd>

  <dt>-set delay 300</dt>
  <dd>adds a three seconds delay between all images</dd>

  <dt>output.gif</dt>
  <dd>that's it - because a list of images and a delay were supplied, ImageMagick automatically converts to an animated gif.</dd>

  </dl>

## Cropping a set of images to the same size and animating them

If the images in the gif are of different size you may want to do something about that. Here they are cropped to a minimum common size, the extra pixels discarded.

```sh
convert *.png -resize 800x500^ -gravity center \\
    -crop  800x500+0+0 +repage -set delay 300 output.gif
```

<dl class="code-breakdown">
  <dt>convert</dt>
  <dd>calls up one of the ImageMagick commands, </dd>

  <dt>*.png </dt>
  <dd>an expression using wildcards to match all png images in the current folder</dd>

  <dt>-resize 800x500^</dt>
  <dd>the ^ after the dimensions means those are the minimum sizes rather then the maximum</dd>

  <dt>-gravity center</dt>
  <dd>aligns the next command(s)</dd>

  <dt>-crop  800x500+0+0</dt>
  <dd>crops to 800x500, with no offest (0,0)</dd>

  <dt>+repage</dt>
  <dd>resets the origin after the crop</dd>

  <dt>-set delay 300</dt>
  <dd>adds a three seconds delay between all images</dd>

  <dt>output.gif</dt>
  <dd>that's it - because a list of images and a delay were supplied, ImageMagick automatically converts to an animated gif.</dd>

  </dl>

## Arranging images in a grid

This is actually two commands, one after the other - one to resize and crop the images, the other to arrange them.

```sh
convert *.png -gravity south \\
    -splice 0x111 -shave 0x111 -resize 400x400 converted.png
montage converted*.png -mode concatenate  -tile 2x2  output.png
```

<dl class="code-breakdown">

  <dt>convert</dt>
  <dd>calls up one of the ImageMagick commands, convert</dd>

  <dt>*.png </dt>
  <dd>an expression using wildcards to match all png images in the current folder</dd>

  <dt>-gravity south</dt>
  <dd>aligns the next command(s) bottom</dd>

  <dt>-splice 0x111</dt>
  <dd>because I need to remove 111px from the top of the image (that's the Chrome toolbar on a Mac - different values would apply for different situations), it turns out to be easier to add the same amount to the bottom, then deal with top and bottom as one with the next command</dd>

  <dt>-shave 0x111</dt>
  <dd>This removes 111px from the top and bottom; -shave is easier to work with than -crop</dd>

  <dt>-resize 400x400 </dt>
  <dd>now i can resize so that the image does not exceed 400 px either direction</dd>

  <dt>converted.png</dt>
  <dd>for each input image, it creates a correspoding output image in the current folder named converted-1.png, converted-2.png...</dd>

  <dt>montage</dt>
  <dd>calls up one of the ImageMagick commands, montage</dd>

  <dt>converted*.png</dt>
  <dd>this time only match the images whose name start with 'converted', i.e. the ones created by the previous command</dd>

  <dt>-mode concatenate</dt>
  <dd>arranges them in a grid</dd>

  <dt>-tile 2x2</dt>
  <dd>in this particular case, it is a 2x2 grid as I only had four images. You can use x2 or 2x to keep the number of rows and columns respectively fixed at 2, and the other dimension filled in with however many images you have</dd>

  <dt>output.png</dt>
  <dd>...and here comes the image</dd>

  </dl>

## More

[More ImageMagick commands](http://www.imagemagick.org/script/command-line-processing.php#anatomy).
