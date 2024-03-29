---
layout: ../../layouts/Course.astro
title: Append and Attr
seoTitle: Append and Attr in D3
course: d3Course
---



# Append and Attr

We can use D3 to add elements and attributes to our DOM.

Having selected an element or elements, we can use append to add an element to it, like so:

```js
  d3.select('body').append('div');
```





## Attr()

We can set attributes on any element using the attr function:

```js
  d3.selectAll('div').attr('title', 'Dave the div');
```





## Style()

It is common to want to set the style attribute of an element. We can do this using the [.style() function](https://github.com/mbostock/d3/wiki/Selections#style).

```js
  d3.selectAll('div').style('color', 'red');
```





You can set several styles at once by passing a JSON object.

```js
  d3.selectAll('div').style({color: 'red', background: 'red');
```





## Text()

We can also set the text content on any element using the text function:

```js
  d3.selectAll('div').text('Hello there!');
```





## Remove()

We can also remove elements from the page using .remove()

```js
  d3.selectAll('div').remove();
```





We will need to make use of all of these functions when we start making charts.




## Easy Exercise - Add an element

1. Use the append function to add an a tag to the page.
2. Use the style function to make it big and red.
3. Use the attr function to set the href attribute and point it somewhere inappropriate.




## Harder Exercise - Hand code a chart

We can create a simple bar chart out of styled divs. We just need to give the divs a style element that specifies a background, width and height.

1. Use D3 append to create several divs on the page, one at a time. Use the style function to set a different width on each of them.
2. Use the text function to add a label to each div.
2. Now select all the divs using selectAll and use the style function again to set a height and background colour.

You should be able to accomplish this in around 10 lines of JavaScript.

Your final chart should look something like this:

<div style= 'padding:10px; width:20%; margin:1px 0; color:white; background:red'>20%</div>
<div style= 'padding:10px; width:40%; margin:1px 0; color:white; background:red'>40%</div>
<div style= 'padding:10px; width:80%; margin:1px 0; color:white; background:red'>80%</div>
<div style= 'padding:10px; width:60%; margin:1px 0; color:white; background:red'>60%</div>
<div style= 'padding:10px; width:90%; margin:1px 0; color:white; background:red'>90%</div>
