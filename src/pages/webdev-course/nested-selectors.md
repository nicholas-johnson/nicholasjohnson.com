---
title: "CSS Classes Exercise"
section: "webdev"
exercise: "nested-selectors"
course: "webDevCourse"
layout: ../../layouts/Course.astro
---

# Teaming Up Selectors

The final thing we need to know before we move on to creating some web pages of our own is how selectors chain together to make more complex selectors. This is the last bit of pure theory we’ll learn before moving on to make some real websites.

If we put 2 selectors together with a space between them, we narrow our focus. The selectors act like filters. The first selector narrows the focus a bit. The second selector can then only choose parts of the document that the first selector has already chosen.

Take the following HTML.

```html
<html>
  <head>
    <title>Super Selector Tag Team</title>
  </head>
  <body>
    <header>
      <h1>A big title makes an impact</h1>
      <p>a subtle <strong>strapline</strong> is great</p>
    </header>
    <div class="main">
      <p>some body text</p>
      <p>and some <strong>more</strong></p>
      <p>and the <em>last line</em></p>
    </div>
    <footer>
      <p class="copyright">&copy; 2011</p>
      <p class="contact"><strong>Contact</strong> us</p>
    </footer>
  </body>
</html>
```

We can create a stylesheet and link it as before. Let's choose only the strong tag in the .header

```css
header strong {
  font-weight: normal;
  color: #666;
}
```

The strong element in the header has changed, but the strong element in the body has not. The first selector in the style rule has narrowed the focus to the header div. The second selector has further narrowed it to strong elements inside the header.

## Exercise - Nested Selectors

1. Write a style rule that makes both paragraphs in the footer small and grey
2. Write a style rule that makes the word contact black and italic.
3. Write a rule that makes the h1 twice the size
4. Write a rule that makes the word "more" big and red.
5. Underline the word "strapline"

## eBay Analogy

Some people find it helps to think of CSS rules as filters. If I want to buy a new 17 inch unibody macbook pro on ebay, I don’t look through the complete list of all auctions. That would take many many years. Instead I do a search for macbook. Ebay then returns a sublist of everything matching that keyword. It’s no longer the whole set, it’s a subset of the whole set.

But wait, now I have a whole list of screen protectors, cases, cleaning wipes, etc, etc, so I narrow again, this time by price. I say to eBay: take that sublist you previously generated and give me a sub-sub-list containing only the items of £500 or more. Now I only see the thing’s I’m interested in.

CSS chaining is like this. You narrow, then you narrow again. You filter a sublist of elements, then you filter a sub-sub-list and a sub-sub-sub list if you like.

Great job. There is plenty more to CSS, but this is all you will need to be pretty great at most things. If you’d like to go further, you could take the advanced CSS course.

Onwards and upwards!
