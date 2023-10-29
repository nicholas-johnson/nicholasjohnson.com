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

It's also important to note the `</script>`. Unlike most tage, script tags cannot be self closing. It's just one of those browser ideosyncrasies that often trips new coders. It's an old standard that is now too dificult to change.

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

## The console

If you are running your code in a browser, you will want to be using the developer console. The keyboard shortcut for opening the developer console varies between platforms, but typically you can right click and choos 'inspect' from the context menu. From here you can select the console or sources tab. The console shows you everything

### console.log

To write to the console from your code, use the console.log method. This is excellent for debugging.

console.log('Hello')

Console.log will accept any number of items and any datatype. If you pass it objects and arrays, the console will format these nicely.

We also have console.error, console.info, and a variety of others that will change the formatting of the output. You can change the log level of your console to see different levels of error.

### debugger

If you drop the debugger keyword into your JavaScript file somewhere and execute the code, the console will freeze at that breakpoint allowing you to inspect variables. This is an excellent way to debug a running application. You cn add additional breakpoints in the sources tab by clicking to the gutter to the left of the line number.

Be sure to remove debugger statments before shipping your code.
