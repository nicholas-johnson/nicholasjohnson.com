---
title: "Lists Exercise"
section: "webdev"
exercise: "entity-references"
course: "webDevCourse"
layout: ../../layouts/Course.astro
---

# Entity References

HTML has a limited set of allowed characters. This is due to the way that HTML has evolved to be displayed on various different computers, fonts and character encodings. If we want to use special characters in HTML we need to use entity references. For example, to display a copyright sign we need to use the entity &copy;. Note the semicolon.

| Value               | Entity Reference | Output  |
| ------------------- | ---------------- | ------- |
| Copyright sign      | &amp;copy;       | &copy;  |
| Pound sign          | &amp;pound;      | &pound; |
| Ampersand           | &amp;amp;        | &amp;   |
| Left Double Quotes  | &amp;ldquo;      | &ldquo; |
| Right Double Quotes | &amp;rdquo;      | &rdquo; |
| No Breaking Space   | &amp;nbsp;       | &nbsp;  |

There are many more, far too many to list here. If you need a specific reference, Google “html entity reference” to find a very long list.

## Exercise - Entity References

Use this document:

```html
"Time and Tide wait for no man." Copyright Chaucer 1390
```

1. Enter the document and save it as html.
2. Increase the text size of the quote.
3. Replace the word “and” with an ampersand character.
4. Wrap the quote in pretty double quotes.
5. Replace the word copyright with a copyright character.
6. Put the quote in a nice serif font like Georgia.
7. Change the colour of the quote to a pale grey
8. Align the quote in the center of the page.
