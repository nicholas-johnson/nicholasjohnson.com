---
title: "Form Validation - AngularJS Exercise"
section: "angular"
exercise: "validation"
course: angularJsCourse
layout: ../../layouts/Course.astro
---

# Form Validation

The form tag is an Angular directive. When you create a form on the page, Angular will create a new scope. If you give your form a name attribute, Angular will add a variable to your new scope with that name which contains validation info.

<section class="exercise">

## Form Exercise

Either:

- Extend the CRUD exercise if you have done this or...
- Extend the profile form exercise from day one.

1. Create a form tag. Give it a name attribute. Turn off browser validation by adding the novalidate property.
2. Give each of the input elements a name and bind them to scope using ng-model.
3. Now use curly braces to output a value with the same name as the form.

Something like the following:

```html
<form name="loginForm" novalidate>
  <input name="email" ng-model="email" />
  <input name="password" ng-model="password" />
  <pre>{{loginForm | json}}</pre>
</form>
```

Use curly braces to output a scope attribute with the same name as your form and see what Angular has given you.

</section>

## Validation

Each input gets an attribute in the loginForm object. There is an $error object for the form and each input gets its own error object as well.

We use html5 form validation attributes to tell the form how to validate, for example:

- type="email"
- type="number"
- required

You can also use pattern to match against an arbitrary regex:

- pattern="https?://.+"

We also get some custom validation directives from Angular:

- ng-min-length
- ng-max-length

<section class="exercise">

## Exercise - adding validation

Add sensible validation to your form. Use an ng-if to show an error if any fields are invalid.

If you are extending your CRUD exercise, modify your submit method so that it won't submit the form unless the form is valid.

</section>

## Styling forms

Each input gets some new classes: ng-dirty is set when the field has been typed in. Don't highlight any error fields until ng-dirty is set. ng-invalid is set when the field is invalid.

<section class="exercise">

## Exercise - Style invalid fields

Use a combination of ng-dirty and ng-invalid to style fields that have invalid values, perhaps with a red border.

Use ng-valid to style fields that have valid values, perhaps with a green border.

</section>

<section class="exercise">

## Further Front End Exercise - ng-messages

ngMessages is a new module which standardises messages based on key value pairs. Read about it here: <https://docs.angularjs.org/api/ngMessages/directive/ngMessages>.

You can use ngMessages to display form errors based on the $error object.

Do this now. Display errors at the top of the form.

Optionally display messages above each invalid form element.

</section>

<section class="exercise">

## Further Hardcore Coder Exercise - Custom validation

We can provide custom form validation with a directive.

The form directive binds a controller to the form. This controller has a method $setValidity. We can get this controller in the link function of a directive as the 4th parameter. Call this method to manually invalidate the form based on the value of an element.

We can get the value of an element using el.val();

Here's a validator directive that always makes the form be invalid.

```js
angular.module("app", []).directive("myValidator", function () {
  return {
    require: "ngModel",
    link: function (scope, el, attrs, controller) {
      scope.$watch(attrs.ngModel, function () {
        controller.$setValidity("always invalid", false);
      });
    },
  };
});
```

Create a custom validator that checks the password against a set of common passwords:

```js
["password", "passw0rd", "mypassword"];
```

</section>
