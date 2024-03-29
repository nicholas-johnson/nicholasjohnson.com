---
layout: ../../layouts/Course.astro
title: More on Binding
seoTitle: Data Binding with AngularJS
course: angularJsCourse
---

# More on binding

We can bind an attribute of $scope to anything in the DOM, an element, an attribute, a class name, even a portion of an attribute value.

## Binding to an attribute

Say we have a value bound to an input element. We could use that value to form part of a style attribute:

```html
<input ng-model="color" />

<p style="color: {{color}}">Hello</p>
```

## Binding to a class

We can use values in scope to construct a class attribute using the ng-class directive. A class attribute can have many values, so we pass an object and all values that evaluate to true are included in the compiled class.

```html
<body ng-class="{red: color=='red', blue: color=='blue' }"></body>
```

## Binding visibility

We can conditionally show and hide elements using ng-show.

```html
<input type="checkbox" ng-model="happyCat" />

<div ng-show="happyCat">Cat is happy</div>
<div ng-show="!happyCat">Cat is grumpy</div>
```

<div class="exercise">

## Exercise - Profile Widget

You are an entrepreneur, creating the next LinkedIn. Users of your awesome service have said that they would like to be able to choose a profile picture just by entering a URL.

We are going to allow people to type in a profile picture url and have that picture appear immediately. Create a field and bind it to a model called something like "avatarUrl".

Now use the avatarUrl as the src attribute of an img tag, like so:

```html
<img src="" />
```

</div>

<div class="exercise">

## Exercise - Profile form

Extend your app so you can type in your name. This will update the the alt text on the image, and an h2 somewhere on the page.

Add in a description textarea. This will update the a paragraph of description text under the image.

If you were to back this with an API, this could be a real site component.

</div>

<div class="exercise">

## Exercise - Make the form optional

We are going to hide the edit fields when they are not needed so that we either see the edit form or the profile.

Add in a checkbox. Bind it using ng-model. When the checkbox is checked, the edit fields are visible. When is is not checked, the edit fields are hidden. Use ng-show to make this work.

</div>

<div class="exercise">

## Optional Exercise - Tabs

Use ng-show to create a simple navigation. Your page will contain several sections, each with an ng-show attribute. Choose a horizontal or vertical nav. Use ng-click to set the value of a model and show the sections.

</div>

<div class="exercise">

## Further reading

- input[checkbox] - <https://docs.angularjs.org/api/ng/input/input%5Bcheckbox%5D>
- ngClass - <https://docs.angularjs.org/api/ng/directive/ngClass>
- Check out the other built in Angular directives here: <https://docs.angularjs.org/api/ng/directive>

</div>
