---
title: Finding with comparison queries
description: We learn how to make simple Mongo queries using pattern matching
section: mongo
exercise: find-with-expressions
layout: ../../layouts/Course.astro
course: mongoCourse
---

# Finding with Expressions and comparison queries

We have seen how we can find elements by passing Mongo a partial match, like so:

```js
db.people.find({ name: "Yolanda Sasquatch" });
```

We can also find using expressions. We define these using JSON, like so:

```js
db.people.find({
  age: {
    $gt: 65,
  },
});
```

We can use operators like this:

- $gt - Greater than
- $lt - Less than
- $exists - The field exists

See the full list here:

<http://docs.mongodb.org/manual/reference/operator/query/>

## Exercise

Copy the following code into a Mongo terminal. It will create a collection of people, some of whom will have cats.

Optionally modify the code so that some people have piranhas, and some have dachshunds.

```js
  use people

  (function() {
    var names = [
      'Yolanda',
      'Iska',
      'Malone',
      'Frank',
      'Foxton',
      'Pirate',
      'Poppelhoffen',
      'Elbow',
      'Fluffy',
      'Paphat'
    ]
    var randName = function() {
      var n = names.length;
      return [
        names[Math.floor(Math.random() * n)],
        names[Math.floor(Math.random() * n)]
      ].join(' ');
    }
    var randAge = function(n) {
      return Math.floor(Math.random() * n);
    }
    for (var i = 0; i < 1000; ++i) {
      var person = {
        name: randName(),
        age: randAge(100)
      }
      if (Math.random() > 0.8) {
        person.cat = {
          name: randName(),
          age: randAge(18)
        }
      }
      db.people.insert(person);
    };
  })();
```

- Use find to get all the people who are exactly 99 years old
- Find all the people who are eligible for a bus pass (people older than 65)
- Find all the teenagers, greater than 12 and less than 20.

# $exists

We can use exists to filter on the existence of non-existence of a field. We might find all the breakfasts with eggs:

```js
db.breakfast.find({
  eggs: {
    $exists: true,
  },
});
```

## Exercise - $exists

- Find all the people with cats.
- Find all the pensioners with cats.
- Find all the teenagers with teenage cats.

# $gt and $lt

We can use $gt and $lt to find documents that have fields which are greater than or less than a value:

```js
db.breakfast.find({
  starRating: {
    $gt: 5,
  },
});
```

## Exercise - Stockbrokers

We are going to use some real data now. The stocks json file is a list of all stocks traded in the US in 2015. It's real data.

Download the stocks.json file from here:

<http://nicholasjohnson.com/mongo/datasets/stocks.json>

We can import a JSON file from the command line using the mongoimport shell command.

Enter the following into a **terminal**. Don't enter this into the Mongo console or it won't work.

```js
  mongoimport --db stocks --collection stocks --file stocks.json
```

=code(code, :bash)

- Find all the stocks where the profit is over 0.5
- Find all the stocks with negative growth

# $where

We can even filter using an arbitrary JavaScript expression using $where. This will allow us to compare two fields in a single document.

```js
db.sandwiches.find({
  $where: "this.jam && this.peanutButter && this.jam > this.peanutButter",
});
```

Here we find all the sandwiches with jam and peanut butter where the jam quotient outweighs the peanut butter.

_Warning: It's easy to overuse $where since it appears to do everything with plain old JavaScript. $where is eval-ing a JavaScript expression and as such is slow. Mongo can make no optimisations here, and must execute the JavaScript on every single document in the collection. Prefer the native operators where possible._

## Exercise - $where

- Use $where to find all the people who have a cat.
- Find all the people who are younger than their cats. Remember, not everyone has a cat, so you will need to use a boolean && to filter out the non-cat owners.
- Does anyone have the same name as their cat? Re-run the insertion script to create more records until someone does.

-#
-#  
-# ## Comparing using expressions

-# It's not currently possible to use find to compare by expression. Say we wanted to find all the people who were older than their cat for example.
