---
layout: ../../layouts/Course.astro
title: Arrays and Functional Loops
seoTitle: JavaScript Arrays and Functional Loops for Programmers
course: javascriptForProgrammers
unpublished: true
date: 2003/10/09
preview: "Arrays in JavaScript are not like arrays in other languages. They are in fact associative arrays, sometimes called hashmaps or hashes."
---

# Arrays and Functional Loops

JavaScript arrays are a little different than arrays in other languages. Most languages implement arrays as a variable with an offset. To get the nth item in an array, you get the memory lotation of the first item, then add n to that location, and now you have the memory location of the item you want.

JavaScript arrays are not like this. JavaScript arrays are hashmaps, with numeric keys.

Let's take a look:

## Array declaration

We can declare an array using the square bracket syntax, like this:

```js
let a = ["cheese", "ham", "toast"];
```

## Arrays are polymorphic

Arrays are fully polymorphic. You can store anything in them:

```js
var a = [1, "ham", new Date()];
```

Get the length with arr.length()

```js
a = [3, 6, 9];
a.length; // 3
a[a.length]; // 9
```

## Arrays are not arrays

Arrays in JavaScript are not like arrays in other languages. They are in fact associative arrays, sometimes called hashmaps or hashes.

They have numerical keys associated with arbitrary values.

This means we can create sparse arrays without filling our computer's memory:

```js
var a = [];
a[0] = 12;
a[10000000000] = 13;
console.log(a[10]);
```

Don't try to output the array, or the browser will convert it to a very long string which might actuall take down your browser!

You can also store a value in an array with a non-numerical key:

```js
var a = ["cheese", "ham", "toast"];
a["condiment"] = "ketchup";
```

This is totally allowed but definitely not encouraged. It's possible becasue arrays are just regular objects, and in JavaScript, all objects are sugary hashmaps. More on this later.

## Looping constructs

We have all the standard looping constructs you'd expect, but we rarely use them outside of leetcode. This is because we prefer to use the functional loops that come as part of Array.Prototype.

Let's look at the regular looping constructs first:

## While Loops

A while loop will keep going while some condition is true. For example:

```js
var sandwichesMade = 0;
while (sandwichesMade < 5) {
  alert("Making Sandwich: " + sandwichesMade);
  sandwichesMade = sandwichesMade + 1;
}
```

## For Loop

A for loop looks very similar to classical languages such as C or Java.

```js
people = ["dave", "jon", "mikey"];
for (var i = 0; i < a.length; i++) {
  alert("Making Sandwich for: " + people[i]);
}
```

## For in loop

We also have a for in loop. This is useful for iterating over gappy arrays with non-contiguous keys, or for iterating over objects. It basically iterates over an object's keys, returning the values. It's cool, but rarely used:

```js
a = [];
a[0] = "Mikey";
a[12] = "Davey";
a[99] = "Stuey";

for (i in a) {
  alert(a[i]);
}
```

## Functional Loops

Functional loops are the type of loop we use the most in JavaScript. Functional loops are encapsulated within the Array itself. Instead of writing our own looping code, we pass an function to the Array, and the Array itself takes care of calling that function on every array element.

This means that the looping code is encapsulated. All we write is the function that will be applied to each element.

## forEach Functional style loops

A functional loop leaves the iteration implementation up to the object itself. We pass a function to tha array, then the array calls this function for each element.

```js
["Mikey", "Stuey", "Davey"].forEach((name, i) => {
  console.log(name, i);
});
```

We passed the function:

(name, i) => {
console.log(name, i);
}

to the array.forEach method. This methos then called this function three times, passing it the three names, an also i, which is the key, 0, 1, 2.

## Exercise - Lunar Countdown

Simple one here. Use the alert function to alert the numbers from 10 down to zero.

When you reach zero, alert "Blast Off!"

Remember to lint your code.

## Iterate with a for loop

Assume I have an array of products in my shop, like this:

```js
products = ["Cats", "Cheese", "Spanners", "Lemons", "Candyfloss"];
```

Use a for loop to iterate over this and console.log the products.

## Extension - Use a functional loop

Repeat the above exercise, but use a functional loop.

## Harder Exercise - Capitalise every element

Write a short function to capitalise every element of the array of strings.

You must use the Array map function and the String uppercase function.

[Have a look at the map function here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
