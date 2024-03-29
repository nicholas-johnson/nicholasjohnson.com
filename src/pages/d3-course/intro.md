---
layout: ../../layouts/Course.astro
title: Welcome to D3
seoTitle: Intro to D3
course: d3Course
---


# Welcome to D3

D3 is an extremely interesting data visualisation library by Mike Bostock.

It provides you with a sensible suite of tools to quickly produce any kind of chart you can imagine. D3 does not limit you to specific chart types, it allows you to create elements in response to data. This is where it gets its name D3 - Data Driven Documents.

## Selections

D3 allows you to select and manipulate elements on the page as you would expect.

Rather wonderfully, **D3 allows you to select and manipulate elements that are not yet on the page, but should be, and also elements that are on the page, but which are no longer needed.**

When your data changes, D3 provides you with virtual selections containing the DOM nodes you should add.

## Transitions

D3 provides you with a toolkit for adding animation to your visualisation. You can morph between two datasets for example, or make an element grow.

The following code will transition an element from 0 to 100 units high over 1000 ms.

```js
d3.select("rect")
  .attr("height", 0)
  .transition()
  .duration(1000)
  .attr("height", 100);
```

## Function chaining

Everything in D3 is achieved using function chaining. We create, modify and configure objects and selections by chaining functions one after the other. This gives a clear logical flow of information through the system.

## Scales

Scales are helper functions that allow us to map data into coordinate space in our graph.

All the work of working out how tall a bar should be to fit the space, or where a label should be drawn is extracted into a scale function. Change the scale and everything changes.

## AJAX

D3 comes with a sensible AJAX library for pulling data from the internet. You can pull and automatically parse XML, CSV, TSV and JSON.

There's also support for mapping arbitrary document formats to JSON.

## Layouts

Layouts are friendly helper functions for transforming data into formats that are easy to display.

For example:

```js
d3.layout.pie();
```

will provide you with a function that will map an array of values into an array containing start and end angles for a pie chart.

## SVG

D3 will let you create any HTML you like, but it works best with SVG.

SVG is a library that lets you draw vector graphics right into your web page. It works in all modern browsers down to and including IE9.

D3 contains many useful functions to make working with SVG a joy forever.
