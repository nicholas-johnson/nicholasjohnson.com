---
layout: ../../layouts/Course.astro
title: Numbers
seoTitle: JavaScript Numbers
course: javascriptForProgrammers
---

# Numbers

Numbers in JavaScript are a primitive type. Unlike Strings, they are not objects by default, although you can get a string form of a number if you need one.

All numbers in JavaScript are 64 bit floating point. There are no integers, longs, doubles, etc. This keeps things simple for new developers, but you need to be aware of this if you are writing code to deal with numbers that absolutely need to be integers.

In most circumstances, this is not an issue, but you do need to be aware that very large numbers may be non-consecutive. It's also possible to accidentally end up with a tiny rounding error when dividing numbers that should give a whole number. It is wise to use strings for ids, and to calculate financial transactions in pennies, cents, or some other non-divisibale denomination.

## Conversion

Convert a string to a number using parseInt or parseFloat:

```js
parseInt("123");
```

Convert a number to a string simply by concatenating it with a string, like so:

```js
"" + 123;
```

or by using backticks, like this:

```js
`${123}`;
```

## Object forms

Everything in JavaScript either is an object or can be converted into an object. We create an object from a number using the number constructor, like so:

```js
const x = new Number(12);
x.toFixed(3); // returns "12.000"
```

You will very rarely need to do this, but it says something about the philosophy of JavaScript that even a primite number can be an object if you need it to be

## Infinity

JavaScript has an infinity keyword which can be positive or negative:

```js
1 / 0 === Infinity; // returns true
-1 / 0 === -Infinity; // also true
```

## NaN - Not a Number

You will run into NaN quite a bit if you are using plain JavaScript without type safety. If I do this:

```js
1 / "a"; // NaN
```

I get NaN. Note that NaN does not equal NaN. This is part of the specification and actually makes sense if you think about it. Not a Number doesn't equal anything.
