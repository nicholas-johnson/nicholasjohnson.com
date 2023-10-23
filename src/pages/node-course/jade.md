---
title: Pug
course: nodeCourse
slug: jade
layout: ../../layouts/Course.astro
---

# Pug

Pug is an HTML templating language that's extremely popular in Node circles. You make fewer keystrokes to get the same result, which makes you a more productive coder. This is very Node.

## First Install with NPM

To use Pug you must install the package. Do this with NPM.

```js
  npm install pug
```

## Elements

The first word on any line is the html element:

```js
  h1 Hello there
```

Compiles to:

```html
<h1>Hello there</h1>
```

## Nesting elements

We can nest elements inside each other using indentation:

```js
  article
    h1 Hello
    p Hey!
```

Compiles to:

```html
  <article>
    <h1>Hello</h1>
    <p>Hey!</h1>
  </article>
```

## Attributes

We can create attributes:

```js
  a(href='http://www.lolcats.com/') Lol cats
```

Compiles to:

```html
<a href="http://www.lolcats.com/">Lol cats</a>
```

## Variables

We can include variables in our template using an equals sign like this if we just have one value:

```js
article;
h1 = titleContent;
```

or using curly brace interpolation like this if we want to embed content into text:

```js
  html
    head
      title myWebsite.com - \#{titleContent}
```

## Compiling Pug

We compile Pug using the pug package. First we install it with npm:

```js
  npm install pug
```

Now we can compile our template. This gives us a template function:

```js
var pug = require("pug");
var template = pug.compile("h1 hello #{name}");
```

Or from a file:

```js
var template = pug.compileFile("./path/to/template.pug");
```

Finally we can compile our template into HTML, passing it an object full of include variables, like so:

```js
template({ name: "Davie Skitch Mulldoon" });
```

## Exercise - Using Pug

Modify your Node server to use Pug. Instead of outputting a file directly, use Pug to compile a template and return the result.

## Layout files

We can create layout files that will wrap our content in a standard wrapper. This saves typing.

Assume an index.pug file like this. Notice that we are declaring a block called content:

```js
  extends ../layout

  block content
    h1= title
    article= content
```

We can create a layout file like this. Note here that we are including a block called content:

```js
  html(lang='en')
    head
      title= title
    body
      header
        h1 My Cool Site
      block content
```

## Exercise - Layout

Create a layout file for your application. Have all your views use the same layout.

## Partials

We can also include partials in our layout, for example we might split our layout into several smaller parts to make it easier to work on. Smaller files are generally easier to work with than large ones.

A layout file might look more like this:

```js
  html(lang='en')
    head
      include ./partials/meta
      include ./partials/css
    body
      include ./partials/header
      block content
      include ./partials/footer
      include ./partials/javascripts
```

The includes are always relative to the current directory.

## Exercise - Create a partial

Split your layout file into partials. Create a header partial and a footer partial.

## Further Exercise - Content module (Model?)

Tackle this if you are ahead of the group. We'll look at MVC more later.

It's good practice to separate our content from the code that renders our content. Create a module that holds your content. We should be able to require the module, then get an object containing the content out of it and pass this to the view.

I'll leave the details up to your discretion.
