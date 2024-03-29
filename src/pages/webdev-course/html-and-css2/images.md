---
title: 'Images'
date: '2014-06-30 19:04:36'
legacy: true
---

# Images

You can add an image to your page using the img tag. The img tag has an src (source) attribute which points to the location of the image

```html
<img src="cat.jpg" />
```

## Self closing tags

The img tag is unusual because unlike a paragraph it doesn't need to wrap anything, it is just an image, it doesn't contain any further content.

This means you don't need the closing tag, the tag closes itself, it is self closing.

There are two valid ways of dealing with self closing tags

### HTML 4.01 style - from the 90s

In older versions of HTML you could simply omit the closing img tag, like so:

```html
<p>
  <img src="cat.jpg" />
</p>
```

### XHTML style - from the 00s

XHTML is a more recent version of HTML based on strict XML. In XHTML we need to explicitly mark the tag as self closing. We do this with a trailing forward slash, like so:

```html
<p>
  <img src="cat.jpg" />
</p>
```

### HTML5 - the current spec

HTML5 is more forgiving. Both styles are allowed, you can choose between them.

## Exercise 2 - Images

1. Download a lovely picture of a cat.
2. Create an image on your page to display it.

## Exercise 2 - alt text

For accessibility, all images should have an alt attribute. This describes the image to people who cannot see it, and also helps search engines understand the page.

```html
<img src="cat.jpg" alt="happy little cat" />
```

### Bad alt text

Bad alt text might say something like this:

```html
<img src="cat.jpg" alt="a big picture of a cat" />
```

This is not helpful to anyone. It describes the picture rather than what is in the picture.

### Good alt text

Good alt text describes the content or meaning of the image. You don't need to describe the image itself. Better alt text might look more like this:

```html
<img src="cat.jpg" alt="a small cat licking chocolate off it's whiskers" />
```

# Exercise - Alt text

1. Add an alt attribute to your image. Google can now understand the meaning of the image. Screen readers can interpret it.
2. Optionally add a description attribute to your page. The description attribute contains a longer description of the image.

%aside

## Downloads

- [Code from the board](https://www.dropbox.com/sh/3fphoh9v68wptpm/AACRtNa5kiI6ZL06kD01C_-ra?dl=1)
