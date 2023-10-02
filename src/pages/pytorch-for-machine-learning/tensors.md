# Tensors

A tensor is just an n-dimensional array. It can contain any of the numeric data types that Python supports, including 8 bit, 16 bit, 32 bit and 64 bit integers and floats, and also Booleans and chars.

We create a tensor like this:

import torch
a = torch.tensor(4)

This will create a one dimensional tensor with a single value `4`

Typically tensors contain arrays. We might pass an array like this:

```python
import torch
a = torch.tensor([1, 2, 3])
```

We can print the output:

print(a)

...which gives us:

tensor([1, 2, 3])

## Maths with tensors

This becomes useful when we start doing maths. We can add together tensors

import torch

a = torch.tensor([1, 2, 3])
b = torch.tensor([4, 5, 6])

print(a + b)

# => tensor([5, 7, 9])

We can multiply them:

```python
import torch

a = torch.tensor([1, 2, 3])
b = torch.tensor([4, 5, 6])

print(a \* b)

# => tensor([ 4, 10, 18])
```

tensors can be different shapes, provided those shapes are compatible:

```python
import torch

a = torch.tensor([1, 2, 3])
b = torch.tensor([4])

print(a \* b)

# => tensor([ 4,  8, 12])
```

## Tensor Datatypes

You can specify a datatype by passing a dtype parameter, in which case you'll get an error if you insert a value of the wrong datatype:

```python
a = torch.tensor([4], dtype=torch.int32)
```

or you can use one of the tensor types, like so:

```python
a = torch.IntTensor([1, 2, 3])
```

## Ways to create

You can make a tensor from a number, from an array, or from a range

torch.tensor(1)
torch.tensor([1, 2])
torch.tensor(range(1000))

You can create one with incrementing numbers, like a range, but without having to make a range:

torch.arange(3)

You can make an n-dimensional tensor with random numbers

```python
a = torch.randn(10)
a = torch.randn(10, 10)
a = torch.randn(10, 10, 10)
```

or full of zeros

a = torch.zeros(10)
a = torch.zeros(10, 10)
a = torch.zeros(10, 10, 10)

or ones

a = torch.ones(100)

## Speed

So far so nice, but why would we want this? We could do the same thing with Numpy easily enough. One answer is speed. Pytorch is going to hand over this entire array manipulation to a C backend, which will attempty to parallelize the operation. Later, when we get to CUDA, we'll see how we can send our data to a GPU for a massive speed boost.

Here I multiply 100,000,000 integers by each other.

a = torch.IntTensor(range(100000000))
b = torch.IntTensor(range(100000000))

a \* b

On my plain M1 2021 Macbook Pro, this takes about seven seconds.

<aside class="box">

## Why would we want to multiply arrays together very quickly anyhow

Matrix manipulation is the soul of deep learning. We represent our input as embeddings which are arrays. In each layer we multiply arrays by other arrays to get the values for the next layer. Being able to do this quickly

</aside>
