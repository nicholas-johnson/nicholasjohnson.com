---
title: 'Nested Tags (tags inside other tags)'
date: '2014-06-30 19:04:36'
legacy: true
---

The power of tags lies in their ability to sit inside other tags. We call this nesting.

```html
<p>
  Here is my paragraph. Look,
  <em> these words are italic </em>
  and
  <strong> these are bold </strong>
</p>
```

Tags must be entirely enclosed by their parent tag. This allows us to represent our document as a tree. This will be extremely important when we come to styling our web page.

This is wrong. the tags open and close out of order. There's no way to build a clear hierarchy. The web browser will have difficulty understanding what you mean:

```html
  <p>
    Here is my paragraph. Look,
    <em>
      these words
      <strong>
        are italic
      </em>
      and
    </p>
    these are bold
  </strong>
```

## Exercise

1. Create a paragraph.
2. Place some bolded text inside it.
3. Place some emphasised text inside the bolded text. Note how this text is both bold and italic.

## Bonus points

On a piece of paper, draw the tree that represents the document you just made.

%aside

## Downloads

- [Code from the board](https://www.dropbox.com/sh/pd8sqn38wsvgafx/AABkohxgAAb4t2ZaJjDKygM1a?dl=1)
