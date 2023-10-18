---
layout: ../../layouts/Course.astro
title: Variables - buckets of fun
seoTitle: How to define variables in JavaScript
course: learnToCodeWithJavaScript
---

# Variables - buckets of fun

Imagine for a moment your program is a bit like a kid on a beach making a sandcastle. The kid is going to need lots of raw materials to make that castle, sand, little shiny rocks, pebbles, flags, water from the sea. This kid isn't like the other children see? This kid is ambitious.

The kid is going to need somewhere to keep all of those raw materials. He's going to need some buckets. Probably a whole bunch of buckets.

Variables are like JavaScript buckets. We can store things in them until we need them later, and we can use the bucket in place of the thing that's inside. We can create them very easily and have as many as we like.

We can tell JavaScript to make a variable just by putting something in one, like this:

```js
let greeting = "Hi there!";
alert(greeting);
```

We have put the string "Hi there!" inside a variable (bucket) called greeting. Then we have alerted greeting. What does this do?

<aside class="box">

## A note on var, let and const

There are quite a few ways to make variables in JavaScript. The three keywords var, let and const are the most common. The difference between then are subtle and we'll cover them in the advanced course.

let and const are relative newcomers to JavaScript, being added in 2015 when JavaScript was already a teenager. We tend to get super passionate about using them. They provide some useful features to do with variable scope, more on this later.

```js
const myName = "Dave";
let myAge = 47;
var myFavouriteColour = "blue";
```

- When you use `var` to make a variable, that variable will be local to its containing function - don't worry if this doesn't make sense yet, we haven't covered functions. Var is the original way to make variables and we don't use it much anymore. It is uncool.
- When you use `let`, you get a variable that is scoped to it's containing block. More on this when we look at blocks.
- When you use `const`, you get a variable that can never be changed. It is a bucket with a tight-fitting lid, a constant.

More on this later. For now, we'll be using `let` for pretty much everything.

</aside>

## Changing the value of a variable

We can change the value of a variable any time, just by assigning a new value to it, so we could write:

```js
let name;
name = "Dave";
alert(name);

name = "Susan";
alert(name);
```

The variable called name contains first the string "Dave", and then the string "Susan". Dave is now renamed Susan. Hopefully he is OK with this.

## Variables are containers

Imagine I have a basket full of kittens, now when I hand you that basket, I'm actually handing you a bunch of kittens. This is probably a pleasant experience for you.

We can codify this snuggly basket like so:

```js
let basket = "kittens";
```

Now the basket can stand in wherever we previously needed kittens. For example, I could write:

```js
alert("kittens");
```

or I could write

```js
alert(basket);
```

Either way I would alert some kittens.

## Variables are pointers

We can also think of variables as pointers (actually this is more accurate). If I stand pointing at a basket of awsome kittens all happy and soft, and say look at this, you're probably going to look at the kittens rather than my finger. The variable stands in for the data.

The data exists in a physical location on the memory chips inside your computer. The variable points at that location, and the computer is clever enough to ge fetch the information and substitute it for the variable.

## Variables are a bit like maths, but also not

In maths, if I say x = 12, I'm stating something that is true, immutable and forever. When I write x, I actually mean 12. x + x is the same as 12 + 12 which is 24.

Variables in code are a bit different, we can change their value, because they are just pointers to some data, and in code we can change our data any time.

I can say:

```js
let x = 12;
```

then later I can say:

```js
x = 13;
```

This is totally fine, we're yous storing some different data in the variable.

I can say:

```js
x = x + 1;
```

Now x = 14. None of this is allowed in maths, but in code it's no problem. The values of variables are just numbers in a big memory chip full of numbers. We can change them to anything we like and no one will stop us.

## Variable names

Variables can be called almost anything you like. Hamster, pie or cheeseOnToast are all perfectly sound variable names. The one restriction is that you can't have any spaces or maths characters in them. You can't have a variable called `cheese on toast` for instance, or a variable called `five+five`. This would confuse JavaScript and give it a headache.

Don't worry about giving your variables long and descriptive names. This is encouraged as it makes your code easy to read. Too long though and you'll spend a lot of time typing. It's a balancing act.

Although we can call our variables anything we like, it makes our lives easier if we give them sensible English names or common abbreviations.

<aside class="box">

## Naming Conventions

If you want to look like a pro, use camel casing for your variable names. Camel casing means you use all lower case for the first word, then start subsequent words in upper case. For example:

- toast
- monkeyMoron
- humpyTheCamel
- numberOfPies

See, each variable name looks like a camel with it's head down low. The upper case letters are the humps.

Some people use snake casing, like in Python:

- number_of_snakes_in_the_barn

This is frowned upon in JavaScript. We don't do that here. People will jusdge you.

We also have Pascal case where the first letter is also capitalised like this:

- PascalCase
- CheeseMaker

In JavaScript we only use Pascal case for classes and constructor functions. we haven't covered these yet, so don't worry about it.

Upshot - useCamelCaseForYourVariableNames

</aside>

## The Let Keyword

Please note that when we first create a variable we must always remember to use the let keyword. If we forget it, **bad things will happen**. More on this when we get to Scope. For now, just remember to put them in.

<div class="exercise">
## Exercise: Thanks for all the fish

Variables are like little buckets in which we can store any information we like. Let's pop a string in one, and then pop it out in an alert box.

1. Create an HTML document and linked JavaScript file.
2. In your JavaScript file, create a variable called farewell and give it a value of "Thanks for all the fish"
3. Pop your farewell variable up in an alert box.

### Answers

To answer this question, first we create a variable, lets call it greeting, and assign a value of "Thanks for all the fish" to it. The variable greeting is a bucket that contains the string. We can now use it in place of the string, and alert it.

```js
let greeting = "Thanks for all the fish";
alert(greeting);
```

</div>

<div class="exercise">

## Exercise: What's for dinner...

1. Create a variable called question. Give it a value of "What's for dinner?"
2. Create a variable called answer. Give it a value of "Fish"
3. Add the two variables together and put the result in an alert box.

### Answers

Variables are buckets. We can use variables in place of the things they represent, so:

```js
let question = "What's for dinner?";
let answer = "Fish";
alert(question + answer);
```

If we'd like to improve the output slightly we can separate the two with a space:

```js
alert(question + " " + answer);
```

</div>
