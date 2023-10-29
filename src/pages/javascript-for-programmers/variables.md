---
layout: ../../layouts/Course.astro
title: Variables
seoTitle: JavaScript Variables and Scope with Let, Const and Var
course: javascriptForProgrammers
---

## Variables

Variables in JavaScript are global by default. This is because JavaScript is designed to be easy for non-programmers to use, and non-programmers might not understand about variable scope.

If I type:

```js
a = 12;
```

I get a global variable. This is dangerous.

As a real programmer you should always initialize your variables correctly using either the var, let or const keyword:

```js
let a; // creates the variable in the current scope
a = 12; // stores a value in the variable
```

You can create and assign a variable in the same line:

```js
let a = 12;
```

## Single Global Scope

JavaScript has a single global scope which any script can write to. You should avoid creating global variables wherever possible, or sooner or later you will get a conflict.

You may have multiple scripts on the page. Some of these might be advertiser scripts which you don't control. Avoid putting variables in this messy space wherever possible.

## Var, Let and Const

The var keyword creates a variable local to the current function. It is the original way of creating variables in JavaScript. Most people avoid it these days, although it does have some interesting properties, particularly to do with closeure. More on this later.

```js
function x() {
  if (true) {
    var a = 12;
  }
  console.log(a); // works
}
```

See how all variables declared with var are local to the function? This seems weird but tells us some useful things about the nature of the JavaScript call stack. We will return to this later.

The let keyword creates a variable local to the current block:

```js
function x() {
  if (true) {
    let a = 12;
    console.log(a); // works
  }
  console.log(a); // fails
}
```

This is a far more standard approach. We use let in preference to var in modern JavaScript.

Finally we have const. Const creates a constant. We use const a lot, whenever we want a variable that won't change.

```js
function x() {
  if (true) {
    const a = 12;
    console.log(a); // works
    const a = 12; // fails
  }

  const a = 12;
  console.log(a); // works
  const a = 12; //fails
}
```

## Variables a fully Polymorphic

Variables are fully polymorphic, you can store anything you like in any variable, there is no type checking. JavaScript is weekly typed.

```js
let a;

a = 12;
a = "Hello JavaScript!";
```

This is different to a language like Java where variables can only store one type of thing.

Having weekly typed variables is appropriate for JavaScript. It makes the language more accessible to people who may not be good at coding. JavaScript is the democratic language of the web.

However weak typing makes it harder for large teams to work together, and it makes it hard for an IDE to do code completion. If you want typing, TypeScript is available, which adds type annotation to the language.
