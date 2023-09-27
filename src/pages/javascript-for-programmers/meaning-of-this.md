---
layout: ../../layouts/Course.astro
title: Meaning of This
seoTitle: How does This work in JavaScript?
course: javascriptForProgrammers
---

# This

In most other languages, `this` is a keyword that refers to the object you are currently operating inside. You might make a class with a method, instantiate it to make an object, and then refer to attributes of that object from within that method using `this`.

JavaScript has a fundamentally different implementation of `this` which is logical, but which can be very confusing for new coders.

You will remember earlier that JavaScript has function portability. All functions are Objects. You can take then, assign them to a variable, whop them into objects, put them in the global scope, pass them as parameters. They are a data type just like any other.

This is a special variable in JavaScript. It is instantiated when you call a function, and it's value will change depending on how you call the function.

## This in the global scope

If we open a console and simply type this, we get back "window".

```js
console.log(this);
//Window
```

The default value for this is the global scope. If we do nothing else, `this` will **be** the global scope. I'll say that again. _If we do nothing else `this` will **BE** the global scope._ Not in the global scope, it will literally be the global scope.

One of the main reasons we introduced classes and ES6 modules was to get away from this behaviour. It is dangerous, because if you call a function the wrong way, you can suddenly be creating global variables. It's not typically an issue with modern code, as we will see later.

<aside class="box">

## What is the global scope in JavaScript?

In most languages, the global scope is some sort of nebulous container for global variables that the langauge manages for you. In JavaScript, the global scope is an Object. In the browser, this object is called Window. All global variables are attributes of Window. If you create an attribute of Window, you create a global variable.

It can be very helpful to think of all functions as having a secret Scope object that holds the local variables. If we think about it this way, closure makes a lot of sense, since, in this mental model, the function is an object that has a scope attribute, and as long as that function persists, so will its scope.

You don't get access to any other Scope object, but I have foiund this to be a helpful way to think about things.

</div>

## This within a function

Likewise, the value of this within a global function will also be the global scope:

```js
let a = function () {
  console.log(this);
};
a();
// Window
```

## This in an object

If we are calling a function as an attribute of an object, this is set to that object. This is always the object we are operating inside of.

The simple heuristic is that this is the object immediately preceding the dot.

```js
let car = {
  speedUp: function () {
    console.log(this);
  },
};

car.speedUp();
// outputs the car

let speedUp = car.speedUp;
let speed = 0;

speedUp();
// outputs the global scope object Window

let bus = {
  speedUp: car.speedUp,
};

bus.speedUp();
// outputs the bus
```

## This in a closure

People often confuse this. The value of this is related to JavaScript as an object oriented language. It is not affected by the closure.

```js
var fnc = function () {
  var inner_fnc = function () {
    console.log(this);
  };
  inner_fnc();
};
fnc();
// Window
```

## Setting this with apply

We can also manually set the value of this to any value we like. This trick is employed by several frameworks to make your life easier, but it's not a trick you will often use in day to day coding unless you are doing clever. You should try to keep apply hidden, it's a bit hacky.

For example, jQuery will set the value of this to be the DOM node that received an event. AngularJS will set the value of this to the controller when you call a function on that controller's $scope object.

It's a way of presenting some OOP style behaviour to the end user while taking shortcuts internally.

```js
var myFunc = function () {
  console.log(this);
};

var myObj = {
  test: "cucumbers",
};

myFunc.apply(myObj, []);
// outputs myObj
```

<div class="exercise">

## Exercises - Guess the Value of This

### Question 1

```js
var x = function () {
  console.log(this);
};
x();
```

### Question 2

```js
var x = {
  y: function () {
    console.log(this);
  },
};
x.y();
```

### Question 3

```js
var x = function () {
  console.log(this);
};
var y = {
  x: x,
};
y.x();
```

### Question 4

```js
var x = {
  y: function () {
    console.log(this);
  },
};
var a = {
  b: x.y,
};
a.b();
```

### Question 5

```js
(function () {
  var x = function () {
    console.log(this);
  };
  x();
})();
```

### Question 6

```js
(function () {
  var x = function () {
    console.log(this);
  };
  y = {};
  y.x = x;
  y.x();
})();
```

### Question 7

```js
(function () {
  var x = function () {
    console.log(this);
  };
  x.apply({ a: "b" });
})();
```

### Question 8

```js
(function () {
  var Cat = function () {
    console.log(this);
  };
  var x = new Cat();
})();
```

</div>

<div class="exercise">

## Exercise - Fix the broken code

The following code is broken. There are a few ways it could be fixed, we are going to fix it by storing the value of "this" in a variable which we will call "that".

```js
$(function () {
  var ui = {
    init: function () {
      $("a").click(function () {
        this.showSpinner();
        this.getContent();
      });
    },
    showSpinner: function () {
      console.log("spinning");
    },
    getContent: function () {
      console.log("getting that content");
    },
  };

  ui.init();
});
```

</div>
