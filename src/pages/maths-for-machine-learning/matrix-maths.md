---
layout: ../../layouts/Course.astro
title: Matrix Maths (Fundamentals of Linear Algebra)
seoTitle: Matrix Maths and Linear Algebra for Machine Learning
course: mathsForMachineLearning
---

# Matrix Maths (Fundamentals of Linear Algebra)

The great thing about matrices is that they contain a bunch of elements that are predictably all the same as each other. This makes them ideal for parallel processing. We use GPUs (sometimes called TPUs or Tensor Processing Units) to load a load of data all at once, then CHUNK, we process all that data, all at the same time through multiple parallel CUDA cores.

This is great for graphics, where you have millions of 3d points that all need transforming very quickly. It's also great for machine learning, where you have huge vectors of weights that all need transforming using the same algorithm.

## Dot Products and Cross Products

for most operations, tensors, vectors, scalars and matrices work in the same way.

The very notable exception to this rule is the dot product. Say I have two scalars, a and b, and I want to multiply them togehter, I can write this in three ways.

a x b is the same as ab, sometimes written a.b

a x b = ab = a.b

a x b is the cross product. a.b or ab is the dot product. With scalars these give the same result, so we use them interchangeably. Not so with tensors.

To calculate the dot product of the rows of matrix \(A\) with the columns of matrix \(B\), we can use the following matrices:

$$
A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}


$$

1. **Calculating \(C\_{11}\):**

   $$
   C_{11} = A_{11} \cdot B_{11} + A_{12} \cdot B_{21} = 1 \cdot 5 + 2 \cdot 7 = 5 + 14 = 19
   $$

2. **Calculating \(C\_{12}\):**

   $$
   C_{12} = A_{11} \cdot B_{12} + A_{12} \cdot B_{22} = 1 \cdot 6 + 2 \cdot 8 = 6 + 16 = 22
   $$

3. **Calculating \(C\_{21}\):**

   $$
   C_{21} = A_{21} \cdot B_{11} + A_{22} \cdot B_{21} = 3 \cdot 5 + 4 \cdot 7 = 15 + 28 = 43
   $$

4. **Calculating \(C\_{22}\):**
   $$
   C_{22} = A_{21} \cdot B_{12} + A_{22} \cdot B_{22} = 3 \cdot 6 + 4 \cdot 8 = 18 + 32 = 50
   $$

So, the resulting matrix \(C\) from the dot product (matrix multiplication) of matrices \(A\) and \(B\) would be:

$$

C = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}

Here:

- \(X\) is the variable holding the matrix.
- The matrix is populated row-wise with the numbers 1 through 4.


$$

x \in \mathbb{R}

$$
$$
