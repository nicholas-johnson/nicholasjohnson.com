---
layout: ../../layouts/Course.astro
title: Axes
seoTitle: Use of Axes in D3
course: d3Course
---

# Axes

Axes are a common feature of graphs, so D3 gives us a helpful library of features to help us generate them.

Assuming we have a scale called xScale, we can generate an axis using something like:

```js
let xAxis = d3.svg.axis().scale(xScale);
```

## Plotting the axis

The axis is complex, consisting of many paths and text elements, so we need to keep it together. The easiest way to do this is with a group

```js
let graph = d3.select("body").append("svg");

graph
  .append("g")
  .attr("transform", "translate(0, " + (height - 30) + ")")
  .call(xAxis);
```

## Limiting the ticks

You might find your axis is too dense to read. You can make it a little more same using the ticks function:

```js
let xAxis = d3.svg.axis().scale(xScale).ticks(4);
```

D3 is smart about allocating the ticks. It will try to pick whole numbers where possible.

## Moving the axis about

We can move the axis and everything inside it by moving the group. We do this with the transform attribute.

This attribute allows us to move, scale, skew or rotate the coordinate space within the group. Here we will translate down by 300 units:

```js
graph.append("g").attr("transform", "translate(0, 300)").call(xAxis);
```

If we are clever we will have variables set up for width, height and padding. This will help us be consistent with our axes and data.

## Exercise - Draw an axis on your chart

Pick your favourite chart. Draw an x axis based on the xScale.

For bonus points, set up variables for width, height and padding. Use these to set up the scale on your graph. This will automatically shift everything around based on your data.

Padding gives you space to place your axis. Shift your axis into position using your height and padding variables.

Remember you can still see SVG elements that have fallen out of the viewport using Chrome inspector.

## Exercise - Draw a vertical axis

Create a vertical axis. You can do this by appending .orient("left") to your axis function.

Draw it in your SVG and try to move it into position.

## Further Exercise - Check out the API

The Axis API is rich and extensive. Read up on it here:

<https://github.com/mbostock/d3/wiki/SVG-Axes>

Have a play and see if you can produce something beautiful.

## Advanced exercise - Axis transitions

It is possible to apply transitions to an axis when the data changes. Check out the chained transitions example here:

<http://bl.ocks.org/mbostock/3903818>

Extend the events exercise from earlier and have a go at transforming the axis in response to the data.

This is going to involve some tinkering.
