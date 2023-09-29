---
title: "Extend and Include"
description: ""
section: "ruby"
course: "rubyCourse"
exercise: "extend-and-include"
layout: ../../layouts/Course.astro
---

# Extend vs. Include

Include and Extend allow us to take methods from a module and add them to an object. They work slightly differently from each other though. Let's take a look...

## Extend adds methods directly to an object

Extend adds methods to an object. It extends that object by adding new features to it.

```js
    class Hamster
    end

    module PetSkills
      def snuggle;end
    end

    Hamster.extend PetSkills
```

If you extend a class, you create a class method.

```js
    h = Hamster.new
    Hamster.methods.include? :snuggle
    # => true
    h.methods.include? :snuggle
    # => false
```

If you extend an instance of a class, you create an instance method, but only on that instance. You can extend any object like this.

```js
    h.extend PetSkills
    h.methods.include? :snuggle
    # => true

    i = Hamster.new;
    i.methods.include? :snuggle
    # => false
```

You can call extend on any object to add methods to that object alone.

## Include adds instance methods to a class

Include takes a more traditional approach. If you include a module in a class, the methods in the module will be added as instance methods, and will be available to all instances of that class.

```js
    class Gerbil
      include PetSkills
    end

    g = Gerbil.new
    Gerbil.methods.include? :snuggle
    # => false
    g.methods.include? :snuggle
    # => true
```

## Upshot

Extend will add methods to an object, and only to that object. If we extend a class we get class methods.

Include will include methods from a module into a class, those methods become instance methods for objects of that type.
