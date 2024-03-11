---
layout: ../../layouts/Course.astro
title: Terminology
seoTitle: Maths Terminology for Machine Learning, aimed at coders
course: mathsForMachineLearning
---

# Syntax and Terminology

It's important to understand that Mathematical notation is used in several ways. In school, maths is all about solving equations and making things true. In a paper, mathematical notation is often far more losely, as a concise way of expressing ideas. You're not always meant to be able to solve the equations in a paper, they are simply shorthand for thoughts about the way things are.

In this section, we'll do a lightening run through of most of the basic syntax and terminology that you'll need to interpret mathematical equations, specifically for machine learning. This will give you a basis to understand the rest of the book.

Don't worry if not everything makes sense yet, we'll refer back to this chapter as we move on together.

## Variables

Variables in Maths are not like variables in programming. In software I might write:

```js
let a = 5;
a = a + 1;
```

I can do this because `a` is a pointer to a location in memory. It can hold any arbitrary value I choose to put there, it's just flipping some binary digits on a chip.

This makes no sense in mathematics. Variables in Maths have values eternal. You can't just set them to whatever you want. If I write:

$$
a = 12
$$

$a$ is now 12 for the duration of the equation. Solving the formula is a process of discovering the other things that are true given what we know.

## Capitals, Bold and Italic in Variable Names

Everything is significant in mathematical notation. The following forms have become reasonably reliable standard in recent years, and knowing them will help you interpret things more quickly.

- $x$ - lower case italic letters are used for variables representing scalar values, eg $5$
- $\mathbf{x}$ - bold lower case letters are used for vectors, which are one dimensional arrays.
- $\mathbf{X}$ - bold capitals are used to represent matrices and tensors, which are multi-dimensional arrays.

This isn't necessarily true for all Maths throughout time, but has become a convention in machine learning. Once you internalise this, a lot of things start to make a lot more sense.

## Scalars, Vectors, Matrices and Tensors

In Maths we have a lot of words for arrays. This is for historical reasons, various folks writing at different times using different words for related concepts. The syntax is different, and also the way we work with them is slightly different too. More on this later.

### Scalars

A scalar is a single number. You can happily conceptualise this as a zero dimensional array or tensor if it makes you happy, the math will still work out.

Here's a scalar in action:

$$
x = 5
$$

### Vectors

Vectors are one dimensional arrays, just like regular arrays. They also share the same square bracket and comma syntax, which is nice:

$$
\mathbf{x} = [1, 2, 3]
$$

Note the capital $\mathbf{x}$.

### Matrices

Matrices are two dimensional arrays. We can optionally surround them with square braces. A matrix is an array of arrays:

$$
\mathbf{X} = \begin{bmatrix}
a_{11} & a_{12} & a_{13} & a_{14} & a_{15} \\
a_{21} & a_{22} & a_{23} & a_{24} & a_{25} \\
a_{31} & a_{32} & a_{33} & a_{34} & a_{35} \\
a_{41} & a_{42} & a_{43} & a_{44} & a_{45} \\
a_{51} & a_{52} & a_{53} & a_{54} & a_{55} \\
\end{bmatrix}
$$

### Tensors

Tensors are N dimensional arrays. A one dimensional tensor is also a vector. A two dimensional tensor is also a matrix.

Tensors are hard to represent on paper, but we could have a go at showing a 3d tensor using a vector of matrices:

$$
\mathbf{X} = \left[ \begin{array}{c}
\begin{bmatrix} x_{111} & x_{112} & x_{113} & x_{114} & x_{115} \\
x_{121} & x_{122} & x_{123} & x_{124} & x_{125} \\
x_{131} & x_{132} & x_{133} & x_{134} & x_{135} \\
x_{141} & x_{142} & x_{143} & x_{144} & x_{145} \\
x_{151} & x_{152} & x_{153} & x_{154} & x_{155} \\
\end{bmatrix} \\
\begin{bmatrix} x_{211} & x_{212} & x_{213} & x_{214} & x_{215} \\
x_{221} & x_{222} & x_{223} & x_{224} & x_{225} \\
x_{231} & x_{232} & x_{233} & x_{234} & x_{235} \\
x_{241} & x_{242} & x_{243} & x_{244} & x_{245} \\
x_{251} & x_{252} & x_{253} & x_{254} & x_{255} \\
\end{bmatrix} \\
\vdots \\
\begin{bmatrix} x_{511} & x_{512} & x_{513} & x_{514} & x_{515} \\
x_{521} & x_{522} & x_{523} & x_{524} & x_{525} \\
x_{531} & x_{532} & x_{533} & x_{534} & x_{535} \\
x_{541} & x_{542} & x_{543} & x_{544} & x_{545} \\
x_{551} & x_{552} & x_{553} & x_{554} & x_{555} \\
\end{bmatrix}
\end{array} \right]
$$

If we want to specify that a variable X contains a $5 \times 5\times 5\times 5$ tensor without drawing the tensor, we can do so by saying that Y is in the set of real numbers $5 \times 5 \times 5 \times 5$. More on sets later.

$$
Y \in \mathbb{ℝ}^{5 \times 5 \times 5 \times 5 \times 5}
$$

When writing code, we use tensors most of the time regardless of how many dimensionw we need. You may have heard of a package called TensorFlow? PyTorch also deals with tensors, as does Jax.

## Single or Double Vertical Bars around vectors denote the length of the vector ||

Single or double bars around a vector denote the length of a vector. These two notations are used interchangeably in different contexts.

To find the length (or magnitude) of a vector $ \mathbf{w} $ given by $ \mathbf{w} = [1,2] $, you can use the Pythagorean formula for the magnitude of a 2D vector:

$$
|\mathbf{w}| = ||\mathbf{w}|| = \sqrt{w_1^2 + w_2^2}
$$

Where:

- $ w_1 $ is the first component of the vector (in this case, 1).
- $ w_2 $ is the second component of the vector (in this case, 2).

Plugging in the values from vector $ \mathbf{w} $:

$ |\mathbf{w}| = \sqrt{1^2 + 2^2} $
$ |\mathbf{w}| = \sqrt{1 + 4} $
$ |\mathbf{w}| = \sqrt{5} $

So, the magnitude (or length) of vector $ \mathbf{w} $ is $ \sqrt{5} $.

## Single Vertical Bars around scalars are absolute values |

Single bars can also mean the absolute value of a scalar

$$
a = -5
|a| = 5
$$

We can also write this as a function:

$$
\text{abs}(a) = 5
$$

We can define this like so:

$$
|a| =
\begin{cases}
a & \text{if } a \geq 0 \\
-a & \text{if } a < 0
\end{cases}
$$

Occasioanlly you will also see this:

$$
|a| = \sqrt{a^2}
$$

## Vertical bars in sets mean "such that"

A single bar separating two side of an equation means "such that"

TODO: Find real world example of this.

## Hats

A hat means a prediction.

TODO: Create formula

We often use yHat as a variable name, to mean our current prediction. It's not necessarily the final value, just what we have right now in this current training epoch.

## Stars

A star means an ideal value, it's the value we want to get to
