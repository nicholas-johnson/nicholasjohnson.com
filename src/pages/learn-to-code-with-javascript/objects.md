---
layout: ../../layouts/Course.astro
title: Objects
seoTitle: Introduction to Object Oriented Code in JavaScript
course: learnToCodeWithJavaScript
createdAt: 6 Sep 2011
updatedAt: 6 Sep 2023
---

# Objects - Like Folders on your Desktop

My wife keeps all her files on her desktop. To me, this looks messy, but for her it's actually pretty good organisation because she doesn't use her computer very often, so it's handy for her to have everything right there at the top level. There's not that much stuff.

I keep all my files in a series of nested folders. I do this because I have WAY more files. Being a coder, I've probably got close to a million files in my home directory. so I need to be more organised.

## Objects are like folders

Think of the programs we've made so far. We've created a bunch of variables, and Mrs Potts was pleased, but these programs were small. What if we needed a couple of thousand variables, even a couple of million. In a modern game you might be tracking literally billions of parameters. We need an organisation tool.

## Objects fill this role nicely

In JavaScript we have two main ways of staying organised:

- Object Orientation - which lets us create little balls of variables
- Functional code - which lets us create variables that are local to functions, then nest functions inside each other

In this section we will be looking at object orientation

## Creating objects

In some languages, creating objects is work. In JavaScript it is easy.

Create an object like this:

```js
let myCat = {};
```

I just made an object called myCat. Nice.

Cats have attributes. They have legs, whiskers and a tail. I can represent this like so:

```js
let myCat = {
  legs: 4,
  whiskers: 1000,
  tail: 1,
};
```

Without an object, I would have to create a bunch of separate variables. Now I have them all nicely balled up in a single variable called myCat. I can pass myCat around, and all its attributes will pass around with it.

## Attributes vs. Variables

- When we put something in an object we call it an **attribute** of that object.
- When we create a new variable using let, const or var, that's a **variable**.

This may seem like a subtle distinction, but it's an important one that runs deep into the language. Attributes and variables behave differently and have a different implementation.

Attributes are not variables. They're actually string keys in a HashMap. Don't worry if this doesn't make sense yet, we'll come back to it in the advanced course.
