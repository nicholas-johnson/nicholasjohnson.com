---
title: Destructuring ES6 lambda signatures for fun and profit
date: "2018-09-25T23:46:37.121Z"
layout: post
draft: false
path: "/posts/destructuring-lamba-signatures/"
category: "JavaScript"
tags:
  - "JavaScript"
  - "ES6"
description: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum."
---

Say we have an array like this:

```js
pigs = [
  {id:6, name: 'peppa'},
  {id:44, name: ‘george’}
]
```

Assume I wanted all the ids in an array. We can do this with a regular old map:

```js
var ids = pigs.map(function(pig) {
  return pig.id;
});
```

This is going to give us an array like so:

```js
[6, 44]
```

## => Lambdas

We can improve on this with a fat-arrow lambda function:

```js
const ids = pigs.map(pig => pig.id);
```

I’ve replaced the ES5 callback function with an ES6 fat arrow. Because there’s only one argument, I can omit the braces. Because there’s only one line, I can use the implied return statement.

## Destructuring

For maximum effect, we can destructure the lambda arguments, like so:

```js
const ids = pigs.map(({ id }) => id);
```

The curlies in the function signature pull the id field right out of the pig. I think this is rather fine.

## Find

We can do a similar thing with find. Let’s say I wanted to get only Peppa:

```js
const peppa = pigs.find(({ name }) => name === ‘peppa’);
```

It’s like a little query language, just for us.

## Filter

we can also Filter. Here’s a topPig function that will find all the pigs where the id is greater than some value that I’m calling minId:

```js
const topPigs = (minId) => pigs.filter(({ id }) => id > minId);
```

## Filtering by more than one parameter

This becomes even more useful when we are interested in more than one value. Say we want to find all the pigs where name === ’peppa’ and id > 12:

```js
pigs.filter(({ id, name }) => name === 'peppa' && id > 12)
```

For each pig, such that I have the id and name, get me pigs where name === ‘peppa’ and id > 12.

## Filtering by nested parameters
We can do more. We can also destructure nested parameters. Say we modify our pig array to be like so:

```js
const animals = [
  {
    name: ’peppa’,
    family: {
      mother: ‘mummy pig’,
      father: ‘daddy pig’
    }
  },
  {
    name: ’suzy sheep’,
    family: {
      mother: ‘mummy sheep’,
      father: ‘daddy sheep’
    }
  }
];
```

Lets say I want to find all the animals such that animal.family.mother === ‘mummy pig’. I can totally do this too, and it’s not even that hard. I just have to nest the curlies:

```js
animals.filter(({ family: { mother } }) => mother === 'mummy pig');
```

## Combining filters and maps

Now lets say, I want only the names of those animals. I can just chain a map:

```js
animals.filter(({ family: { mother } }) => mother === 'mummy pig')
  .map(({ name }) => name);
```

This will give me an array like so:

```js
['peppa']
```
