---
layout: "../../layouts/Course.astro"
title: Vectors
seoTitle: Vector Maths for Machine Learning, aimed at coders
course: mathsForMachineLearning
---

# Vectors

You've likely hear it said that a vector quantity has both direction and magnitude. Let's take a moment to understand what this means and what it tells us about Vector Maths.

## Vector addition

Let's start with a two dimensional vector:

a = [3, 5]

Because this is two dimensional, we could plot this in two dimensional coordinate space like so:

<LineChart>

Let's define a second vector:

$$
b = [ -1, 2 ]
$$

We can add these together by traversing the $a$ and then $b$, like so:

Eyeballing this, it should be clear that this sum is commutative:

$$
a + b = b + a = [a_1 + b_1, a_2 + b_2] = = [b_1 + a_1, b_2 + a_2] = [2, 7]
$$

## Vector Subtraction

Subtraction works in the same way

a \in R_2
b \in R_2

a - b = [a_1 - b_1, a_2 - b_2]

On a graph this looks like this:

As with scalar arithmetic, subtraction is not commutative, unless you also move the sign:

a - b = [a_1 - b_1, a_2 - b_2] = [-b_1 + a_1, -b_2 + a_2] = [4, 3]

## Cross Products (Vector Multiplication)

When working with scalars, there is no difference between the dot product and the cross product

a = 2
b = 3

a x b = ab = a.b = 6

When working with vectors and matrices, the dot product and cross product are completely different. We will look more atthe dot product in the next section.

To calculate the cross product we simply multiply all the values in the

## Accessing elements of a VEctor

We can access specific elements of a vector using a number, like so:

x_4

is the 4th element of an array.

We can get the ith element like so

x_i

Sometimes we need i - 1

x\_(i-1)

## Vector Maths and Perceptrons

We can represent the inputs to a perceptron as X and the weights as W. We use capital sigma to iterate over all the elements. From this we get the perceptron equation:

Y = sigma X_i W_i + b

which can be read Y equals the sum of each weight multiplied by each x, plus the bias.

## Masking Vector Components with One Hot Vectors

We can use the cross product as a vector mask to pull out one or more specific components of a vector, zeroing all the other values, and keeping the shape of the vector the same.

$$
a = [1, 2]
b = [0,1]

a x b = [0, 2]
$$

<LineGraph>

We use this in particular for embeddings (more later), or for converting scalar data into network inputs. These types of masks can be trained or computed dynamically using a function.

## Vector Maths and Attention

Attention is the secret sauce behind GPT-4. When processing a word, we use a matrix to work out which previous words to pay attention to.

Given our current input embedding (the query) we can train a key matrix then multiply this key by the embeddings representing the rest of the input string. The resulting matrix, softmaxed, contains the sum of all the previous embeddings that the network should pay attention to to generate the next word.

We will look at this in detail later in this book.
