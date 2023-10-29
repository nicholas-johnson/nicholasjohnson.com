---
layout: ../../layouts/Course.astro
title: Hello JavaScript
seoTitle: Welcome to the JavaScript for Programmers course!
course: javascriptForProgrammers
updatedAt: 29/10/2023
preview: "This short course assumes you're already proficient in at least one language. In it, we focus on the tiny soul of JavaScript, a small set of rules, from which everything else logically follows.


Most tutorials skip to the end, they tell you the magic words to type to make a blog or an app. This course doesn't do that, instead we start with the half dozen principles on which the language is founded, and build up to the rest of it. There's actually not very much to know, it's a tidy little language."
---

# Hello JavaScript

JavaScript is an unusual language, not like the other languages. Being unusual, it sometimes takes people by surprise. Folks coming from other languages often assume that JavaScript is broken in some way because it doesn't work in the way they expected. In fact, JavaScript is radically internally consistent, it just has some design choices that are different to what you might be used to.

These design choices are still visible today through all the layers. JavaScript is a language that wears it's soul on its sleeve.

<aside class="pullquote">JavaScript is the one language that people think they can use without ever having to learn it. - Doug Crockford</aside>

## This course

This short course assumes you're already proficient in at least one language. In it, we focus on the tiny soul of JavaScript, a small set of rules, from which everything else logically follows.

Most tutorials skip to the end, they tell you the magic words to type to make a blog or an app. This course doesn't do that, instead we start with the half dozen principles on which the language is founded, and build up to the rest of it. There's actually not very much to know, it's a tidy little language.

## Origins of JavaScript

Like any superhero, JavaScript has an origin story. It grew out of the Browser Wars, a time when Netscape and Microsoft were locked in a titanic battle for the internet. The Netscape execs came up with a clever plan to stick it to Microsoft. They would include a little scripting language in their brower so people could do little clocks or mouse trails on their pages "best viewed with Netscape Navigator.

They gave the job to a young guy called Brendon Eich, and said words to the effect of "Give us a scripting language, make it like Java".

Brendon Eich listened to the brief and decided to ignore it. He was a big fan of Lisp, specifically a dialect of List called Scheme, and so he gave them a cut down version of Scheme, with braces and arrows and first class functions, and when he brought it back, the execs said words to the effect of "what the hell is this. Can you take it back and make it look more like Java".

And so he did. He took the little Scheme based language and layered C style syntax over it, with curly braces and semicolons, showed it to the execs, and they said something to the effect of: "This is epic. We'll call it LiveScript. Let's ship it tomorrow!"

And so all was rosy, until the Sun execs turned up. They wanted Java to be the "New Language of the Internet" with Applets (we used to call them craplets) sitting on the page. They said words to the efeect of "What the hell is this? We had a deal, Java was going to be the language of the internet. We are literally going to sue you."

And all was in peril, until Brendon Eich said, almost as a joke, "why don't we call it Java-Script, then we can brand it as a cut down version of Java and people can either use Java or JavaScript depending on what they want to build."

And very surprisingly, everyone thought this was a great idea.

And so we have this interesting hybrid language. It looks like Java, it has Java in the name, but under the hood beats a heart of purest Scheme. This confuses the hell out of people when they first pick it up, because they expect it to work like Java, but nothing could be further from the truth.

It has first class functions, closure is everywhere, it is built from the ground up to be really good at asynchronous tree manipulation, which is exactly what you need when you're making websites. It is it's own thing, and that's OK, as long as you take the time to learn it.

Let's do that now.

## Highlights of JavaScript:

- Radically simple object model. All objects are "sugary hashmaps".
- Prototypical inheritance. Objects inherit directly from other objects via a simple pointer without the need for a class. This gives you a huge amount of freedom in the structures you can create.
- All functions are lambdas. Lambdas are the default.
- All functionas are objects.
- Events are everywhere. The whole thing is asynchronous.
- Variable scope is slightly different. Closure is the default, not the exception.
- Trees are really easy to create and manage.
- Incredible amount of freedom - all coding styles are supported

## Issues with JavaScript

- A slightly confusing type cooercion system creates a LOT of edge cases. Typically not a problem provided you follow a couple of simple rules.
- Weak typing, fixed with TypeScript if necessary.
- Incredible amount of freedom - it's easy to make a mess if you didn't read the manual.
- Radically backwards compatible. Everything that has ever worked still works. This means you need to know what you are doing.

Now let's start the course.

---

# Arrays and Loops

JavaScript comes with an array of looping constructs. We also have functional style loops which we'll get to soon.

## Arrays

We can declare an array using the square bracket syntax, like this:

```js
let a = ["cheese", "ham", "toast"];
```

## Arrays are polymorphic

Arrays are fully polymorphic. You can store anything in them:

```js
let a = [1, "ham", new Date()];
```

## Get the length with .length()

```js
a = [3, 6, 9];
a.length; // 3
a[a.length]; // 9
```

## Arrays are not arrays

Arrays in JavaScript are not like arrays in other languages. They are in fact associative arrays, sometimes called hashmaps or hashes.

They have numerical keys associated with arbitrary values.

This means we can create gappy arrays without filling our computer's memory:

```js
let a = [];
a[0] = 12;
a[10000000] = 13;
alert(a[10]); // undefined
```

However, don't try to alert the array, or the browser will convert it to a very long string.

You can also store a value in an array with a non-numerical key:

```js
let a = ["cheese", "ham", "toast"];
a["condiment"] = "ketchup";
```

While these things are possible, they are not usually recommended as they will take future maintainers by surprise.

## While Loops

A while loop will keep going while some condition is true. For example:

```js
let sandwichesMade = 0;
while (sandwichesMade < 5) {
  alert("Making Sandwich: " + sandwichesMade);
  sandwichesMade = sandwichesMade + 1;
}
```

## For Loop

A for loop is the most efficient type of loop in JavaScript. It looks very similar to classical languages such as C or Java.

```js
people = ["dave", "jon", "mikey"];
for (let i = 0; i < a.length; i++) {
  alert("Making Sandwich for: " + people[i]);
}
```

## For in loop

We also have a for in loop. This is useful for iterating over arrays with non-numeric keys:

```js
a = [];
a[0] = "Hello";
a["name"] = "Dave";
for (i in a) {
  alert(a[i]);
}
```

<div class="exercise">

## Countdown Exercise

1. Create an html file and linked javascript file.
2. Use the Alert function to alert the numbers from 10 down to zero.

## Iteration Exercise

Assume I have an array with non-numeric keys like this:

```js
let petshop = [];
petshop["cats"] = 12;
petshop["dogs"] = 9;
petshop["mice"] = "many";
```

1. Use a for in loop to iterate over this array.
2. Alert out the animal type and quantity for each animal in turn.

## Pizza Exercise

1. Create an array of pizza toppings.
2. Use a for loop to iterate over it.
3. Output a string of the form: "A tasty pizza with ham, cheese and egg"

</div>
