---
title: "Ruby Modules"
description: ""
section: "ruby"
course: "rubyCourse"
exercise: "modules"
layout: ../../layouts/Course.astro
---



# Modules (Mixins)

Modules can be used to add reusable functionality to a class. They are sometimes known as Mixins. A module consists of a whole bunch of methods. By importing it into a class, we gain access to all those methods. This is a handy way to get around the restrictions of single object inheritance, since we may import as many modules as we like.

## Defining Shared Functionality

Lets teach flopsy how to make an omelette. Then she will be able to help out in the kitchen. It would be nice if our omelette could accept a few options, so lets allow that too.

```js
  module CookOmelette
    def cook_omelette(args={})
      number_of_eggs = args[:number_of_eggs] || args[:eggs] || 2
      cheese = args[:cheese] ? "cheese" : nil
      ham = args[:ham] ? "ham" : nil
      mushrooms = args[:mushrooms] ? "mushrooms" : nil
      ingredients = [cheese,ham,mushrooms].delete_if{ |ingredient| ingredient.nil? }
      ingredients = ingredients.join(" & ")
      "#\{ ingredients } omelette with #\{number_of_eggs} eggs".strip
    end
  end
```

Now include the mixin in the Pet class.

```js
  class Pet
    include CookOmelette
  end
```

All our pets can now make delicious omelettes. Observe:

```js
  mopsy.cook_omelette
    => "omelette with 2 eggs"
  mopsy.cook_omelette :ham => true, :cheese => true, :eggs => 4
    => "cheese & ham omelette with 4 eggs"
```

## Module Inheritance

Including a mixin in a class adds those methods to that class as though they had been defined within that class.

Methods added to a class by a module are inherited by subclasses of that class. For example, by including the CookOmelette mixin in the Pet class the Kitten subclass and all its instances also gain that method.

## Exercise - Extracting Common Functionality

This exercise extends the lethal warship of fluffy kitten class .

1. Lets Create a module now. Extract the age and age_in_weeks methods into a module that can be included elsewhere. Name the module sensibly. Now remove these from your class, and instead import the module. You now have the ability to make anything have an age, and to query it's age sensibly.

2. Write a stereo module that allows your class to play some cool random sounds (really strings). Add it to your class.
