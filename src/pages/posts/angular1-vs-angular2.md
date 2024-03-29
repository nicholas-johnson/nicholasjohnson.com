---
title: AngularJS vs. Angular
tags: javascript, angular
layout: "../../layouts/BlogPost.astro"
date: "2016-02-15"
preview: "AngularJS and Angular are philosophically different.

Angular 1 is at *heart* a **DOM compiler**. We write HTML, and the Angular compiler takes care of compiling it into a web application. It was a tidy little thing, and very small.


Over time Angular 1 was used to create larger and larger applications. We started arranging our code into **components**. We repurposed directives to make them serve as components, then used isolate scope to separate them one from another.


Angular 2 is the logical endpoint of this transformation. It is no longer a DOM compiler. Instead, it's an component driven architecture with batteries included."
---

AngularJS and Angular are philosophically different.

## Angular 1

Angular 1 is at *heart* a **DOM compiler**. We write HTML, and the Angular compiler takes care of compiling it into a web application. It was a tidy little thing, and very small.

It was originally designed to allow designers to create web applications without writing any code, basically a LowCode framwork, and you could actually build some pretty complex applications without any JavaScript at all (other than the angular.js import)

If we wanted extra behaviour, we extended the compiler by adding more directives which could be shared and reused.

The template drives our app. The HTML is our wiring.

Anyone with simple HTML skills can create a simple web application. It's an exercise in democracy, an attempt to make plain HTML do more.

## Angular 1 gets bigger

Over time Angular 1 was used to create larger and larger applications. We started arranging our code into components. We repurposed directives to make them serve as web components, then used isolate scope to separate them one from another.

This humble, elegant, beautiful DOM compiler was twisted and repurposed into something it was never meant to be, and this was bad.

## Angular 2

Enter Angular 2. AngularJS had started as one thing and been slowly warped into something else, and this process had left it super messy. Angular 2 was a full rebuild, a whole new syntax, a new language (Typescript), a whole new codebase, built from the ground up.

Angular 2 is the logical endpoint of the transformation towards components. It is no longer a DOM compiler. Instead, it's a component driven architecture, plus all the additional parts you might ever need to build an app.

We create components in JavaScript. Each component contains everything it needs to function. All the logic, data, behaviour and templates for a particular page element are balled up into components.

We create a tree of components. A root component (typically the app) contains child components (e.g. a header, sidebar, list of cats, etc.)

The HTML is no longer in the driving seat. In fact our HTML page may be almost blank. All the templates belong in the components.

The code is no longer readily accessible to a designer with simple HTML/CSS skills. Building a web app is once again a job for a hardcore JavaScripter.

## Upshot.

I liked AngularJS 1.4, when it was a DOM compiler. I didn't like AnguarJS 1.5, because the components were messy and not fun to use. I like Angular 2+. They represent different ways of thinking about what JavaScript should be.

AngularJS attempted to democratise web application development, allowing anyone with simple HTML skills to build a web application at the cost of a complex core. Conversely, Angular 2 puts the power back into the hands of the coder, with the application of hardcore design patterns and rigour that will be beyond most HTML designers.

Both are acceptable approaches. I half wish they could co-exist under separate names.

Angular 2 is the successor of AngularJS, but it is not an iterative change. It is a philosophical groundswell. A new way of doing things.

Onwards and upwards.
