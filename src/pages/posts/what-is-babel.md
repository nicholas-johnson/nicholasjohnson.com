---
title: What is Babel, and how will it help you write JavaScript?
tags: javascript, es6
layout: "../../layouts/BlogPost.astro"
date: '2016-04-08 00:00:00'
preview: "Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).


It makes available all the syntactical sugar that was added to JavaScript with ES6 and ES7, including classes, fat arrows, multiline strings, generators, and many more.


You can convert prety much any modern JavaScript features into code that will run on any browser, even the really old ones. This is fantastic news if you need to support older browsers, mobile browsers, Safari, IE11, or anything other than edge Chrome."
---

Babel is a JavaScript **transpiler** that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).

It makes available all the syntactical sugar that was added to JavaScript with ES6 and ESNext, including classes, fat arrows, multiline strings, generators, and many more.

You can convert prety much any modern JavaScript features into code that will run on any browser, even the really old ones. This is fantastic news if you need to support older browsers, mobile browsers, Safari, IE11, or anything other than edge Chrome.

If we want, we can also optionally use it to transpile **TypeScript** into regular JavaScript that will run in a browser. It's also used for **JSX** and **TSX**. If you're writing React, chances are you're already using Babel.

## Installation

Babel comes packaged as an node module. Installation, as you might expect, is via npm:

`npm install babel-cli`

There are plugins for Webpack, Rollup, Gulp, Grunt, VSCode, Sublime, Webstorm, etc. Whatever your development toolchain, Babel can probably slot into it.

<a href='https://babeljs.io/docs/setup/' target:="_blank">See here for setup instructions for your toolset of choice.</a>

## Classes

Old style ES5 JavaScript is class free. Objects inherit directly from other objects, so any object can be the parent (prototype) of any other object.

Any function can be a constructor function, and calling it with the new keyword will yield a new object.

You can read more about this here in the [JavaScript for Smart People course - Object Orientation section](http://nicholasjohnson.com/javascript-for-programmers/object-orientation/)

This is all very cool and JavaScripty, but it understandably makes C# and Java developers a bit antsy. They are used to classical inheritance, so ES6 introduced the class keyword. This lets us define functions which can only be used as constructors and handle the prototype chain.

A class, as we all know, is a special cookie cutter object that can only be used to define other objects. This is a special case of prototypical inheritence. We limit ourselves to only creating objects from functions that we have specifically decided should be used as such, and get a friendly syntax.

## Classes in Babel

An ES6 class looks like this:

```js
class Person {}
const dave = new Person();
```

If we run it through Babel with an ES5 target we simply get a constructor function, plus a little decoration:

```js
"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function Person() {
  _classCallCheck(this, Person);
};

var dave = new Person();
```

We have our Person function, which can be used as an old-school prototypical constructor. We also get a little bit of safety checking with the \_classCallCheck function.

The \_classCallCheck function is called inside the Person constructor, and will throw an error unless the Person function is being treated as a constructor function.

## Multiline Strings

ES6 also introduced a sugary way of defining strings. The backtick symbol (` (bottom left on your Macintosh keyboard)) lets you create multiline strings. This is especially helpful when defining templates in JavaScript. Here's a simple HTML template:

```js
const template = `
  <div>
    <h1>hello {{name}}</h1>
  </div>
  `;
```

In Babel, this compiles to:

```js
var template = "\n  <div>\n<h1>hello {{name}}</h1>\n  </div>\n  ";
```

## Fat Arrows

Fat Arrows give us a nice syntax for defining anonymous functions with a bound value of `this`.

We can write this:

```js
(x, y) => {
  return x + y;
};
```

Babel gives us this:

```js
(function (x, y) {
  return x + y;
});
```

Note that this function has not been called. I could save it to a variable, or pass it as a parameter to a callback or promise.

If I want to call the function immediately, I could do this:

```js
((x, y) => {
  return x + y;
})(1, 2);
```

which yields this:

```js
(function (x, y) {
  return x + y;
})(1, 2);
```

## Fat arrows with exactly one parameter

When we have exactly one parameter we are allowed to omit the braces preceding the arrow:

```js
(x) => {
  return x + 1;
};
```

yields:

```js
(function (x) {
  return x + 1;
});
```

## Fat Arrows with exactly one line of code

We can go even further than this. If our function contains exactly one line of code (assuming a line ends with a semi-colon) we can omit the curly braces and return statement altogether:

```js
(x) => x + 1;
```

compiles to:

```js
(function (x) {
  return x + 1;
});
```

## Fat arrows in practice

Let's use one of these to output all the elements in an array.

```js
[1, 2, 99].map((num) => console.log(num));
```

gives us:

```js
[1, 2, 99].map(function (num) {
  return console.log(num);
});
```

## Fat Arrows and This (Lexical Scoping)

Don't skip this bit, it matters.

The this keyword is set in JavaScript to be the object immediately preceding the dot when the function is called. This is logical, but often annoying, as it sometimes requires _this_ to be stored in _that_.

If this sounds crazy to you, it is a little. [More on _this_ here](http://nicholasjohnson.com/javascript-for-programmers/meaning-of-this/):

Fat arrows get around this by preserving the current value of this. We call this lexical scoping.

```js
const x = {
  y() {
    () => {console.log(this)}();
  }
}
```

compiles to this:

```js
var x = {
  y: function y() {
    var _this = this;

    (function () {
      console.log(_this);
    })();
  },
};
```

We can see that the value of _this_ has been stored in a variable inside the closure.

## To sum up

ES6 is mainly sugar on top of ES5. The JavaScript under the hood remains the same prototypical, list processing language we are used to. ES6 gives us some nice syntax that ultimately transpiles to fairly plain, ordinary JavaScript.

Some of this sugar is for the benefit of Java/C# folk who initially often find prototypical inheritance confusing.

Some of it, such as fat arrows, gives us a terser, more modern looking syntax, and enhances JavaScript's functional capabilities.

Babel lets us target an earlier version of JavaScript and transpile the latest features into code that will run on them. we can go as far as we want, even down to ES5 if we like. We can write code for Chrome and expect it to run on IE6 if we really want. This is all stuff we used to have to do by hand. Babel does it for us.

## Further Reading

- If you'd like to learn more about modern JavaScript, check out my [Youtube Channel - Senior Dev Time](https://www.youtube.com/c/seniordevtime)
- For more features of Babel and ES6, see here: <a target="_blank" href="https://babeljs.io/docs/learn-es2015/">https://babeljs.io/docs/learn-es2015/</a>
- To have a try right now, have a look at the <a target="_blank" href="https://babeljs.io/repl/#?experimental=false&evaluate=true&loose=false&spec=false&code=var%20a%20%3D%20%7B%0A%20%20b%3A%20function()%20%7B%0A%20%20%20%20var%20c%20%3D%20()%20%3D%3E%20console.log(this.d)%0A%20%20%20%20c()%3B%0A%20%20%7D%2C%0A%20%20d%3A'Hey%20there!'%0A%7D%3B%0A%0Aa.b()">repl</a>
