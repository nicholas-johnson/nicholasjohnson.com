---
title: "Ruby Operator Overloading"
description: ""
section: "ruby"
course: "rubyCourse"
exercise: "operator-overloading"
layout: ../../layouts/Course.astro
---

# Operator Overloading

Did I mention that in Ruby everything is an object? This extends to operators, such as +, -, \* and /. Operators in Ruby are actually methods, and we can define and redefine them, like so:

```ruby
  class Pet
    def +(pet)
      p = Pet.new
      p.super_powers = self.super_powers + " and also " + pet.super_powers
      return p
    end
  end
```

Here we have defined a plus method that receives another pet. This simply creates a new pet with the combined superpowers of it's two parents and returns it. Observe the offspring of Mopsy and Flopsy:

```ruby
  cottontail = mopsy + flopsy
  cottontail.super_powers
    => "Ability to hop really really quickly and also Flight"
```

## Overriding the + Operator Exercise

In this section you will extend your warship / flufster class with some operator overloading.

Implement the + operator. Have it return a new object with the names and standard actions concatenated.

## Sorting your custom class with the <, > and <=> (spaceship).

A slightly more useful one this time.

1. Define a method on your class which specifies an attack power.
2. Now define the < operator, which returns true if the object has a lower attack power.
3. Follow up with the > and == operators.

## Now for a spaceship

1. Implement the spaceship operator on your class. The spaceship operator returns either –1, 0 or 1 depending on whether the first operand is less than, the same as, or greater than the second one.
2. Now create an array of objects based on your class, and sort them.
3. Pass Array.sort a block, and sort the array based on different criteria.

You can now call the .sort method on an array of objects, and it will be sorted by attack power.

## Further Exercise (If you finish first)

Implement the \* operator.

Have it return an array containing multiple instances of the object. (either copies, or several variables pointing to the same object, free choice.) You can duplicate an object using the .dup method.
