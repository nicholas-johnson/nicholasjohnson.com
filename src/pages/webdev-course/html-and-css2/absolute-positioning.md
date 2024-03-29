---
title: 'Absolutely Positioned Layouts'
date: '2014-06-30 19:04:36'
legacy: true
---

Absolute positioning gives us full control over the size and position of any element, but it comes at a cost. An absolutely positioned element cannot affect the position of any other element on the page, so it can’t push other elements out of the way if it expands.

If the position of an element doesn’t need to affect the position of any other elements on the page, you have an absolute positioning candidate. Declare the element position absolute and optionally give it top and left values. If you don’t need to worry about IE6, you can also give it bottom and right values.

## Exercise 1

1. Create an html file and linked stylesheet.
2. Add four divs to the page
3. Put text inside each of the divs
4. Give each div a border do you can see where it is.
5. Position each div absolutely.
6. Give each div a top and left value to create something like the layout below.

%svg{:version => "1.1", :viewbox => "0 0 200 100", :xmlns => "http://www.w3.org/2000/svg"}
%rect{fill: "#888888", :height => "80", :width => "40", :x => "0", :y => "10"}
%rect{fill: "#888888", :height => "80", :width => "40", :x => "50", :y => "10"}
%rect{fill: "#888888", :height => "80", :width => "40", :x => "100", :y => "10"}
%rect{fill: "#888888", :height => "80", :width => "40", :x => "150", :y => "10"}

## Exercise 2

1. Create an html file and linked stylesheet.
2. Add four divs to the page.
3. Give each div a width, height and border.
4. Give each div a border do you can see where it is.
5. Position each div absolutely.
6. Give each div a top and left value to create something like the layout below.

You can create any layout you like using absolute positioning, provided you don’t need the elements to jostle each other out of the way.

%svg{:version => "1.1", :viewbox => "0 0 200 140", :xmlns => "http://www.w3.org/2000/svg"}
%rect{fill: "#888888", :height => "50", :width => "50", :x => "0", :y => "10"}
%rect{fill: "#888888", :height => "50", :width => "50", :x => "40", :y => "40"}
%rect{fill: "#888888", :height => "50", :width => "50", :x => "100", :y => "10"}
%rect{fill: "#888888", :height => "50", :width => "50", :x => "100", :y => "70"}

## Exercise 3

1. Create an html file and linked stylesheet.
2. Add a header element to the page.
3. Give the header div a width of 800px and a height of 150px in your stylesheet. Give it a border.
4. Declare your header div position:relative. This will reset the origin for all absolutely positioned elements within it.
5. Put three divs inside your header. Give them classes of logo, top-nav and menu.
6. Position them appropriately using CSS and absolute positioning to create the following page header layout.

%svg{:version => "1.1", :viewbox => "0 0 400 100", :xmlns => "http://www.w3.org/2000/svg"}
%rect{fill: "#888888", :height => "90", :width => "400", :x => "0", :y => "0" }
%rect{fill: "#555555", :height => "40", :width => "50", :x => "10", :y => "10" }
%rect{fill: "#555555", :height => "20", :width => "200", :x => "190", :y => "60" }
%text{x: "20", y:"30", 'font-size' => '10' }
Logo
%text{x: "200", y:"70", 'font-size' => '10' }
Menu

## Further Exercise

Using your previous layout, add in a real horizontal navigation into the navigation section.

## When to use absolute positioning.

Absolute positioning is useful in any element where we know the height in advance. It the case of our header, we have fixed the height so we don’t need to worry about elements interfering with each other. We’re free to chuck the header’s contents around as we see fit.

The downside of absolute positioning is elements will no longer push each other out of the way so if you can't know the size of an element in advance it might not be appropriate.

%aside

## Downloads

- [Code from the board](https://www.dropbox.com/sh/e9iagwnrp7u7xrc/AABlHiXdNmewjSNsKXHRkAPYa?dl=1)
