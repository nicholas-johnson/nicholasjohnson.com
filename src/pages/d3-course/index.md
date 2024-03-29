.book_cover

# D is for Data

## D3 is for Data Driven Documents

# Selections

D3 gives you a selection library, a lot like jQuery. We can call:

```js
d3.select("div");
```

This will return a selection containing the first div on the page by CSS. Typically you want something a little more unique though, such as:

```js
d3.select(".graph");
```

This gives you an array containing a single element. If nothing matches, you get back a selection containing a null value.

## selectAll()

We can also select multiple elements at once. We can call:

```js
d3.selectAll(".graph div");
```

This will select every div inside every element with a class of 'graph'. Just like jQuery, we get back an array containing all of the matching DOM nodes.

If nothing matches you get back an empty selection.

%aside

## Null elements

select() will return a match containing null if no element matches. selectAll() will return an empty selection. D3 will generally ignore empty values when applying attributes or appending children.

## Selection chaining

We can of course also chain selections together. Say we wanted to match the divs within a .graph:

```js
d3.select(".graph").selectAll("div");
```

We might also break this chain down into parts like this:

```js
let graph = d3.select(".graph");
graph.selectAll("div");
```

Thus far D3 is quite similar to jQuery.

# Data

D3 gives us a function called data. The data function operates on a selection and receives an array of information. It then maps each element in the array to the elements in the selection array.

Each element in the selection gains a new attribute called **data**. This attribute is added directly to the DOM node, not as an HTML5 data attribute.

## Data is stored on the DOM node

The data is stored as an attribute of the DOM node object, not as a data attribute in the html. You will need to use the inspector to see it.

Given html like this:

```html
<div class="graph">
  <div></div>
  <div></div>
  <div></div>
</div>
```

The following JavaScript will add a an attribute called data to each div node. This will not be visible on the page, you'll need to use your inspector to inspect the DOM node itself.

```js
d3.select(".graph").selectAll("div").data([1, 2, 3]);
```

The first div gets data:1, the second data:2 and the third data:3.

# Attributes

We can set attributes on any element just like jQuery:

d3.select('.graph')
.selectAll('div')
.attr('border:1px solid red');

## Attributes from data

Unlike jQuery we also get access to the node's data object when we set the attribute.

```js
d3.select(".graph")
  .selectAll("div")
  .data([1, 2, 3])
  .attr("style", function (data) {
    return "width:" + data * 100 + "px;";
  });
```

This will give us a page like this:

```html
<div class="graph">
  <div style="width:100px"></div>
  <div style="width:200px"></div>
  <div style="width:300px"></div>
</div>
```

# Enter and exit

In the example above we created a div for each element in the array. our selection was the same length as the array (3).

But what happens if the length of the selection is different to the length of the array? It would be handy to be able to create new DOM nodes automatically, or remove nodes that are not needed.

The data() function returns an object which contains two sub-selections called enter and exit. We can get at these using the enter and exit functions.

The enter function returns a virtual selection containing all of the data that isn't currently on the page.

The exit function gives us a selection containing all of the nodes in the selection that are not needed given the data.

## Enter()

The enter function gives us access to a list of virtual nodes that correspond to the data that is not currently represented in the selection. If the selection is empty, it will create elements.

Starting with html like this:

```html
<div class="graph"></div>
```

We can append divs using the enter subselection. This contains a list of data that is not represented in the parent selection.

```js
  d3.select('.graph')
    .selectAll('div')
    .data([1,2,3,4,5,6]);
    .enter()
    .append('div')
    .attr('style', function(data) {
        return "width:" + data*10 + "%;"
    })
```

We will get a page that looks like this:

```html
<div class="graph">
  <div style="width:10%"></div>
  <div style="width:20%"></div>
  <div style="width:30%"></div>
  <div style="width:40%"></div>
  <div style="width:50%"></div>
  <div style="width:60%"></div>
</div>
```
