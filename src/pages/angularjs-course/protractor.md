---
title: "Protractor - AngularJS Exercise"
section: "angular"
exercise: "protractor"
layout: ../../layouts/Course.astro
course: angularJsCourse
---

# Protractor

Protractor is an end to end test framework for Angular. It gives you a JavaScript enabled web browser (Selenium) and a simple JavaScript SDK that lets you drive it. The tests themselves are typically written in Jasmine.

Protractor is the standard test harness used by the Angular core team. You should consider making use of it in your projects.

## Dependencies

Protractor runs as a Node module, so you'll need Node installed. You'll also need the Java SDK.

If you are running Windows you will also need the .Net framework.

## Browser

Tell your browser to hit specific paths and URLs, like this:

```js
browser.get("http://nicholasjohnson.com/");
```

Your browser will literally navigate to this address.

## Element

Select elements on the page, for example form fields, buttons and links. Call methods to interact with them. For example:

```js
element(by.id("gobutton")).click();
```

## Installation

Follow the instructions here to install protractor and start up webdriver:

<http://angular.github.io/protractor/#/>

Now create a config file. Save it as protractor.conf.js in your project directory.

```js
exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["selenium_specs/*.js"],
};
```

## What to test

Protractor is for end to end testing user acceptance testing. The internals of your code are a black box. You don't need to check the internals of your app, or how a particular result was achieved, you just need to know that a particular end goal has been reached.

<section class="exercise">

## Exercise - Create a Test

Now try to create a test suite for your CRUD application. You should be able to drive the browser to create a new article, then navigate to the article and verify it exists.

You can:

1. Tell the browser to navigate to a URL.
2. Get elements and click on them or type in them.
3. Get a single element using element(by.css('.some_classname')) for example and check it's content with getText().
4. Get a list of elements using element.all(by.css('.some_classname')) for example and count it's length.
