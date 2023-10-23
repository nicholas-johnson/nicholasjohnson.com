---
title: "CSS Style Exercise"
section: "webdev"
exercise: "style-attributes"
course: "webDevCourse"
layout: ../../layouts/Course.astro
---

# Style attributes

We define the look of our web page using CSS. The best way to apply styling to a page is using a separate CSS stylesheet, which defines all the rules for our site. We'll get to this shortly.

We can however apply styles to individual elements on a page. Say we have a paragraph, like this:

```html
<p>Let's make it bigger and redder!</p>
```

We can make it bigger with a simple style attribute like so:

```html
<p style="font-size:30px">Let's make it bigger and redder!</p>
```

If we wish to apply some more rules we can do so by separating them with a semi-colon, like so:

```html
<p style="font-size:30px; color: red;">Let's make it bigger and redder!</p>
```

<aside class="box">

## Inline styles vs. Stylesheets

This is a nice simple way to add a little styling onto a page. It's called an inline style, and it's probably the quickest way to get started.

When we are designing for real, we tend to extract these styles into a separate file called a stylesheet. Having our styles separate makes it easier to keep everything nice and tidy.

More on this soon.

</aside>

Here are some things you can do:

- `color: red;` - make the element red
- `background: yellow;` - set the background to yellow
- `font-size: 2rem;` - double size font. More on rems later.
  `font-face: sans-serif;` - set the font. You can also give a specific font name like arial or courier.
- `font-weight: bold;` - bold text
- `font-style: italic;` - italic variant
  `border: 1px dotted blue;` - a thin dotted border, solid and dashed are also valid border styles
- `width: 100px;` - set the width of the element to 100px
  `max-width: 100px;` - the element can go up to 100px if it needs to to fit the content
- `min-width: 100px;` - see max-width

<div class="exercise">

## Exercise - Adding some Styling

Use HTML something like this. You can copy and paste this if you like:

```html
<!DOCTYPE html>

<html>
  <head>
    <title></title>
  </head>
  <body>
    <h1>Style attributes are handy</h1>
    <p>
      In a pinch.
      <strong> But be careful not to overuse them! </strong>
    </p>
  </body>
</html>
```

Refer to the CSS cheat-sheet here:

<a href='/css-cheatsheet'>CSS Cheat-sheet</a>

1. Make the h1 big and red.
2. Make the paragraph blue.
3. Add a background colour to the html element.
4. Add a 5 pixed dotted grey border around the body element.
5. Make the strong element purple and twice as big.
6. Set a width on the body of 500px.

</div>
