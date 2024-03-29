---
title: 'HTML Attributes'
date: '2014-06-30 19:04:36'
legacy: true
---

# Attributes

We can change the way many tags behaved using attributes.

For example, we can create a hyperlink using the a (anchor) tag like so:

```html
<a> A Hyperlink </a>
```

This is nice, but our hyperlink doesn't currently point at anything. If you click it you will go nowhere. We can fix this using an href (hypertext reference) attribute:

```html
<a href="http://www.google.com"> A Working Hyperlink </a>
```

You can have as many attributes as you like separated by a space:

```html
<a href="http://www.google.com" title="Search on Google">
  A Working Hyperlink
</a>
```

## Exercise

1. Create a hyperlink that points to yahoo.co.uk
2. You can add more than one attribute. Add a title attribute to your hyperlink. Now when you mouse over it you will see a little popup.

## Don't use styling attributes

There are a great many attributes, some of which affect the behaviour of a tag, and some of which affect it's appearance. Generally speaking you should not use attributes to change the appearance of an element.

You'll find some tutorials online suggesting attributes such as:

- color
- background-color
- cell-padding
- border

Never use these. We'll see why, and we'll see the correct solution to styling later when we get to CSS.

%aside

## Downloads

- [Code from the board](https://www.dropbox.com/sh/bpr3t2ie70thyrj/AABT0lHa_0d-EYwwSvvptBeva?dl=1)
