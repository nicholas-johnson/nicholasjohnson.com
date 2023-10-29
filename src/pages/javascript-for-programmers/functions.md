---
layout: ../../layouts/Course.astro
title: Functions
seoTitle: JavaScript Function Portability
course: javascriptForProgrammers
updatedAt: 29/10/2023
---

# Functions

In JavaScript all functions are objects. You can pass them around, store them in variables and arrays, and pass them as parameters to other functions.

Create a named function like this:

```js
function sayHello() {
  alert("hello function!");
}
```

## Functions assigned to variables

Because functions are objects, we commonly leave them unnamed and jus assign them to variables:

```js
const sayHello = function () {
  alert("hello function!");
};
```

This might seem strange, but in JavaScript it is totally normal. Functions in JavaScript are datatypes just like numbers, arrays, strings or objects. We can treat them just like any other datatype, assign them to variables, pass them as parameters to other functions, even wrap them in objects and call them methods. In JavaScript, code is data.

Note that I used the keyword `const` to create the `sayHello` variable. This is normal, as usually you won't want to redeclare a variable with a function in it.

## Functions are objects

If I console.log a function, I see that function literal printed to the console:

```js
console.log(sayHello); // prints the function itself, not the return value of the function
```

The console is creating a representation of the function object.

As objects, functions have methods and attributes. I can call

```js
sayHello.toString();
```

and I will see a string representing the function.

## Functions are objects of type Function

I can actually create a function using the Function constructor like so:

```js
const sayHello = new Function('alert("hello function!")');
```

As you can imagine, creating runnable code from a string is a bit of a problem, so many sites block this using a Content Security Policy (CSP).

Being objects, functions can have attributes and even methods of their own:

```js
sayHello.toString(); // prints the content of the function as a string
```

## Calling Functions

If you save a function in a variable, you can call it using braces as you'd expect, like this:

```js
const sayHello = function () {
  alert("hello function!");
};
sayHello();
```

## Passing Parameters

Pass parameters to functions between the braces in the usual way:

```js
const sayHello = function (name) {
  alert("hello " + name);
};

sayHello("Dave"); // alerts 'hello Dave'
```

If you pass too many parameters, additional ones will be discarded.

```js
sayHello("Dave", "Mike", "Dan");
// alerts 'hello Dave'
```

If you pass too few, unassigned parameters will get the value undefined.

```js
sayHello();
// alerts 'hello undefined'
```

## Fat Arrow Functions

Fat arrow functions were introduced a few years back to give us a tighter syntax, and fix a few issues with the `this` keyword that we will get to in a bit. They are sugar for a regular function, with a value of this stored in a closure. More on this later.

A fat arrow function looks like this:

```js
const sayHello = () => {
  alert("hello");
};
```

If my function has only one line, curly braces are optional:

```js
const sayHello = () => alert("hello");
```

If my function recieves exactly one value, I can omit the round braces too:

```js
const sayHello = (name) => alert(`hello ${name}`);
```

A fat arrow function will automatically return the last evaluated value, so you rarely need a return statment:

```js
const sayHello = (name) => `hello ${name}`;

console.log(sayHello("dave"));
```

Fat arrow functions are sugar on top of regular functions, we'll see more on this once we reach the section on closures and `this`.

<div class="exercise">

## Exercise - A Sandwich Calculator

1. Write a function called sandwich calculator. This should accept one value: slicesOfBread
2. The function should return the total number of possible sandwiches based on the amount of slices available, so if there are 10 slices, it should return 5. Test your function with an alert box.
3. Extend your function so it accepts two values, slicesOfBread and slicesOfCheese.
4. It takes two slices of bread and one of cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need an if statement to make this work.

</div>
