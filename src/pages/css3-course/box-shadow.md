---
title: "Attributes Exercise"
section: "webdev"
slug: "box-shadow"
course: "css3Course"
layout: ../../layouts/Course.astro
---



# Shadows

CSS3 includes box shadows and text shadows

Box Shadow
Box Shadow can be used to create a drop shadow effect, or an inner glow. Basic usage looks like this:

```js
  box-shadow: 10px 10px 5px 5px #888;
```





The four parameters are:

* horizontal offset
* vertical offset
* blur (optional)
* spread (optional)
* colour

## Multiple Shadows

But box-shadow goes further than this, you can create multiple shadows by passing a comma separated list, like so:

```js
  box-shadow: 10px 10px #888, -10px -10px #f4f4f4, 0px 0px 5px 5px #cc6600;
```





This allows you to create multiple drop shadows on a single element.

## Inner Shadows

You can create an inner shadow or glow using the inset keyword:

```js
  box-shadow: inset 2px 2px 2px 2px #9ff;
```





This will create a pretty inset shadow or inner glow.

## Transparent Shadows

Box shadows are not transparent by default. We can fix this using RGBA values for supporting browsers.

```js
  box-shadow: inset 2px 2px 2px 2px rgba(0,0,0,0.2);
```





## The Spec

The following diagram taken from the W3C specification shows how it should work.

%img{ src: "/images/css3/box-shadow.png", alt:""}



## Browser Support

Box shadows are supported in IE9. If you want to polyfill them in older browsers, your best best is to use a background image
At time of writing, vendor prefixes may be required.

## Text Shadow

Related to Box-shadow is text-shadow. It's not as fully featured as box-shadow, you can't create multiple shadows for instance, but it's still handy to know. Use it like this:

```js
  text-shadow: #6374AB 20px -12px 2px;
  The four parameters are:
```





* Colour
* X distance
* Y Distance
* Blur

The downside, there's no support in IE9 as of yet. As an enhancement it's fine, but don't rely on it.




## Exercise - Box Shadows

In this exercise we will test out the effects it is possible to achieve using box-shadow.

Using a single box shadow, try to create the following effects. Don't feel constrained to back and white, please be colourful, the images are in black and white for simplicity, but you can use any colour you like:


%img{ src: "/images/css3/box-shadow-1.jpg", alt:""}

%img{ src: "/images/css3/box-shadow-2.jpg", alt:""}

%img{ src: "/images/css3/box-shadow-3.jpg", alt:""}






## Exercise - Multiple Shadows

Use multiple shadows to create the following effects

%img{ src: "/images/css3/box-shadow-4.jpg", alt:""}

%img{ src: "/images/css3/box-shadow-5.jpg", alt:""}





## Exercise - Alpha transparency plus shadows

I have used rgba and 4 shadows to create the following:

%img{ src: "/images/css3/box-shadow-6.jpg", alt:""}

1.  Try to replicate it.
2.  Replicate it using colours, and a wider margin.
3.  Add additional shadows, change the position, spread and blur, and create something really interesting.


## Exercise - Inner glow

1.  Modify some of your previous examples to use inner glow. See how nice that looks?



## Exercise - Duplicating Elements

One of the great strengths of box shadows is that you can duplicate an element anywhere on the page.

1.  Create a circle using a div with rounded corners.
2.  Use a shadow with no blur to create a copy the circle off to the right. Give it a different colour.
3.  Create several more copies of the circle, each in a different colour.
4.  Now do the same with a text shadow. Duplicate a line of text with no blur and a y offset. Do this several times to create a cool effect.

Experiment. See if you can create a fire effect, and ice effect, a blur effect.

See if you can create an RAF target using rounded corners and box shadows.

.downloads


## Content from the board

<https://www.dropbox.com/sh/5oab4dgs7z794zn/AAC6pm2JeafiDBOotzwCZjsDa?dl=1>

