---
layout: ../../layouts/Course.astro
title: Putting it all together
seoTitle: Simple JavaScript coding exerices
course: learnToCodeWithJavaScript
---

# Putting it all together

We've now learned pretty much all the fundamentals of JavaScript. You should now be equipped to write some simple programs. Here are a couple you can try. Think of these as Kata, you may find them easy or you may find them surprisingly hard. Either way, persist. Solving actual problems is what makes this stuff stick.

<div class="exercise">

## Exercise - A Sandwich Calculator

You'll need a function, an if statement, and some maths to handle this. The function needs to accept parameters and return a calculated value. Good luck!

1. Write a function called sandwich calculator. This should accept one value: slicesOfBread
2. The function should return the total number of possible sandwiches based on the amount of slices available, so if there are 10 slices, it should return 5. Test your function with an alert box.
3. Extend your function so it accepts two values, slicesOfBread and slicesOfCheese.
4. It takes two slices of bread and one of cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need an if statement to make this work.

Sounds dumb? This morning I worked on a trading platform for a major bank. They wanted to disable the submit button if a set of complex criteria were not met. I used a function and some maths, then set that as the disabled attribute of a button. It's the same thing.

</div>

<div class="exercise">

## Exercise - An Array of Sandwiches

In this one you'll need a loop. I'll leave the choice up to you. You'll need a function that accepts an array, and a bunch of alerts.

Here is an array of requests:

```js
var filling_requests = ["ham", "cheese and cucumber", "humous and mayo"];
```

1. Write a function that accepts an array of requests and alerts the sandwich it is making. You'll need to iterate over the array.
2. Extend your function so that it returns an array or sandwiches, like this:

```js
["ham sandwich", "cheese and cucumber sandwich", "humous and mayo sandwich"];
```

Ridiculous right? This afternoon I worked on passing a set of commodities through to an app as an array, then rendered them in a dropdown. Same deal, just not sandwiches.

</div>

On the next page you'll find some even harder problems as we build out a silly little game.
