---
title: "Ruby Integers and Floats"
description: ""
section: "ruby"
course: "rubyCourse"
exercise: "numbers"
layout: ../../layouts/Course.astro
---



# Integers (Fixnums)

Everything in Ruby is an object including integers, or Fixnums as they are known in Ruby. Integers therefore have methods.

```js
  x = 1
  x.to_s
    => '1'
```

## Basic Maths

You can do all the maths you would like with integers. It all works as you would expect:

```js
  1 + 2
    => 3

  5 - 1
    => 4

  3 * 4
    => 12

  4 / 2
    => 2
```

You also have the common maths shortcuts you find in other languages. Again, these work as you would expect:

```js
  x = 2
    => 2

  x += 5
    => 7

  x *= 2
    => 14
```

Use \*\* for exponentiation should you feel that way inclined:

```js
  2 ** 2
    => 4
  2 ** 3
    => 8
  2 ** 4
    => 16
```

<aside class="box">

## Note: There is no Incrementation operator

A surprise here. Ruby has no pre/post increment/decrement operator. For instance, x++ or x-- will fail to parse. Use x += 1 instead. There are some relatively technical and quite good reasons for this to do with consistency.

Matz dislikes this because the ++ incrementation is the only operator with an implied second value, so we don't have it. Use a +=1 instead.

</aside>

## Looping with Integers

Remember how everything in Ruby is an object? This lets us do some reasonably clever things. For example, we can it to perform looping, like so:

```js
  5.times {puts "hello"}

  hello
  hello
  hello
  hello
  hello
```

This might look strange. The little bit of code between the curly brackets {puts "hello"} is called a block. A block is an inline function. We are actually passing this block (or function) to the Fixnum times method, which is then executing it 5 times. This may seem a little odd at first, but it's actually really rather good and will soon become second nature, as we shall see when we reach the section on blocks.

## Comparison

As you would expect, greater than or less than signs to do comparison. == tests for equality.

```js
  1 > 2
    => false

  2 >= 2
    => true

  1 < 2
    => true

  1 == 1
    => true
```

## The Spaceship Operator

A tremendously useful one this, the spaceship operator returns 1, 0 or-1 depending on whether the first operand is larger, the same as or smaller than the second. This is excellent, as this type of comparison forms the basis of all known sorting algorithms.

To make any class sortable, all you need to do is to implement the spaceship operator on it. Telling a custom class how to respond to an operator is called operator overloading. More on operator overloading later.

4 <=> 3
=> 1

4 <=> 4
=> 0

2 <=> 10
=> -1

## Large integers

Underscores can be included in integers to make them more legible. We don’t do this often, but it’s a fun trick to know:

```js
  x = 100_000_000
  y= 100000000
  puts x == y
    => true
```

# Floats

Ruby also has floating point numbers. Floats are useful for dealing with very large numbers, or high precision numbers.

Declare a float just by including a decimal point, like so:

```js
  a = 0.5
    => 0.5

  a = 1.0
    => 1.0
```

You can convert integers to floats using the to_f method like so:

```js
  15.to_f
    => 15.0
```

Integers are not implicitly converted to floats, so:

```js
  3 / 2
    => 1
```

rather than 1.5

However, if one of the operands is already a float, the output will be a float so:

```js
  3.0 / 2
    => 1.5

  3 / 2.0
    => 1.5
```

## Infinity

Floats have the rather handy ability of extending to infinity, like so:

```js
  1.0 / 0
    => Infinity

  (1.0 / 0).infinite?
    => 1

  (-1.0 / 0).infinite?
    => -1
```

If you need to say that something, say a stack, can contain an unlimited number of values, you might find a use for infinity.

## Exercise - do a little maths

1. Get a value from the command line using a = gets
2. Write a little program that asks the user how old they are in years. You will need to use years.to_i
3. Output the number of weeks they have lived for.
4. Assume a lifespan of 79 years. Output the number of weeks they have left.

## Exercise - repeat yourself

Write a one line program that writes "Hello World" 250 times to the screen

## Exercise - exponents

Use times to write a program which outputs powers of 2, up to some maximum value, like this:

```js
  1
  2
  4
  8
  16
  32
  ...
```
