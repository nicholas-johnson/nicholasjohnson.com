---
title: "Attributes Exercise"
section: "webdev"
slug: "multiple-backgrounds"
course: "css3Course"
layout: ../../layouts/Course.astro
---


# Multiple Backgrounds

CSS3 adds support for multiple background images. We simply supply them in a comma separated list, like so:

```js
  background: url(top.png) top left no-repeat, green url(bottom) top left, no-repeat;
```





The first image goes on top, the next one goes below.

Note that only the last background can contain a background colour.

## Browser Support

Support for multiple backgrounds is pretty good. It works in Webkit, Opera and Mozilla, but only IE9. A JavaScript fallback is relatively easy to construct for IE8 users.

## Partially transparent background images

This brings about a very interesting possibility, that of multiple partially transparent background images.

If we create background images with prime number widths, we can create background images that apparently do not repeat.

We can see some very interesting examples of this in action at the cicada project here:

<http://designfestival.com/cicada>



## Multiple Background Exercise

Create your own cicada backgrounds

## Multiple Backgrounds
1.  Grab a picture of an animal and a picture of a field from Google Image Search (or use something else, let your imagination run wild).
2.  Pop your animal in your field, very nice.



## Stripes

1.  Using Photoshop, create 4 transparent images of the following dimensions: 10x10, 30x10, 70x30 and 110x110.
2.  Fill in a few pixels on each in your own choice of colour, and save as transparent pngs.
3.  Stack them up as repeating background images on the body, smallest at the bottom, largest at the top. View in a browser, you should see a pattern which extends some distance without repeating.
4.  Add a 17x1 pixel image and lay it on top. Your pattern should now stretch even further.



## Squares

1.  If you'd like to experiment further, create square images which are multiples of the prime numbers (eg 30x30, 70x70, 110x110, etc).
2.  Add your own designs. Use the cicada project to get some ideas

If you tackle this exercise, I'd love to see what you come up with.

.downloads


## Content from the board

<https://www.dropbox.com/sh/6o48czxkpg2jje7/AAB8Ds3npzCJQo_LAW4iVQuKa?dl=1>
