---
title: "Watch - AngularJS Exercise"
section: "angular"
exercise: "watch"
course: angularJsCourse
layout: ../../layouts/Course.astro
---

# Watching and Applying

We can watch an attribute of $scope using:

```js
$scope.$watch("test", function (newVal, oldVal) {});
```

Now whenever the value of $scope.test changes the function will be called.

## Watchers and the digest cycle

Watchers are added to the `$scope.$$watchers` array. This array contains a list of all current watchers, the expression they are evaluating and the last known value of that expression.

Whenever an Angular watcher fires it triggers something called a `$scope` digest. This means that the `$scope` tree is traversed and all the watch expressions are evaluated. If any come up 'dirty' i.e. changed the corresponding functions are executed.

## Digest limit

The digest cycle will repeat over and over until the entire `$scope` hierarchy is clean or the digest limit is reached. The default digest limit is 10.

<section class="exercise">

## Exercise

We are going to hack some quick validation into our profile form. We'll see the right way to do validation using directives in a bit.

Extend your profile form with a `$scope.person.name` field. Let's make name mandatory. use $scope.$watch to watch the 'person.name' property of scope.

If the value is not blank, set $scope.errors = {}.

Otherwise set `$scope.errors = {name: "should not be blank."}`.

Now in your template, use ng-show to show a nice warning message if errors != false.

</section>

## Downloads

- [Code from the board](https://www.dropbox.com/sh/impzopzu853qdu0/AADic5blJ1rgfhI6H8ulwXs3a?dl=1)
