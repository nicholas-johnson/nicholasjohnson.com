---
title: Modifying the output of find with projection
description: Mongo lets us build an API. Here we learn how to format our output.
section: mongo
exercise: find-projection
layout: ../../layouts/Course.astro
course: mongoCourse
---

# Projection

Find takes a second parameter which allows you to whitelist fields to pass into the output document. We call this projection.

You can choose fields to pass though, like so:

```js
  {
    ham: 4,
    eggs: 2
  }
  {
    cheese: 6,
    lime: 0.5
  }

  db.breakfast.find({}, {
    eggs: true,
    lime: true
  })
```

This will yield

```js
  {
    eggs: 2
  },
  {
    lime: 0.5
  }
```

## Exercise - Tidy up your output

- Use projection to format your array of people. We want only the names.
- Output just the names of the people who are 99 years old
- Output only the cats, like this:

```js
  { "cat" : { "name" : "Fluffy Frank", "age" : 13 } }
```

_When you output the cats, you will need to find only people who have cats, where cats $exists, or you will have gaps in your data._

<aside class="box">

## Aggregation

We can do much more complex projection, even creating new fields based on expressions using the aggregate pipeline. More on this in a bit.

</aside>

## Excluding the id field

You will notice that the ID field is always passed through project by default. This is often desirable, but you may wish to hide it, perhaps to conceal your implementation, or to keep your communication over the wire tight.

You can do this easily by passing \_id: false:

```js
db.breakfast.find(
  {},
  {
    eggs: true,
    lime: true,
    _id: false,
  }
);
```

## Exercise - remove the ids

- List the cats. Remove the ids from the output.

-#
-#  
-# ## Exercise - Format the stocks

-# _ The stocks data is overwhelming. Use projection to limit the output. I only want to see the name, the sector and the profit.
-# _ You are effectively composing an API response here. Show me only companies that achieved a profit higher than 0.5%.
