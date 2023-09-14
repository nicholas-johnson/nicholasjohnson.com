---
title: "More Tags Exercise"
section: "webdev"
exercise: "more-tags"
course: "webDevCourse"
layout: ../../layouts/Course.astro
---

# More practice with markup

We have many more tags at our disposal:

- `<h1>` - Top level heading
- `<h2>` - second level heading
- `<h3>`, `<h4>`, `<h5>`, `<h6>` - well, you can guess. Heading level 3, 4, 5, etc.
- `<p> `- for paragraphs
- `<em>` - Emphasis (usually italic)
- `<strong>` - Important, (usually bold)
- `<nav>` - navigation elements
- `<form>` - forms
- `<header>`, `<footer>` - headers, footers
- `<article>` - an article
- `<section>` - a section in an article
- `<img>` - an image
- `<ol>`, `<ul>,` `<li>` - ordered list, unordered list, list item
- `<a>` - an "anchor" tag, which is another way of saying hyperlink. It's a link.

And quite a few more. This list might look intimidating at first, but remember when I talked about **Semantic HTML**? These are all things that can be used to express the meaning of a page. This bit is a header, this is an article, this is a list. It actually all makes sense, and because it makes sense it's easy to learn.

<div class="exercise">

## Execise - Lets Mark Up a Real Document!

Start with the following text document. You can just copy paste:

```text
Types of HTML

HTML has had many incarnations over the years. All of these are similar, but successive refinements have been added over time to cope with our evolving understanding of the best way to make a website. Three types of HTML are in use today.

HTML4

HTML4 is the oldest type of HTML in use today. Its very popular and still a good choice. HTML4 has a fairly loose syntax. Closing tags are often optional, so paragraphs for instance are automatically ended when a new paragraph is started.

A loose syntax is good for amateur developers but not so great if you want to achieve a specific result across browsers since it makes it harder for browsers to accurately guess at what you mean. To counter this problem, XHTML was introduced

www.wikipedia.org/wiki/HTML4

XHTML

XHTML stands for eXtensible Hypertext Markup Language. It’s actually a specific dialect of XML which is a generalised markup language. The main difference between XHTML and HTML4 is that all tags, once opened, must be closed. There are also some restrictions about what tags can be nested inside each other. These restrictions are sensible and you probably won’t run up against them.

The browser will make no assumptions and will allow you your mistakes. Aside from this, all the tags are the same This is the language used by most professional web developers.

www.wikipedia.org/wiki/Xhtml

HTML5

HTML5 is the current HTML specification. It is still a fairly loose term and refers to a number of related technologies. It takes the best features of HTML4 and adds a number of extra tags, such as the header tag, the section tag and the video tag. Many features of HTML5 can be used today.

www.wikipedia.org/wiki/Html5
```

Mark it up as follows. We’re using a few more tags this time. Do view the results in your browser as you go so you can see what’s changing.

1. Use h1 start and end tags `<h1> </h1>` to demarcate the “Types of HTML” heading
2. Use h2 start and end tags `<h2> </h2>` to demarcate the subheadings.
3. Mark up the paragraphs so they display correctly using the `<p> </p>` tags
4. Make the text “best way” appear in bold using the opening and closing Strong tags `<strong> </strong>`
5. Make the word "incarnations" appear italic by wrapping it in opening and closing `<em> </em>` tags. Em stands for Emphasis.

</div>
