---
layout: ../../layouts/Course.astro
title: Welcome to JavaScript
seoTitle: Learn to Program with JavaScript - What's so great about JavaScript?
course: learnToCodeWithJavaScript
---

# Hello There & Welcome to JavaScript!

Hello there new programmer! If you've never programmed before, you're in for a treat because this is the book for you! In this book, we're going to be covering the very basics of JavaScript from the ground up. These are the fundamentals that you will need to know to do the fancy stuff that you're probably quite keen to get started on shortly.

So allow me to say:

**Welcome new programmer, to a whole world of wonder!**

Coding is like Hobbits. You can learn all that there is to know about its ways in a month and yet, after a hundred years, it can still surprise you.

This book will teach you the _ways_ of code. The fundamental pieces that we all use. It won't teach you how to make a Twitter clone in thirty minutes, instead it wil teach you about variables, loops, functions and arrays, the foundational building blocks thateverything we do is built upon.

Computer languages are all pretty similar. Learn one and you're well on the way to learning more than one. What differs is the syntax and the culture. Luckily JavaScript has lovely syntax, and an awsome culture full of brilliant folks who will go out of their way to welcome you into the fold.

We were all new coders once. With time and patience you will become the master, and then it will be down to you to welcome new coders, just as I was welcomed, and now I welcome you.

## JavaScript is everywhere

JavaScript is the most widely deployed language in the world by an order of magnitude.

You will find it:

- In your web browser (in pretty much every laptop, desktop and smartphone in the world, probably more than once)
- In a mobile webview powering the apps on your smartphone - many mobile apps are built using JavaScript, including Facebook, Slack, Discord and many others.
- On your server - NodeJS provides a complete and powerful web server used by some of the biggest companies in the world, companies like Microsoft.
- In your front end development environment - JavaScript powers Webpack, Rollup, Yeoman, Bower, SASS and many other tools front end developers rely on.
- In desktop apps - like VSCode, Slack, and many others.

You can use JavaScript to build pretty much anything you like.

# JavaScript is rather good (which is lucky really)

Bjarne Sandstrup once said, _"There are only two kinds of languages: the ones people complain about and the ones nobody uses."_

JavaScript is often misunderstood. It is different to most other languages out there. This is because JavaScript comes from a different evolutionary branch than most other languages.

Most modern languages descend from C. JavaScript is actually a dialect of LISP with C syntax layered over it. It is a rare and beautiful fusion, but because it is different, some people misunderstand it, and this misunderstanding sometimes leads to hatred. This is a mistake because JavaScript is wonderful.

Its heart is rooted in a love of freedom. Many other languages will try to lock you into a **paradigm**. They will say to you, _"This is how you should code. Do it this way and you will be safe."_ JavaScript does no such thing, it happily supports any programming paradigm you want to throw at it. More on this later.

Are you a maths person who likes functions and mathematical purity? Maybe you like to think in terms of physical objects? Maybe you like to think in terms of events taking place over time? Do you just want to hack together a script to automate something? JavaScript lets you choose your poison, or mix and match. This is a blessing and a curse, because with freedome comes the potential to make mistakes. You will need to learn different styles of coding to navigate this language.

Don't worry if this makes no sense to you yet, in time it will.

<div class='exercise'>

## Exercise: Saying Hello to JavaScript

This is the first exercise. Exercises are scattered throughout this book, you'll recognise them because they come in a little box. In this exercise, we'll be saying hello to JavaScript. Of course, the JavaScript won't actually hear us saying hello, unless we shout really loud...

You should do these exercises. Coding is like playing an instrument. Reading about it doesn't really help much, you have to actually do the work with your hands.

### Create some HTML

The easiest way to run JavaScript is in a web browser. You just create a web page, then open it in a web browser. The JavaScript will run automatically.

First of all we'll need to make a web page for our script to live in. Open your favourite code editor (VSCode is never a bad choice). Create the following ultra simple html document and save it in a folder. Call it hello.html. Now double click it to open it in a web browser like Chrome or Firefox.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello JavaScript</title>
  </head>
  <body></body>
</html>
```

### Write some Script

Next, create a document to contain your JavaScript. Save it in the same folder as your html and call it hello.js.

```js
alert("Hello JavaScript, your new best friend!");
```

### Hook them up

Now, we need to link the two together. In the head of your HTML document add a script tag like so:

```html
<script src="hello.js"></script>
```

(Note that the script tag cannot be self closing. You have to explicitly close it with an `</script>` tag or it will fail.)

### What do you get?

Now, referesh the page in your browser. You should see a handy little box pop up welcoming you to JavaScript!.

<aside class="box">

Tip. To open the file in a web browser, you can double click it in your Explorer or Finder window, or you can open Firefox or Chrome and choose File -> open from the menu.

</aside>

### Exercise - more alerts

Extend the code so it pops up two alerts.

</div>

## So what did we do here?

1. We created an HTML and a JavaScript file, and linked them together.
2. We used the built in alert function to pop up little box containing the text "Hello JavaScript, your new best friend!".

Well done! You just created your first JavaScript program!
