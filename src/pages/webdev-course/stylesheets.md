---
title: "CSS Stylesheets Exercise"
section: "webdev"
exercise: "stylesheets"
course: "webDevCourse"
layout: ../../layouts/Course.astro
---

So far we have been writing CSS directly on out elements using the style attribute. As you can imagine, this quickly gets tiring, and if you have a large site becomes very difficult to maintain.

If only there was a way to extract all the style rules into a different document shared across our whole site. Then we could update that one document and have all the styles update everywhere all at once.

That's exactly what stylesheets do.

## Exercise 1 - create some HTML to style

First create a folder and index.html file. Add the following:

```html
<html>
  <head>
    <title>Super awesome</title>
  </head>
  <body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
  </body>
</html>
```

Open this file in your browser and preview.

Note the link tag. This is linking an external stylesheet.

## Exercise 2 - Create the CSS

In the same folder, create a file called styles.css. In it write something like this:

```css
p {
  color: grey;
  font-size: 3em;
  text-align: center;
  margin: 2em;
}
```

## Exercise 3 - Link the two together

In the head section of your HTML, right after the closing title tag add a link tag like so:

```html
<link href="styles.css" media="screen" rel="stylesheet" />
```

This will link the CSS file to the HTML file. Refresh your browser and you should see a styled page.

## Exercise 4

Open up your style.css and attempt the following. After every change refresh your browser.

1. The paragraphs are currently grey. Make them blue.
2. Increase the margin on the paragraphs to 5em.
3. Align the paragraphs right.

Jolly good.
