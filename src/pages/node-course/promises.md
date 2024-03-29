---
title: Promises
course: nodeCourse
slug: promises
layout: ../../layouts/Course.astro
---

# Promises

A promise is a way of having asyncronous Javascript functions execute synchronously without blocking the execution, and without passing a callback. A call to your method call returns a promise object which has a then method which receives a function. This function will be called when the promise is resolved.

This gives us a nice method chaining syntax.

## Promises in Node

We can get promises in Node using the promise package:

```js
  npm install promise
```

Documentation here: [www.npmjs.com/package/promise](https://www.npmjs.com/package/promise)

## Promises give us an API for creating callbacks

Using callbacks we might write code like this:

```js
const read = fs.readfile;
read(path, function (err, data) {
  console.log(data);
});
```

Our read function receives a path, and also a callback. This is acceptable, but we can do better.

Method chaining give us a nicer syntax.

First we must create the promise. We can convert fs.readFile into a function that will return a Promise like this:

```js
const read = Promise.denodeify(fs.readFile);
read(path).then(function (str) {
  console.log("" + str);
});
```

Rather than a nested callback, which may potentially have further callbacks in it, we use a method chaining syntax. If we return a new promise we can chain these promises together, creating a set of functions which will execute when the previous function completes

## Creating a promise

We can create a promise manually should we need to. A Promise accepts a function. This function will receive resolve or reject. If we call resolve, any functions which are listening for promise resolution will be called. If we call reject, the promise will not resolve and the listeners will not be called.

```js
const Promise = require("promise");

new Promise(function (resolve, reject) {
  setTimeout(resolve, 5000);
}).then(function () {
  console.log("done");
});

console.log("waiting");
```

## Multiple listeners

Unlike callbacks, any number of functions can listen to a single promise:

```js
const Promise = require("promise");

promise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 5000);
});

promise.then(function () {
  console.log("done");
});

promise.then(function () {
  console.log("and some");
});
```

## Chaining promises

Nested callbacks become unmanageable quickly. Instead, we can chain promises together one after another by having our promise callback return a new promise, like so:

```js
const Promise = require("promise");

new Promise(function (resolve, reject) {
  setTimeout(resolve, 5000);
})
  .then(function () {
    console.log("done");
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, 5000);
    });
  })
  .then(function () {
    console.log("done");
  });

console.log("waiting ( this gets called right away");
```

This is fairly ugly though. We can improve things a with a little syntax.

```js
const Promise = require("promise");

const asyncronousTask = function () {
  return new Promise(function (resolve, reject) {
    console.log("long lived asynchronous task, perhaps accessing an API");
    setTimeout(resolve, 5000);
  });
};

asyncronousTask()
  .then(asyncronousTask)
  .then(asyncronousTask)
  .then(asyncronousTask);
```

## Exercise - Promises with a file

You earlier wrote code which would serve out a file in response to an http request. Modify this code to use a promise.

## Exercise - Request-Promise

Use the [request-promise](https://github.com/tyabonil/request-promise) module. Write a node route that pulls content from an open weather map URL:

<http://api.openweathermap.org/data/2.5/weather?q=London,uk>

When you have got the content (the promise is fulfilled), return the data to the user.

-#
-#  
-# ## Testing with Promises

-# You might be able to see now that promises make asynchronous testing much easier to do. Say we have a method which makes an API call:

-# :ruby
-# code = <<-CODE
-# var http = require('http')
-# url = 'http://mysite.com/api';

-# module.exports = {
-# get: function() {
-# var get = Promise.denodeify(http.get);
-# return get(url);
-# }
-# }
-# CODE
-#

-#

-# We can unit test this easily:

-# :ruby
-# code = <<-CODE
-# var api = require('./api');

-# describe('api', function() {
-# it('Calculate a non-zero number of days', function() {
-# api.get().then(function(data) {
-# expect(data).not.toBeNull()
-# })
-# });
-# });
-# CODE
-#

-#

-#
-#  
-# Exercise - Testing a promise

-# Modify some of your existing code to use a promise. Now attempt to unit test it.
