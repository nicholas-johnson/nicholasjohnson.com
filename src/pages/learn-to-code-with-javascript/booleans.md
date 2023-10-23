---
layout: ../../layouts/Course.astro
title: An exciting foray into Booleans. What Ho!
seoTitle: How to use Boolean variables in JavaScript
course: learnToCodeWithJavaScript
---

# An exciting foray into Booleans. What Ho!

These values that we're using, true and false, have a special name. They are called Boolean values, named after the wonderful Victorian English mathematician George Boole who first described them. Boolean values are actually the basis for all computing. You may have heard it said that computers use ones and zeros, and it's true. Deep inside, computers are made of vast arrays of switches, which can be either on or off, one or zero, true or false.

![George Boole](/images/george-boole.jpeg)

_George Boole - He looks like a nice sort of chap, a bit like Colin Firth._

The simple operations we carry out on Boolean values, when combined in clever ways, let a computer do all the clever things it's able to do. When you move your mouse pointer, there's a whole cascade of little ones and zeroes bouncing around inside the chips and cables that you will never see.

In the context of JavaScript, Booleans are useful in decision making. Should we do this or that? Should we let the user submit their shopping cart or not. Should this element be clickable or not. Lets have a look at what we can do.

## This AND That

One of the simplest things we can do with Booleans is the "and" operation. It looks like this:

```js
let daytime = true;
let sunny = true;

let canGoOut = daytime && sunny;
```

Here we set a variable called canGoOut. This variable will be true if both daytime and sunny are true.

We can use this in a program like so:

```js
let daytime = true;
let sunny = true;

let canGoOut = daytime && sunny;

if (canGoOut) {
  alert("lets go out!");
}
```

or more simply:

```js
let daytime = true;
let sunny = true;

if (daytime && sunny) {
  alert("lets go out!");
}
```

<aside class="box">

## What's the &&

Wait, what's with the &&? Put simply it's another operator, just like +, -, \* or /. It's a Boolean operator which means it's going to return a boolean value.

&& works like this:

1. Check the left value. If the left value is falsy, stop and return the left value.
2. If the left value is truthy, return the right value

So if I do this:

```js
false && false;
```

I get the left value which is false.

If I do this:

```js
true && false;
```

I get the right value back which is also false.

If I do this:

```js
true && true;
```

I get the right value again, which in this case is true.

This expression can only be true if both values are truthy. More on truthy and falsy values later.

</aside>

<div class="exercise">

## Exercise - this AND that

1. Create an HTML file and linked Javascript file.
2. Enter the daytime && sunny code above and run it.
3. What happens if daytime is not true?
4. What happens if sunny is not true?
5. Add an icecreamTruck variable. Only go out if there's also icecream available. Obviously.

## Answers

```js
let daytime = true;
let sunny = true;
let iceCream = true;

if (daytime && sunny && iceCream) {
  alert("lets go out!");
}
```

</div>

## This OR That

The second useful thing we can do with Booleans is OR. Sometimes we want to be able to say "do something if this other thing is true, OR if this second other thing is true. We do this in Javascript using two vertical bar character ||. For example:

```js
let iFancyIcecream = false;
let youFancyIcecream = true;
let buyIcecream = iFancyIcecream || youFancyIcecream;
```

We can use this in a program like this:

```js
let iFancyIcecream = false;
let youFancyIcecream = true;
if (iFancyIcecream || youFancyIcecream) {
  alert("I am just going to the shop now...");
}
```

## This and that or this

You're getting the idea now, these boolean operators are operators just like any other. As such we can combine them together to make compound expressions:

```js
let cheese = true;
let icecream = true;
let bread = true;
let soda = true;
let littlePotsOfFrenchYoghurt = true;

let iHaveAPicnic =
  (cheese && bread && icecream) || (soda && littlePotsOfFrenchYoghurt);
```

See? I have a picnic if I have cheese AND bread AND icecream; OR if I have soda AND Petit Filou, or somesuch tomfoolery.

George would probably have approved, he looks the type to enjoy a Petit Filou on a hot day.

<div class="exercise">

## Exercise - IceCream

1. Create an HTML file and linked Javascript file.
2. Enter the icecream code above and run it.
3. What happens if I fancy icecream?
4. What happens if you fancy icecream?
5. What happens if neither of us fancies icecream?
6. Add the sunny variable. Only go out if I fancy icecream or you fancy icecream, and it's sunny. You'll need to use some braces here.
7. Add the icecreamTruck variable. Only go out if I fancy icecream or you fancy icecream, and it's sunny and there's an icecream truck nearby.

</div>

## Not That!

Another useful thing we can do with Booleans is Not.

Sometimes we want something to happen if something is not true. For example we might want to display an error if someone has not filled in a field correctly. We say not! in JavaScript using an exclamation mark, like so:

```js
let filledInField = false;
if (!filledInField) {
  alert("Please fill in the field!");
}
```

NOT changes a true to a false and vice versa. If southing is true, make it false. If something is false, make it true.

<div class="exercise">

## Exercise - NOT

1. Create an HTML file and linked Javascript file.
2. Enter the not that! code above and run it.
3. What happens if the field is filled in (the value is true)?

This is something we do a lot in JavaScript, enable buttons on forms when all the values have been entered. It's useful.

</div>

## Equals this ===?

So far and so esoteric. It's all very well setting Boolean values explicitly in our code, but for this to be useful we need to be able to be able to make Booleans from other values. Lets return to our timing example above. Lets say that have a variable called hour, and we want to determine if it's mid-day or not. We might do something like this:

```js
let hour = 12;
let midday = hour === 12;

alert("hey yo, it's midday");
```

Here we're simply saying: if the hour variable is equal to 12, the midday variable is true. In JavaScript === means equal to. That's right, === is also a boolean operator.

<aside class="box">

### == or ===?

In most languages == (double equals) means equal to. In JavaScript === (triple equals) means exactly equals to and == means equal to with type casting.

Type casting is fiddly stuff, and often behaves in unexpected ways. Good JavaScript programmers generally avoid ==.

If you ever see a list of JavaScript fails on Reddit or something, that's mostly == typecasting stuff. Easily avoided by only using ===.

You should use ===.

</aside>

<div class="exercise">

## Exercise - Midday

1. Create an HTML file and linked JavaScript file.
2. Enter the midday code above and run it.
3. What is the value of midday?

</div>

## My dad is bigger > than your dad

We can do other mathematical operations to make Booleans. Here we do one thing if `hour > 12` and another if hour is less than 12.

```js
let hour = 13;
if (hour > 12) {
  alert("after midday");
} else {
  alert("before midday");
}
```

`hour > 12` is an expression that evanlutes to either true or false, depending on whether the hour is indeed greater than 12.

We can combine Boolean operators in all kinds of ways, for example:

```js
let hour = 13;
if (hour > 11 && hour < 14) {
  alert("you could have lunch now.");
} else {
  alert("it isn't lunchtime.");
}
```

<div class="exercise">

## Exercise - Build a little clock

1. Create an HTML file and linked Javascript file.
2. Enter the code above and run it.
3. What is the result?
4. Use else if operators to create a sort of an alert clock that says different things at different times of day.
5. You can use the following code to get the actual time of day: `let hour = (new Date()).getHours();`
6. Hook your clock up to the actual hour of the day. Remember to check back later!

### Answers

```js
let hour = new Date().getHours();

if (hour < 7) {
  alert("Too Early!");
} else if (hour === 7) {
  alert("Breakfast");
} else if (hour === 11) {
  alert("Second Breakfast");
} else {
  alert("Fool of a Took!");
}
```

</div>

<div class="exercise">

## Further Exercise

1. Create a myDadSize variable
2. Create a yourDadSize variable
3. If my dad is bigger than your dad, alert this fact.
4. If your dad is bigger than my dad, alert this also.
5. If both dads are the same size, alert this fact also.

### Answers

The best way to tackle this is with an if / else if / else statement. There are 3 possible results, either one dad is bigger than the other, or they are the same.

```js
let myDadSize = 12;
let yourDadSize = 13;
if (myDadSize > yourDadSize) {
  alert("My dad is the biggest (of course).");
} else if (myDadSize < yourDadSize) {
  alert("Oh, your dad is the biggest.");
} else {
  alert("Our dads are the same size");
}
```

</div>

Onwards and ever upwards! Did I mention you're doing a brilliant job? Next up is Loops!
