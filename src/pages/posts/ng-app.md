---
title: 'How does ng-app work?'
tags: javascript, angular
layout: "../../layouts/BlogPost.astro"
course_sidebar: :angular
date: '2015-06-02'
---

Today's Angular is the angularInit function. This is the function which makes ng-app work.

tldr; It selects elements, discovers the root module name, and then shells out to bootstrap, sending it the element and the module.

Here it is:

```js

  function angularInit(element, bootstrap) {
const elements = [element],
    appElement,
    module,
    names = ['ng:app', 'ng-app', 'x-ng-app', 'data-ng-app'],
    NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;

function append(element) {
  element && elements.push(element);
}

forEach(names, function(name) {
  names[name] = true;
  append(document.getElementById(name));
  name = name.replace(':', '\\:');
  if (element.querySelectorAll) {
    forEach(element.querySelectorAll('.' + name), append);
    forEach(element.querySelectorAll('.' + name + '\\:'), append);
    forEach(element.querySelectorAll('[' + name + ']'), append);
  }
});

forEach(elements, function(element) {
  if (!appElement) {
    const className = ' ' + element.className + ' ';
    const match = NG_APP_CLASS_REGEXP.exec(className);
    if (match) {
      appElement = element;
      module = (match[2] || '').replace(/\s+/g, ',');
    } else {
      forEach(element.attributes, function(attr) {
        if (!appElement && names[attr.name]) {
          appElement = element;
          module = attr.value;
        }
      });
    }
  }
});
if (appElement) {
  bootstrap(appElement, module ? [module] : []);
}
  }

```

We can see right away that we have an array of names, like so:

```js
names = ['ng:app', 'ng-app', 'x-ng-app', 'data-ng-app']
```

These are the attributes that Angular will respond to, letting us do the familiar angular initialisation:

```js
  <body ng:app>
  <body ng-app>
  <body x-ng-app>
  <body data-ng-app>
```

In addition, we also have the following class selector.

```js
forEach(element.querySelectorAll('.' + name), append)
```

which allows us to initialise by class

```js
  <body class="ng:app">
  <body class="ng-app">
  <body class="x-ng-app">
  <body class="data-ng-app">
```

## Next we find the module

We then have this bit of code which finds the name of the module:

```js
module = attr.value
```

## Finally we bootstrap

Once we have our element and module name, we can bootstrap the app like so:

```js
if (appElement) {
  bootstrap(appElement, module ? [module] : [])
}
```
