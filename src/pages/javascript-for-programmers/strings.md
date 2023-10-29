---
layout: ../../layouts/Course.astro
title: Strings
seoTitle: JavaScript Strings
course: javascriptForProgrammers
---

# Strings

Strings in JavaScript are arrays of characters. You define them using single or double quotes, or backticks:

```js
"Hi there";
"Hi there";
```

Bothe double quoted and single strings allow escape characters:

```js
  "Hi \\n "there";
```

The choice of quote mark style is left up to you.

## Concatenation

You can concatenate strings using the + character:

```js
"Hello " + "There";
```

It is sometimes useful to compose a string from an array, like so:

```js
["parts", "of", "a", "url"].join("/");
// returns 'parts/of/a/url'
```

## Backtick Strings

Backtick strings allow newlines and embedded code:

```js
const name = "dave"`
hi ${name}
How are you doing today?
`;
```

Backtick strings are extremely useful for a lot of things.

## Strings as arrays

Strings act like arrays. Access a part of a string using the square brace syntax like so:

```js
"Hello there"[0]; // returns "H"
```

Note that although strings look like arrays, they are not arrays, and don't give you the full array API.

## Handy functions

You can convert a string into an array using the split function:

```js
"Hello".split("");
// ['H', 'e', 'l', 'l', 'o']
```

You can join the array back up again using the join function:

```js
["H", "e", "l", "l", "o"].join("");
// "Hello"
```

If you want to reverse a string you can split it, reverse the array, then join them back together again:

```js
"Hello".split("").reverse().join("");
// "olleH"
```

You can replace a value in a string using the replace function:

```js
"Hello".replaceAll("l", "w").replaceAll("e", "a");
// "Hawwo"
```

You can also use a regular expression:

```js
"Hello".replace(/l/g, "w");
// "Hewwo"
```

<div class="exercise">

## Exercise - String Concatenation

1. Create a variable called greeting. Store the value 'hello' in it.
2. Create a variable called name. Store the value 'world' in it.
3. Use your variables to alert "hello world"
4. Use a couple of regex to change the output to "heyyy wyryd"

</div>
