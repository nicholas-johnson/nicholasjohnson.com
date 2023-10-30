---
layout: ../../layouts/Course.astro
title: Maths for Machine Learning (for coders)
seoTitle: Learn Maths for Machine Learning, aimed at coders
course: mathsForMachineLearning
---

# Welcome to the Course!

Imaging for a minute, you had never written a line of code before, and someone came along and showed you this:

```js
let y = 0;
let x = [1, 2, 3]
let w = [4, 5, 6]

for (const i = 0; i < x.length; i ++> ) {
    y = y + weights[i]
}

y = y + b;
```

As a coder, in pretty much any language, you will probably immediately recognise some variable declarations, a `for` loop plus a bit of Maths. 

I could have written this a lot more efficiently, but this is a maths book, so I'm keeping the code vanilla for now.

Think back though, to when you first saw code like this. It's not obvious what is happening here. It's obvious now because you learned the syntax, but back then, this was deep magic.

Now say I showed you this:

$$
y = \sum_{i=1}^{n} w_i x_i + b 
$$

You might, if you knew a bit of Maths, recognise that this formula is the same thing. You might also, if you're not new to this, recognise the formula for a simple linear perceptron, or you might not.

In the code, everything is relevant, the square and curly braces, the semicolons, the ordering of the lines.

In the equation too, everything is relevant, the sigma, the italics, capitals, subscripts, superscipts. Sometimes we write a dot or a bar or a star or a hat. All of these things have significance. both the code and the equation express an idea in a way that is understandable. 

This book is your coder's guide to maths. It is a rosetta stone that will let you mentally translate the equations into algorithms. 

Our goal in this book will be to get to a point where we can understand all the mathematics needed to read modern machine learning papers, papers like "Attention is All You Need", the paper that laid the groundwork for ChatGPT.

## This book is actually 2 books

This book very specifically focusses on Maths so you can read and understand papers. The companion to this book, Python for Machine Learning will trach you how to put these ideas into practice. You may wish to switch between these two as you go, or remain focussed on one or the other.

## Exercises

Like learning code, learning maths is interactive. You'll find exercises sprinkled through this course. Doing these exercise will cement the ideas in your head.
