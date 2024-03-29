---
title: "Full Width Exercise"
section: "webdev"
exercise: "full-width"
course: "webDevCourse"
layout: ../../layouts/Course.astro
---

# Full Width Elements

A useful default. Full width elements are easy to achieve in CSS. Any block level element will take up the maximum amount of space available to it by default. You don't have to do anything to trigger this behaviour. Full width elements are used all the time in HTML layouts for headers, footers, or just the document body. We should take advantage of this useful default behaviour whenever possible.

## Exercise - Simple page

1. Create an html file and linked stylesheet.
2. Add three 3 divs to the file, one after the other.
3. Put some text in each div to hold it open and make the page more realistic. You can cut and paste this text from any source you choose.
4. Use CSS to give each div a border so you can see where it is.
5. Resize the browser, notice how the divs take up all the available horizontal space.

The structure of your page should look something like the diagram below.

%img{ src: "/images/webdev/full-width.jpg" }

The elements in the layout above take up the full width of the browser. This is useful if we want to create a responsive liquid layout that takes advantage of available screen estate. With clever use of gradients and background imagery such a layout can look rather good.

## Constraining width

Often we don't want out page to stretch and grow. In these cases the width of an element can be constrained using the width property. Elements nested inside this element will be constrained by the width of their container. This is tremendously useful as we can set the width of one wrapper element and let the elements inside find their own width.

## Exercise - Constrained width

1. Create an html file and linked stylesheet.
2. Create a wrapper div, give it a class or wrapper and set it's width to 800px in the stylesheet.
3. Nest 3 divs inside the wrapper div, give each a class.
4. Put text inside each of the three inner divs to make it more realistic. You can cut and paste this text from any source.
5. Give the wrapper div and each of the three inner divs a border. Notice how the inner divs expand to fill the wrapper div.

%img{ src: "/images/webdev/constrained-width.jpg" }

This is a useful simple layout. We commonly see this with a subtle dropshadow added to the wrapper div, and a background image on the body, making the content appear to float over a textured background, clean, simple and pure.
