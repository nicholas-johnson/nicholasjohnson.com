---
layout: ../../layouts/Course.astro
title: How to Run JavaScript Code
seoTitle: How to run JavaScript code in a browser, or with Node
course: javascriptForProgrammers
---

# How to run JavaScript

We can execute JavaScript code in two ways:

1. In a browser
2. In a headless runtime like Node or Deno.

If we run it in a browser, we can make a web page and have access to the DOM. If we run it in Node, we can build a command line or desktop app.

## Running JavaScript in a browser

We execute JavaScript in a browser by linking to it. with a script tag, like so:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body></body>
</html>
```

Typically we link to an external file, though we can include JavaScript code directly between the <script></script> tags and it will be run right away.

If we make a JavaScript file called script.js and pop it in the same folder, it will be executed. A simple Hello World looks something like this:

```js
let name = "JavaScript";
alert(`hello ${name}`);
```

It's important to remember that when we put JavaScript on our page, the code we linked to is executed right away before the rest of the page is loaded. This is important if your code needs to access the DOM. It might not be loaded yet.

It's also important to note the `</script>`. Unlike most tage, script tags cannot be self closing. It's just one of those browser ideosyncrasies that opten trips new coders.

In practice, this means you need to type:

```html
<script src="script.js"></script>
```

not

```html
<script src="script.js" />
```

To run the code, just refresh the page.

<div class="exercise">

## Exercise - Hello World

1. Create a folder in which to work.
2. Create a new HTML file in a text editor. Call it index.html.
3. Create a JavaScript file in a text editor. Call it script.js.
4. Put an alert in the script file, like this: `alert('Hello world')``;
5. Use a script tag to link the JavaScript file into the HTML file.
6. Open the HTML file in a browser. See the alert?
7. Close the alert. Press refresh. The code runs again.
8. Extend the code so it pops up two alerts.

</div>
