---
layout: ../../layouts/Course.astro
title: Closure and Variable Scope
seoTitle: JavaScript Closure and Variable Scope
course: javascriptForProgrammers
---

# JavaScript Closure

Closure is one of those things that looks hard, but it's actually really simple once you understand it. It works like this:

1. Functions are objects and can be declared anywhere.
2. If I declare a function within another function, the inner function has access to the local variables of the outer function.
   Normally when a function exits, all it's local variables are destroyed, but...
3. If I hang on to the inner function in some way, the local variables of the outer function are still needed by the inner function.
   They are still in scope, so they are not garbage collected.

For example:

```js
var outer = () => {
  let a = "A local variable";
  let inner = function () {
    console.log(a);
  };
  return inner;
};

const returnedFnc = outer();
returnedFnc();
```

This is a function that returns another function. When I call outer it makes two local variables, a which holds the string "A local variable", and inner which points to another function. We then return inner, and assign it to the global variable returnedFnc.

The key thing to note here, is that, when I call returnedFnc, the local variable a is no longer in scope, and yet the code still works. This is because the variable a was in scope when I first defined the function inner.

Closure simply means that all the local variables that were in scope when the function was declared continue to be in scope for as long as that function exists.

<div class="exercise">

## Exercise - Watch a Video

This is a tricky thing to explain in words, so I made a video explaining it in code. In the first part of this video, I'll explain what closure is, and in the second half, I'll show you three places where you're probably already using it.

<div class="video-container">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/2cRjcXwsG0I"></iframe>
</div>

For bonus points, feel free to leave a comment and say hello. I always try to reply!

</div>

Why would you want this?

### 1. Event Handlers

JavaScript is asynchronous. This means that events happen at unpredictable times. Network events complete, someone connects to a server, a user clicks a button, submits a form or moves a mouse.

We want to set up functions to handle these events, but these functions will be called later. The only way this is possible is if these functions bring their call-stack with them.

You'll have noticed in the video I created a function to handle the cat click. This function was defined when the code first ran, but it was run when I clicked on the cat – and yet it still worked. All the local variables that were needed to make it work were still in scope for the event handler.

### 2. Self Executing Functions a.k.a Modules

We can convert our code into an Instantly Invoked Function Expression (IIFE) by wrapping it in braces and calling it right away. The function will be called and local variables inside will remain private. Only the published function will be available outside the closure.

In the old days we did this by hand. Nowadays, we have formalised this pattern into CommonJS modules or ES6 Modules, and we have tooling like Webpack or Rollup to do the wrapping for us.

Here is an IIFE. Notice the braces at the end of the function? This is a function that runs immediately, creates a closure, then appends a function called inner to a global modules store in the parent scope. As long as modules persists, inner will persist, and will continue to have access to the variable a

```js
const modules = {}(function () {
  var a = "A Local variable";
  var inner = function () {
    console.log(a);
  };
  modules.inner = inner;
})();

modules.inner();
```

<div class="exercise">

## Exercise - Guess the output

For each of the following, try to work out what the output will be. Run the code in the browser console to check your answer.

1.  ```js
    var a = 12;
    (function () {
      console.log(a);
    })();
    ```
2.  ```js
    var a = 5;
    (function () {
      var a = 12;
      console.log(a);
    })();
    ```
3.  ```js
    var a = 10;
    var x = (function () {
      var a = 12;
      return function () {
        console.log(a);
      };
    })();
    x();
    ```
4.  ```js
    var a = 10;
    var x = (function () {
      var y = function () {
        var a = 12;
      };
      return function () {
        console.log(a);
      };
    })();
    x();
    ```
5.  ```js
    var a = 10;
    var x = (function () {
      (function () {
        a = 12; // <<< look carefully at this line.
      })();
      return function () {
        console.log(a);
      };
    })();
    x();
    ```
6.  ```js
    var a = 10;
    (function () {
      var a = 15;
      window.x = function () {
        console.log(a);
      };
    })();
    x();
    ```
