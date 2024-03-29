---
title: "Q - AngularJS Exercise"
section: "angular"
exercise: "q"
layout: ../../layouts/Course.astro
course: angularJsCourse
---

# Promises with $q

The promise spec is a standard way of defining callbacks on asynchronous tasks. It's a pattern with some standardised function names that you can rely on.

There are many promises libraries, and a forthcoming ES6 promises spec. The promises library that comes with Angular is called $q.

## Callbacks

When a task is potentially long running, it wouldn't be good for the JavaScript engine to pause and wait for it to finish. This would result in a frozen browser and a poor user experience.

We get around this by using callback functions. On completion, a long running task will execute any callback functions that it knows about.

The main examples of long running tasks in the front end are network requests (typically AJAX), user events and timer events (e.g. you will be logged out after 10 minutes inactivity).

In the back end, database calls, file IO, user connection or header parsing are long running calls that benefit from callbacks.

## The old way

In the past we would pass our callbacks as function parameters. In this made up example we get a post, then once we have the post we have the url to get the comments for the post.

```js
getPost(function (data) {
  getComments(function (data) {
    renderPage();
  });
});
```

This can lead to deep nested structures. It only allows us one callback per function, and it can be hard to see what is going on.

## The promises way

```js
getPost().then(getComments).then(renderPage).catch(alertUserOfError);
```

A promise object must implement at a minimum a _then_ method. This will define the success callback.

If _then_ receives two functions, the first will be a success callback, and the second an error callback.

It may also implement a _catch_ method. This will define a callback for the error state.

## Promises are not done yet

Note that promises are not a finalised spec, but more of a pattern. Not every promises library works in exactly the same way or provides exactly the same functions.

## $q

The Angular promises implementation is called $q.

You can read about it here:

[docs.angularjs.org/api/ng/service/$q](https://docs.angularjs.org/api/ng/service/$q)

<section class="exercise">

## Exercise - make a promise

Have a scan through the $q documentation. Now try to implement an example promise that waits 10 seconds and then asks the user to sign up to your email list.

</section>

<section class="exercise">

## Exercise - Promises with AJAX

The AJAX methods in Angular will return decorated promise objects. When you make an AJAX call, you can call _then_ on the resulting object to chain calls together.

```js
$http.get(url).then(function () {});
```

Refactor one of your AJAX exercises to use promises instead of the success callback.

</section>
