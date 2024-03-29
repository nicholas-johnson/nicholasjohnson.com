---
title: Components
course: reactCourse
layout: ../../layouts/Course.astro
---

# Components

So far we have created elements and appended them to the DOM. We could do this with jQuery. The real strength of React is it's component driven architecture. Components are objects that let us ball up templates with behaviour.

A component may have a render method, and perhaps other methods too.

Here is a useful component which displays some cheese.

```js
CheeseComponent = React.createClass({
  render: function () {
    return React.DOM.h1(null, "Red Leicester");
  },
});
```

We can use this component to build a react element using the regular React.createElement method, like so:

```js
var node = React.createElement(CheeseComponent);
```

We can then render this into the DOM using React.render

```js
var el = document.getElementById("example");

React.render(node, el);
```

## Passing props into a component.

As you might expect, we can pass props into a component. Let's rewrite our component to receive some cheese and

## Further Reading

- <http://blog.reverberate.org/2014/02/react-demystified.html>
- <https://quickleft.com/blog/understanding-the-difference-between-react-elements-and-components/>
