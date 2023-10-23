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

You might, if you kew a bit of Maths, recognise that this formula is the same thing. You might also, if you're not new to this, recognise the formula for a simple linear perceptron, or you might not.

In an equation like this, everything is relevant, the sigma, the italics, capitals, subscripts, superscipts. Sometimes we write a dot or a star or a hat. All of these things have significance. In this short book we will come to understand the significance. Where possible we will understand why things are the way they are.

This book is your coder's guide to maths. Our goal in this book will be to get to a point where we can understand all the mathematics needed to read modern machine learning papers, papers like "Attention is All You Need", the paper that laid the groundwork for ChatGPT.

We'll cover the syntax and what the various symbos mean in context
