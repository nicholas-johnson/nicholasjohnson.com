---
title: "Controllers - AngularJS Exercise"
section: "angular"
slug: "controllers"
course: angularJsCourse
layout: ../../layouts/Course.astro
---

# Controllers

AngularJS, as originally designed gave us an MVC pattern. MVC looks like this:

- Model - our data, typically JSON objects.
- View - the template - HTML5.
- Controller - a JavaScript object that mediates between the two.

So far, we have only dealt with the view (the HTML5). In this section we will start to look at controllers, and how we can use them to mediate between our view and our data.

## Creating a controller

We initialise a controller by chaining `.controller` onto our module definition. The `.controller` function receives a string, which is the name of our controller, and a constructor function, which will be used to build the controller.

A controller looks something like this:

```js
angular.module("app", []).controller("DemoController", function ($scope) {
  $scope.hello = "World";
});
```



We hook this into our template something like this:

```html
<div ng-app="app" ng-controller="DemoController">{{hello}}</div>
```


## $scope

Notice that the controller constructor receives a parameter called $scope.

$scope is a special object managed by Angular that is shared between the controller and the template. We use it to pass data abck and forth. All our data (models) are stored in $scope. We can also store helper functions here.

## The primary purpose of the controller is to initialise $scope

I'll say again: **The primary job of the controller is to initialize $scope.** Not to do AJAX (we use services for this). Not to make DOM changes (we use Directives for this). If you find your controller getting large and trying to manage too much, you probably need to reconsider. We'll look more at this later in the course.

<aside class="box">

## Should I use ng-controller?

_Help, I read a blog post that said we shouldn't use ng-controller anymore!_

Well, yes and no. What you've heard about here is what we call a component based architecture. Components are objects which ball together a view and a controller into a single object which acts like a new DOM node.

You will still need to create controllers though, and they will still work in the same way, so what we learn here is still relevant. Just bear it in mind that later in the course we will be wrapping these controllers up into larger objects.

</aside>

## Adding Helper Methods to a Controller

If we store helper methods on our controller, those will be available in the front end:

```js
angular.module('app', [])
.controller("DemoController", function($scope) {
    $scope.sayHello = function() {
        $scope.greeting = "Hello"!
    }
});
```

We hook this into our template something like this:

```html
<div ng-app="app" ng-controller="DemoController">
  <a ng-click="sayHello()">Say Hello</a>
  {{greeting}}
</div>
```



## When to create a controller

I generally expect to create one controller per unit of interaction. This means we typically create quite a lot of controllers. For example, you might have a loginFormController, a profileController, a signupController, etc. Many small controllers are better than one massive multi-purpose monolith.

## Controller scope

A controller will apply to an html5 element and all of it's children. We can nest controllers inside each other, in which case the child controller takes precedence if there is a conflict. This is decided using prototypical inheritance. More on this when we get to the section on $scope.

<div class="exercise">

## Exercise - Control yourself

We are going to add a profileController to your super advanced profile form from the previous exercise.

1. Create a profileController. Use ng-controller to add it to your profile form.
2. In your controller, set a default name, description and profile picture URL.

</div>

<div class="exercise">

## Exercise - Helper function

Extend the calculator exercise. We are going to create a function to allow us to zero all the values.

1. Create a function in your controller which zeros number1 and number2. Add it to $scope. It is now available in your front end.
2. Add a button to your DOM and use ng-click to call the function.

Remember you never need to refer to $scope in your template. $scope is always implied.

</div>

<div class="exercise">

## Further Reading

Read the controller guide here: <https://docs.angularjs.org/guide/controller>

</div>
