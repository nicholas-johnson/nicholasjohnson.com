---
layout: ../../layouts/Course.astro
title: Arrays
seoTitle: How to use Arrays variables in JavaScript
course: learnToCodeWithJavaScript
---

# Arrays

Mrs Potts is in trouble. She has been given the job of making Pizza's for the staff room Pizza Party. The head wants cheese and tomato, but the deputy head wants 5 cheese, pepperoni, mushroom and ham. How can she represent all these ingredients in a JavaScript friendly fashion? It's keeping her awake at night.

Thankfully, we can rescue Mrs Potts using Arrays. If a variable is like a bucket, an array is like a rack of buckets, each with a label on it. We can add as many buckets to the rack as we like, and we can put any labels we like on the buckets.

## Making an Array

The simplest way to make an array is to declare it, like so:

```js
const toppings = [];
```

We use square brackets to define an array. This is an empty array.

## Putting things into an array

If we like we can put some things in it:

const toppings = ["ham", "cheese", "parmesan"]
We now have an array containing 3 ingredients. It's a rack of 3 buckets.

## Finding things in an array

Because we haven't declared any bucket names, Javascript has done it for us by giving each bucket a number. This is subtly different to other languages, do take note.

Let's take pull out a bucket:

```js
const toppings = ["ham", "cheese", "parmesan"];
alert(toppings[1]);
```

This will alert the string "cheese". If we want "ham", we need the zeroth bucket, like so:

```js
alert(toppings[0]);
```

This is called zero indexing. The first element is always zero. This actually totally makes sense if you think about it.

## Making Buckets

What if we want to store something at a particular point. Let's do this now:

```js
const toppings = ["ham", "cheese", "parmesan"];
toppings[3] = "little tiny cherry tomatoes";
```

Here we have put another value in toppings, this time in bucket number 3.

We can verify that our array is now longer using `toppings.length``. The dot operator is to do with object orientation, which we will cover later.

```js
alert(toppings.length);
```

...will output the number 4.

## Arrays in JavaScript are a little bit different

JavaScript arrays are different to arrays in most languages. In most languages, array elements are pointed to by a number. In JavaScript, you are free to use a number to point to an element in an array, but you can equally use a string, or a really big number. You're encouraged never to do this, but you can.

Arrays in JavaScript are actually same the datatype that many other languages call a hash table, with numbers for keys.

More on this in the JavaScript for Programmers course.

## Iterating over an array

One of the most common things you will want to do with an array is to do something with each of its values. We can use a for loop for this.

```js
const toppings = ["ham", "cheese", "parmesan"];
for (i = 0; i < toppings.length; i++) {
  alert(toppings[i]);
}
```

Here we loop over each numbered bucket and output it's value. Note that this only works with sequentially ordered buckets.

## Exercise - Arrays

If a variable is like a cup, an array is like a whole rack of cups.

1. Create a function that receives array of pizza toppings. Use a for loop to loop over the array and alert each of the toppings in turn.
2. Change your code so that instead of alerting the toppings, they are appended to a string. You'll need to create a string first outside the loop.
3. Wrap your code up into a sandwich machine that accepts an array of toppings and returns a string representing the pizza.

## For in

The other common way to iterate over an array is using a for in loop, like so:

```js
for (let i = 0; i < toppings.length; i++) {
  alert(toppings[i]);
}
```

Because this is something we do a lot, we have a friendlier way to write this, like so:

```js
for (let i in toppings) {
  alert(toppings[i]);
}
```

This works if our arrays are not sequential, so for example:

```js
const toppings = [];
toppings[10] = "ham";
toppings[45] = "cheese";

for (let i in toppings) {
  alert(toppings[i]);
}
```

<div class="exercise">

## Exercise - Now to help Mrs Potts

That's all very well and good, but what about poor Mrs Potts? Let's write some code that will let her make pizzas with any number of toppings.

1. Write a make_pizza function that accepts an array of toppings.
2. Put a loop in your function that loops over the toppings and makes a string to represent the pizza.
3. Have your function return the string.

### Answers

You should have correctly identified that we needed a loop. Here I am using a for loop. I've added a little extra code to add ampersands between the toppings.

```js
let make_pizza = function (toppings) {
  let pizza = "";
  for (i = 0; i < toppings.length; i++) {
    pizza = pizza + toppings[i] + " ";
    if (i < toppings.length - 1) {
      pizza += "& ";
    }
  }
  pizza += "pizza";
  return pizza;
};
alert(make_pizza(["ham", "cheese", "parmesan"]));
```

</div>

## What do we use arrays for?

In real world coding we use arrays ALL THE TIME!

Arrays are lists. Say you're making a shopping cart, that's an list of items. Say you have a menu, that's a list of links. Say you have a gaming PC, that has an list of parts. Say you have a game. You'll likely have an array of enemies, an inventory, which is an array of things you found, maybe there are bullets, which you'll need to store in a list somewhere.

If variables are buckets, arrays are racks of buckets that you access with a number between square braces. Use them whenever you have a bunch of things.
