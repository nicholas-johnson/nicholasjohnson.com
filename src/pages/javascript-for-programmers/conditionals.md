---
layout: ../../layouts/Course.astro
title: Hello JavaScript
seoTitle: Welcome to the JavaScript for Programmers course!
course: javascriptForProgrammers
date: 2023/10/09
preview: "This short course assumes you're already proficient in at least one language. In it, we focus on the tiny soul of JavaScript, a small set of rules, from which everything else logically follows.


Most tutorials skip to the end, they tell you the magic words to type to make a blog or an app. This course doesn't do that, instead we start with the half dozen principles on which the language is founded, and build up to the rest of it. There's actually not very much to know, it's a tidy little language."
---

# Conditionals

JavaScript comes with conditional statements, if, else if and else:

```js
var a = 12;

if (a > 12) {
  alert("a was greater");
} else if (a < 12) {
  alert("a was smaller");
} else {
  alert("a was 12");
}
```

We use these a lot less than we might in other languages, preferring object literals or guard clauses in small functions. They are there though, if you want them.

## == or ===?

In most languages == (double equals) means equal to. In JavaScript `===` (triple equals) means exactly equals to and `==` means equal to with type casting.

Type casting is fiddly stuff, and often behaves in unexpected ways. Good JavaScript programmers generally avoid `==`.

You should use `===`.

<div class="exercise">

## Exercise - Conditional logic

1. Create a little program that tells you if it's the morning, afternoon or night. You can get the hour of the day something like this:

```js
// returns a number between 0 and 24
new Date().getHours();
```

</div>
