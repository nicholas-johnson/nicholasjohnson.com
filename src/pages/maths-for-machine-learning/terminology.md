---
layout: ../../layouts/Course.astro
title: Terminology
seoTitle: Maths Terminology for Machine Learning, aimed at coders
course: mathsForMachineLearning
---

# Syntax and Terminology

We're going to run through some basic syntax and terminology here. remember when I said that every piece of syntax is significant in Maths? In this section we will very quickly run through all of the core syntax as it is commonly used in machine learning today. This will give you a basis to understand the rest of the book.

Don't worry if not everything makes sense yet. You may wish to refer to this chapter later on.

## Variables

Variables in Maths are not like variables in programming. In software I might write

```js
a = a + 1;
```

This makes no sense in mathematics. Variables in Maths have values or values that can be discovered. You can't just set them to whatever you want. If I write:

$$
a = 12
$$

a is now 12 for the duration of the equation.

## Capitals

- $x$ - lower case italic letters are used for variables representing scalar values, eg $5$
- $\mathbf{x}$ - bold lower case letters are used for variables representing vectors
- $\mathbf{X}$ - bold capitals are used to represent matrices and tensors, eg $1,2,3$

This isn't necessarily true for all Maths, but has become a convention in machine learning.

## Scalars, Vectors, Matrices and Tensors

In Maths we have a lot of words for arrays. This is for historical reasons, various folks writing at different times using different words for related concepts. In code, we use tensors for everything. You may have heard of a package called TensorFlow? PyTorch also deals with tensors.

### Scalars

A scalar is a single number. You can happily conceptualise this as a zero dimensional array or tensor if it makes you happy, the math will still work out.

Here's a scalar in action:

$$
x = 5
$$

### Vectors

Vectors are one dimensional arrays, jsut like regular arrays:

$$
\mathbf{x} = [1, 2, 3]
$$

### Matrices

Matrices are two dimensional arrays. we can optionally surround them with square braces:

$$
X = \begin{bmatrix}
a_{11} & a_{12} & a_{13} & a_{14} & a_{15} \\
a_{21} & a_{22} & a_{23} & a_{24} & a_{25} \\
a_{31} & a_{32} & a_{33} & a_{34} & a_{35} \\
a_{41} & a_{42} & a_{43} & a_{44} & a_{45} \\
a_{51} & a_{52} & a_{53} & a_{54} & a_{55} \\
\end{bmatrix}
$$

### Tensors

Tensors are N dimensional arrays. A one dimensional tensor is also a vector. A two dimensional tensor is also a matrix.

Tensors are hard to represent on paper, but we could have a go using a collection of matrix of matrices

$$
X = \left[ \begin{array}{c}
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
