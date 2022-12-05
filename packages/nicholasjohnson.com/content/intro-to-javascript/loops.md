---
title: 'Loops'
section: 'javascript'
course: 'intro-to-javascript'
exercise: 'loops'
layout: 'exercise'
date: '2022-11-30 19:04:36'
---

#loops

# Loops

So, we've learned most of the major things we need to know in order to program. We're nearly ready to create some cool stuff. There are just one more thing we need to know before we jump into section two. Loops.

Remember Mrs. Potts and the poor starving children? I wonder what happened with that. Do you think the children were OK? I hope so. We helped Mrs. Potts a lot by giving her a makeSandwich function, but she still needs to call it a lot of times. What if there was an easy way for her to call the makeSandwich function 10 times, 100 times, a million times without writing one more line of code.

Thankfully there is! Enter Loops!

## While Loops - Get them while you can!

A while loop in JavaScript is a type of loop that will keep going while some condition is true. For example

```js
var sandwichesMade = 0
while (sandwichesMade < 5) {
  alert('Making Sandwich: ' + sandwichesMade)
  sandwichesMade = sandwichesMade + 1
}
```

First we set the number of sandwiches we have made so far:

```js
var sandwichesMade = 0
```

Then we say to the Javascript engine

```js
while (sandwichesMade < 5) {
  //do something
}
```

This is the loop. It will go round until the condition sandwichesMade < 5 is not true any more.

Inside the loop we have to remember to do this:

```js
sandwichesMade = sandwichesMade + 1
```

This increases the value of sandwichesMade. Without this, the loop will go around forever until the page times out.

%aside.box

## // Comments in JavaScript

A comment is a not to ourseles, or to a future developer. Commenting your code will help you later when you come to make changes. We write a JavaScript comment using double forward slash like this:

```js
//This is a comment
```

Comments are ignored by JavaScript, so we can write whatever we like in here.

## Exercise - Countdown

1. Create an html file and linked javascript file.
2. Enter the code in the previous section.
3. Run it. What happens?
4. Try to modify your code to make a javascript countdown. Start at 10 and count down to 0.
5. Alert the string "Lift Off Mrs Potts!" when the countdown reaches zero.

## Exercise - Looping function

1. Create an html file and linked javascript file.
2. Write a function called countdown that accepts a number parameter.
3. When you call the function, it should alert the numbers down to zero, starting at the number passed to it.

## Exercise - infinite loop

1. Try to write code that counts from zero to infinity, never stopping. You need a condition that always evaluates to true. Hmmm, what is always true?

## For Loops - for he's a jolly good fellow

The other type of loop we need to know is the for loop. This type of loop is similar to the while loop, but we roll all the various different parts of it up into one line, like so:

```js
for (var sandwichesMade = 0; sandwichesMade < 5; sandwichesMade++) {
  alert('Making Sandwich: ' + sandwichesMade)
}
```

This loop says. sandwichesMade starts at 0, the loop continues until sandwichesMade < 5, and at the end of each loop increase sandwichesMade by one.

```js
sandwichesMade++
```

is just shorthand for add one to the sandwichesMade variable.

**Questions**

1. Create an html file and linked javascript file.
2. Enter the code above.
3. Run it. What happens?

## Answers

### While Loops - Get them while you can!

To tackle this problem, we need a variable to store the current countdown. Here I have called it number. While number is > 0, we loop, reducing the value of number. When number drops below zero, the loop exits and the lift off line is run.

note that number-- decrements the value of number by one.

```js
var number = 10
while (number > 0) {
  alert(number)
  number--
}
alert('Lift off Mrs Potts')
```

**More Answers**

This code is similar to the above, except we have wrapped it up in a function.

```js
var countdown = function (number) {
  while (number > 0) {
    alert(number)
    number--
  }
}

coundown(10)
```

**Even More Answers**

We can make an infinite loop using a while loop. We simply say while(true). True is always true by definition.

```js
var number = 0
while (true) {
  alert(number)
  number++
}
```