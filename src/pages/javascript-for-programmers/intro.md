---
layout: ../../layouts/Course.astro
title: Hello JavaScript
seoTitle: Welcome to the JavaScript for Programmers course!
course: javascriptForProgrammers
date: 2023/10/09
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
- Events are everywhere. The whole thing is asynchronous.
- Variable scope is slightly different.
- Trees are really easy to create and manage.
- Incredible amount of freedom - all coding styles are supported

## Issues with JavaScript

- A slightly confusing type cooercion system creates a LOT of edge cases. Typically not a problem provided you follow a couple of simple rules.
- Weak typing, fixed with TypeScript if necessary.
- Incredible amount of freedom - it's easy to make a mess if you didn't read the manual.

Now let's start the course.

## Executing JavaScript

We execute JavaScript in a browser by linking to it. with a script tag, like so:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body></body>
</html>
```

Typically we link to an external file, though we can include JavaScript directly between the <script></script> tags.

<div class="exercise">

## Exercise - Hello World

1. Create a folder in which to work.
2. Create a new HTML file in a text editor. Call it index.html.
3. Create a JavaScript file in a text editor. Call it script.js.
4. Put an alert in the script file, like this: alert('Hello world');
5. Use a script tag to link the JavaScript file into the HTML file
6. Open the HTML file in a browser. See the alert?
7. Extend the code so it pops up two alerts.

</div>

## Variables

Variables in JavaScript are global by default. This is because JavaScript is designed to be easy for non-programmers to use, and non-programmers might not understand about variable scope.

If I type

a = 12;

I get a global variable. This is dangerous.

As a real programmer you should always initialize your variables correctly using either the var, let or const keyword:

```js
let a; // creates the variable in the current scope
a = 12; // stores a value in the variable
```

You can create and assign a variable in the same line:

```js
let a = 12;
```

## Single Global Scope

JavaScript has a single global scope which any script can write to. You should avoid creating global variables wherever possible, or sooner or later you will get a conflict.

You may have multiple scripts on the page. Some of these might be advertiser scripts which you don't control. Avoid putting variables in this messy space wherever possible.

## Var, Let and Const

The var keyword creates a variable local to the current function. It is the original way of creating variables in JavaScript. Most people avoid it these days, although it does have some interesting properties, particularly to do with closeure. More on this later.

```js
function x() {
  if (true) {
    var a = 12;
  }
  console.log(a); // works
}
```

See how all variables declared with var are local to the function? This seems weird but tells us some useful things about the nature of the JavaScript call stack. We will return to this later.

The let keyword creates a variable local to the current block:

```js
function x() {
  if (true) {
    let a = 12;
    console.log(a); // works
  }
  console.log(a); // fails
}
```

This is a far more standard approach. We use let in preference to var in modern JavaScript.

Finally we have const. Const creates a constant. We use const a lot, whenever we want a variable that won't change.

```js
function x() {
  if (true) {
    const a = 12;
    console.log(a); // works
    const a = 12; // fails
  }

  const a = 12;
  console.log(a); // works
  const a = 12; //fails
}
```

## Variables a fully Polymorphic

Variables are fully polymorphic, you can store anything you like in any variable, there is no type checking. JavaScript is weekly typed.

```js
let a;

a = 12;
a = "Hello JavaScript!";
```

This is different to a language like Java where variables can only store one type of thing.

Having weekly typed variables is appropriate for JavaScript. It makes the language more accessible to people who may not be good at coding. JavaScript is the democratic language of the web.

However weak typing makes it harder for large teams to work together, and it makes it hard for an IDE to do code completion. If you want typing, TypeScript is available, which adds type annotation to the language.

# Strings

Strings in JavaScript are arrays of characters. You define them using single or double quotes, or backticks:

```js
"Hi there";
"Hi there";
```

Double quoted strings allow escape characters. Single quoted strings are literal:

```js
  "Hi \\n "there";
```

You should prefer single quoted strings unless you need escape characters as they are slightly more performant.

## Concatenation

You can concatenate strings using the + character:

```js
"Hello " + "There";
```

## Backtick Strings

Backtick strings allow newlines and embedded code:

```js
const name = "dave"`
hi ${name}
How are you doing today?
`;
```

Backtick strings are nice and very useful.

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
"Hello".replace("e", "a");
// "Hallo"
```

You can also use a regular expression:

```js
"Hello".replace(/l/g, "w");
// "Hewwow"
```

<div class="exercise">

## Exercise - String Concatenation

1. Create a variable called greeting. Store the value 'hello' in it.
2. Create a variable called name. Store the value 'world' in it.
3. Use your variables to alert "hello world"
4. Use a couple of regex to change the output to "heyyy wyryd"

</div>

# Numbers

All numbers in JavaScript are floating point. There are no integers, longs, doubles, etc. This keeps things simple for new developers, but you need to be aware of this if you are writing code to deal with financial transactions.

Typically it's not an issue.

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
