---
title: 'Lists'
description: 'HTML and CSS training course in London or Brighton UK - Learn HTML5 and CSS3'
date: '2014-06-30 19:04:36'
legacy: true
---

We can create bulleted or numbered lists in html easily using the ul, ol and li tags.

- ul - unordered list (with bullets)
- ol - ordered list (usually with numbers)
- li - a list item within a list

Here's an example of an unordered list:

```html
<ul>
  <li>Cats</li>
  <li>Bats</li>
  <li>Hats</li>
</ul>
```

Note that every time we open a tag, we close it again in the correct order. Tags are always completely enclosed in their parent tags.

## Exercise

1. Create an unordered (bulleted) list on your page. Bonus points for imagination.
2. Change it to an ordered list.

## Sublists

We can nest lists inside other lists to get sublists, like so:

```html
<ul>
  <li>Cats</li>
  <li>
    Bats
    <ul>
      <li>Fruit</li>
      <li>Pipistrel</li>
      <li>Vampire</li>
    </ul>
  </li>
  <li>Hats</li>
</ul>
```

## Exercise 2

1. Add a sublist.
2. On a piece of paper, draw the tree diagram that represents your code.
3. Optionally add a sub-sublist.
4. Draw the new tree diagram and ask me to check it.

## Uses of lists

Lists are most commonly used in HTML for navigation. When you think about it, a site navigation is really just a list of hyperlinks.

With CSS we can style a list any way we like, as buttons, as a horizontal strip, as dropdowns, as a header, as a hierarchical sidebar. We'll see more on this later.

%aside

## Downloads

- [Code from the board](https://www.dropbox.com/sh/5w9rmfnxyvnwpz4/AACie1GJPtu0WIF-ihUC2Gima?dl=1)
