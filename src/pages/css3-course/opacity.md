---
title: "Attributes Exercise"
section: "webdev"
slug: "opacity"
course: "css3Course"
layout: ../../layouts/Course.astro
---




# Opacity and RGBA

Like a ninja, Opacity allows us to alpha down an element, making it fade away.

RGBA is similar. It allows us to specify a semi transparent colour.

These are different from each other. Opacity sets the opacity of the element and all its descendants, including any text. RGBA colours only affect the colour, so is not inherited.

## RGBA

Use it like this:

```js
  background: rgba(200, 54, 54, 0.5)
```





The four parameters are:

* Red (0–255)
* Green (0–255)
* Blue (0–255)
* Opacity (0–1)

## Opacity

Use it like this:

```js
  opacity:0.5
```





The value is between 0 and 1.

## Browser support
Browser support for RGBA and opacity is reasonable. RGBA works in Firefox, Opera, Webkit and IE9+, also Mobile Safari.

However, and usefully, it works in every browser that supports box-shadow. Box shadows and transparency work very well together.

## Making it work in IE8 with a Gradient Filter

The MS Gradient filter accepts an ARGB value. Set each end of the gradient to the same value to get an alpha-ed background. The downside of using a filter is that it disables text smoothing. IE10 removes support for filters.

A gradient filter looks like this:

```js
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#880000FF,endCol
  orstr=#880000FF);
```





The first two numbers are the alpha value, ranging from 00 to FF. The next 6 numbers are the RGB value with each pair ranging from 00 to FF.




## Transparency Exercise

1. Create a series of overlapping, absolutely positioned divs, and use RGBA values to set their background colours. How pretty, it’s like a stained glass window!
2. Add some text to the boxes, try them out. Note how the text is not alpha-ed down. Nice. This will be the case for any nested elements.
3. Now try the same thing with opacity. Alpha it down to 0.1. Notice how the text fades away.
