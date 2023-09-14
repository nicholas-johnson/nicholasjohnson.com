---
layout: ../../layouts/Course.astro
title: Maths Operators - Doing Sums
seoTitle: Learn to Program with JavaScript - How to do maths with JavaScript
course: learnToCodeWithJavaScript
---

# Maths Operators - Doing Sums

JavaScript is great for maths. Lets say we need to know what 3 times 5 is. We can just ask JavaScript:

```js
alert(3 * 5);
```

So handy! You'll never need a desk calculator again. We can also combine maths with our new found knowledge of variables like so:

```js
let slices = 12;
let slicesNeededForASandwich = 2;
let numberOfSandwiches = slices / slicesNeededForASandwich;
alert(numberOfSandwiches);
```

Note the that a forward slash (/) means division.

## Maths characters

The following special characters are used when doing maths in Javascript.

- Addition: +
- Subtraction: -
- Multiplication: \*
- Division: /
- Test for greater than: >
- Test for less than: <
- Test for equal to: ===
- Brackets can be used as in maths to separate a part of the equation. ( )

There are a few more that you might need later, but these will do for now.

## A note on ===

To test for equality in JavaScript we use ===. For example:

```js
10 === 10;
```

this will come out true, because 10 is exactly the same as 10. You can also use == but you shouldn't. == in JavaScript does type conversion. This means that:

```js
"10" == 10;
```

will come out true. The string is equal to the number. This causes all sorts of problems, and most of the time is best avoided. When you see lists of JavaScript fails on the internet, the poster is almost always using ==.

<div class="exercise">

## Exercise: Doing Sums

1. Create an HTML file and linked Javascript file.
2. Output 5 - 2 using an alert box
3. Output 6 \* 9
4. Output 6 \* 9 + 4
5. Output 6 \* (9 + 4)
6. Output (1 + 1) \* (1 + 1)

### Answers

2. alert( 5 - 2 );
3. alert( 6 \* 9 );
4. alert( 6 \* 9 + 4 );
5. alert( 6 \* (9 + 4) );
6. alert( (1 + 1) \* (1 + 1) );

</div>

<div class="exercise">

## Exercise - equality

1. Try this now, alert `1 + 1 === 2`, what do you get?
2. Now alert `5 + 5 === 10` What do you get?
3. What if I were to do this instead: `5 + (5 === 2)`. Whoah, that's weird. Why did you get this result?
4. Now try `5 + (5 === 5)`` - Why did you get this result?

### Answer

The braces force the right part of the expression to be evaluated first. Unlike maths, === is just an operator, the same as + or -. 5 === 2 is false.

`5 + (5 === 2)` is the same as `5 + false`. JavaScript doesn't know how to do this, so it converts the false into zero and gives you `5 + 0` which is `5`

`5 + (5 === 5)` is the same as `5 + true`. JavaScript doesn't know how to do this either, so it converts the true into `1` for "historical reasons" and gives you `5 + 1` which is `6`.

</div>

<div class="exercise">

## Exercise: Sandwich Calculator

1. Create an HTML file and linked JavaScript file.
2. Enter the following code:

```js
let slices = 12;
let slicesNeededForASandwich = 2;
let numberOfSandwiches = slices / slicesNeededForASandwich;
alert(numberOfSandwiches);
```

3. Find out how many sandwiches you can make?
4. You have taken a large job lot of bread, 800 slices in total, and it's starting to go stale. Quickly adjust the code to find out how many sandwiches you can make with all that bread.
5. You decide to make Club sandwiches for a swanky dinner, and you need 3 slices for each. Adjust the code to find out how many sandwiches you can make with those 800 slices?

### Answers

If you have 800 slices, you need to change the value of the slices variable like so:

```js
let slices = 800;
let slicesNeededForASandwich = 2;
let numberOfSandwiches = slices / slicesNeededForASandwich;
alert(numberOfSandwiches);
```

To find out how many club sandwiches we need, all we need to do is change the value of `slicesNeededForASandwich` from `2` to `3`. We will now get the correct answer.

```js
let slices = 800;
let slicesNeededForASandwich = 3;
let numberOfSandwiches = slices / slicesNeededForASandwich;
alert(numberOfSandwiches);
```

</div>

You did it! Horray for maths and Horray for you!

We need to do this sort of thing all the time in JavaScript, whether we're working out the size of a page element, writing a handy little VAT calculator for our online shopping cart, or deciding to increase our spend on Google AdWords.

Now on to functions...
