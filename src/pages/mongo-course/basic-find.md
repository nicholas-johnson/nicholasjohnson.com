---
title: Finding documents,
description: We learn how to make simple Mongo queries using pattern matching,
section: mongo,
exercise: basicFind,
layout: ../../layouts/Course.astro
course: mongoCourse
---

# Finding documents

Mongo comes with a set of convenience functions for performing common operations. Find is one such function. It allows us to find documents by providing a partial match, or an expression.

## What can you do with Find?

You **can** use find to:

- Find a document by id
- Find a user by email
- Find a list of all users with the same first name
- Find all cats who are more than 12 years old
- Find all gerbils called 'Herbie' who are bald, have three or more eyes, and who have exactly 3 legs.

## Limitations of Find

You **can't** use find to chain complex operators. You can do a few simple things like counting, but if you want to real power you need the _aggregate pipeline_, which is actually not at all scary and is quite easy to use.

The Aggregate pipeline allows us to chain operations together and pipe a set of documents from one operation to the next.

## Using find

You can use find with no arguments to list documents in a collection.

```js
db.entrycodes.find();
```

This will list all of the codes, 20 at a time.

You can get the same result by passing an empty object, like so:

```js
db.entrycodes.find({});
```

## Finding by ID

Assuming you know the object ID of a document. You can pull that document by id like so:

```js
db.entrycodes.find(ObjectId("557afc91c0b20703009f7edf"));
```

The \_id field of any collection is automatically indexed.

IDs are 12 byte BSON objects, not Strings which is why we need the ObjectId function. If you want to read more on [ObjectId, you can do so here.](http://docs.mongodb.org/manual/reference/object-id/)

## Finding by partial match

Say you have a list of users and you want to find by name, you might do:

```js
db.people.find({ name: "dave" });
```

You can match on more than one field:

```js
db.people.find({
  name: "dave",
  email: "davey@aol.com",
});
```

You can match on numbers:

```js
db.people.find({
  name: "dave",
  age: 69,
  email: "davey@aol.com",
});
```

You also match using a regex (although be aware this is slow on large data sets):

```js
db.people.find({
  name: /dave/,
});
```

## Exercise

We need to start out by inserting some data which we can work with.

- Paste the following into your terminal to create a petshop with some pets in it

```js
  use petshop
  db.pets.insert({name: "Mikey", species: "Gerbil"})
  db.pets.insert({name: "Davey Bungooligan", species: "Piranha"})
  db.pets.insert({name: "Suzy B", species: "Cat"})
  db.pets.insert({name: "Mikey", species: "Hotdog"})
  db.pets.insert({name: "Terrence", species: "Sausagedog"})
  db.pets.insert({name: "Philomena Jones", species: "Cat"})
```

- Add another piranha, and a naked mole rat called Henry.
- Use find to list all the pets. Find the ID of Mikey the Gerbil.
- Use find to find Mikey by id.
- Use find to find all the gerbils.
- Find all the creatures named Mikey.
- Find all the creatures named Mikey who are gerbils.
- Find all the creatures with the string "dog" in their species.
