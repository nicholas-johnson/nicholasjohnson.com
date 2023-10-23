---
layout: ../../layouts/Course.astro
title: Froot Loops
seoTitle: Loops in JavaScript
course: learnToCodeWithJavaScript
---

# Froot Loops

So, we've learned most of the major things we need to know in order to program. We're nearly ready to create some cool stuff. There are just a couple more things we need to know before we jump start writing proper programs.

Remember Mrs. Potts and the poor starving children? I wonder what happened with that. Do you think the children were OK? I hope so. We helped Mrs. Potts a lot by giving her a makeSandwich function, but she still needs to call it a lot of times. What if there was an easy way for her to call the makeSandwich function 10 times, 100 times, a million times without writing one more line of code.

Thankfully there is! Enter Loops!

## While Loops - Get them while you can!

A while loop in JavaScript is a type of loop that will keep going while some condition is true. For example

```js
let sandwichesMade = 0;

while (sandwichesMade < 5) {
  alert("Making Sandwich: " + sandwichesMade);
  sandwichesMade = sandwichesMade + 1;
}
```

First we set the number of sandwiches we have made so far:

```js
let sandwichesMade = 0;
```

Then we say to the Javascript engine

```js
while (sandwichesMade < 5) {
  //do something
}
```

This is the loop. It will go round until the condition sandwichesMade < 5 is not true any more. WHILE the condition is true, kindly DO the thing between the curlies, then come chanck again and check again.

Inside the loop we have to remember to do this:

```js
sandwichesMade = sandwichesMade + 1;
```

This increases the value of sandwichesMade. Without this, the loop will go around forever until the page times out or the universe ends.

<aside class="box">

## // Comments in JavaScript

A comment is a note to ourseles or to a future developer. Commenting your code will help you later when you come to make changes. We write a JavaScript comment using double forward slash like this:

```js
//This is a comment
```

We can also write it using a /\* like so:

```js
/* 
  This is a multiline comment.
   See how it spans multiple lines?
   Pretty useful maybe?
*/
```

Comments are ignored by JavaScript, so we can write whatever we like in here. Well commented code is usually considered a good thing.

</aside>

<div class="exercise">

## Exercise - Countdown

1. Create an html file and linked javascript file.
2. Enter the code in the previous section.
3. Run it. What happens?
4. Try to modify your code to make a javascript countdown. Start at 10 and count down to 0.
5. Alert the string "Lift Off Mrs Potts!" when the countdown reaches zero.

### Answer

```js
let i = 10;

while (i > 0) {
  alert(i);
  i = i - 1;
}

alert("Lift off Mrs Potts");
```

To tackle this problem, we need a variable to store the current countdown. Here I have called it i. While i is > 0, we continue to execute the code in between the curly braces, reducing the value of i. When i drops below zero, the loop exits and the lift off line is run.

When the loop finishes, the program continues to the next line and we alert "Lift off Mrs Potts"!

</div>

<div class="exercise">
   
## Exercise - Looping function

1. Create an html file and linked javascript file.
2. Write a function called countdown that accepts a number parameter.
3. When you call the function, it should alert the numbers down to zero, starting at the number passed to it.

### Answers

```js
let countdown = function (i) {
  while (i > 0) {
    alert(i);
    i = i - 1;
  }
};

countdown(35);
```

</div>

<div class="exercise">

## Exercise - infinite loop

Try to write code that counts from zero to infinity, never stopping. You need a condition that always evaluates to true. Hmmm, what is always true?

### Answer

```js
let i = 0;

while (true) {
  alert(i);
  i = i + 1;
}
```

Notice `while true`. A while loop will keep looping over the code in between the braces while the condition is true. True is always true (by definition) so it'll keep going forever.

</div>

## For Loops - for he's a jolly good fellow

The next type of loop we need to know is the for loop. This type of loop is similar to the while loop, but we roll all the various different parts of it up into one line, like so:

```js
for (let sandwichesMade = 0; sandwichesMade < 5; sandwichesMade++) {
  alert("Making Sandwich: " + sandwichesMade);
}
```

This loop says:

- sandwichesMade starts at 0.
- The loop continues as long as `sandwichesMade < 5`.
- At the end of each loop increase `sandwichesMade` by one.

```js
sandwichesMade++;
```

is just shorthand for add one to the `sandwichesMade` variable.

This type of loop wraps up a common looping pattern where we create a variable, check to see if the loop should continue executing, and modify the variable.

<div class="exercise">

## Questions

1. Create an html file and linked javascript file.
2. Enter the code above.
3. Run it. What happens?
4. Try to make 20 sandwiches.
5. Change the code to make sandwichesMade start from 10 and count down to zero.

### Answer

```js
for (let sandwichesMade = 10; sandwichesMade > 0; sandwichesMade--) {
  alert("Making Sandwich: " + sandwichesMade);
}
```

</div>

Well done, you're doing really nicely! In the next section we'll look at Arrays and Functional Loops, then Objects, and that's it, those are all the fundamentals of Code!
