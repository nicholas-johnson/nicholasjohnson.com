---
title: "Attributes Exercise"
section: "webdev"
exercise: "attributes"
course: "webDevCourse"
layout: ../../layouts/Course.astro
---

# Attributes

Some things like an `<h1>` or `<p>` make sense on their own. A section is either a paragraph or it isn't. Some types of tag though need extra information. A hyperlink for example needs to know where to link to. An image needs to know what file to display.

We can change the behaviour of our elements using HTML attributes. These go inside the first angled braces.

For example, here is a hyperlink (`<a>` stands for anchor, which was the old name for a hyperlink):

```html
<a href="http://www.google.com">Link to Google</a>
```

Whoa there mister, that’s a funny looking opening `<a>` tag. Yes, it has extra text inside it to say where the link should point to. We call this an Attribute.

`href` is short for hypertext reference in case you were wondering.

The `<a>` tag must have an `href` attribute to say where it should point to, otherwise it can't work and will just sit there crying. We’ve put the place we want the link to link to right there inside the `<a>` tag. It’s an `href` attribute that tells the `<a>` tag how to work.

Lots of tags have attributes you can use to change their behavior or appearance. Images have a `src` attribute. Most tags can have `style` and `title` attributes if you want. We’ll find out more about this later.

<div class="exercise">

## Exercise - Attributes

Extend the previous exercise. There were links to wikipedia in the document. Convert these into actual hyperlinks. Verify they point to the right place.

## Further Exercise - a new tab

Add another attribute to your a tags to make them open in a new tab. The attribute is:

```html
target="_blank"
```

Try this now. Click the link. Does it open in a new tab? You should be a little bit careful what external sites you like to, but Wikipedia is probably safe.

</div>

Now let's look at some images!
