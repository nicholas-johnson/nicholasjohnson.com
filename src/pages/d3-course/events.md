---
layout: ../../layouts/Course.astro
title: Events
seoTitle: Handling Events in D3
course: d3Course
---

# Events

We can listen out for user events using the d3 on() method.

Say we have a list of rect elements, we can listen for an event and assign a callback, just as we might with jQuery.

Unlike jQuery though, we have access to the data for that element, and also the iterator.

You could use this to show a label on click for example.

```js
d3.selectAll("rect").on("click", function (data, i) {
  // do something here
});
```

## Event types

Many event types are supported including:

- "click"
- "mouseover"
- "mouseout"
- "submit"

## This

We also have access to the clicked on element via the function's "this" variable. This will contain a plain DOM node, which we can then convert to a D3 selection by passing it to the d3.select function.

```js
d3.selectAll("rect").on("click", function (data, i) {
  let rect = d3.select(this);
  rect.attr("fill", "red");
});
```

We can then apply any function we like.

## Getting the mouse position

We can get the mouse position for an event using the d3.mouse function.

```js
let mousePos = d3.mouse(this);
// returns x,y coords [25, 16]
```

## Exercise - Display different data on click

Create 3 little button elements (you can style these nicely if you like). Use the on() function to listen out for a click. When a click is detected, redraw your favourite chart using a different data set.

Bonus points for animation.

## Further Exercise - Highlight a segment

When a click is detected on an element in your graph, highlight it by displaying the data values next to it.

You can display these values using a text element in the SVG, or in a div underneath the SVG element.
