---
title: "Typography"
date: "2014-06-30 19:04:36"
course: "webDevCourse"
layout: ../../layouts/Course.astro
---

# Typography

A little simple typography can take a boring simple page and make it beautiful.

- font-size - font size
- letter-spacing - kerning
- line-height - leading
- font-family - change the font

## Font Sizes

We can specifiy a font size in several ways:

- px - pixel sizing.
- em - the width of a letter M - legacy, do not use.
- rem - Root relative Em. The best way to do font sizing today.

we specify a font size like this:

```css
body {
  font-size: 16px;
}
```

This will set the base font size on the document to 16px, which is a nice round number.

We can set the font size on an h1 like this:

h1 {
font-size: 32px;
}

but we should avoid doing this if possible. Instead we should set a base font size on the body, then use rels to specify to size of individual elements:

```css
body {
  font-size: 16px;
}
h1 {
  font-size: 2rel;
}
```

The h1 will have font size `2 * 16px`, or `32px`. Changing the root font size will scale up all other elements specified in rels.

We can use this to create a harmonious set of font sizes that scale smoothly from small to large:

```css
h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

h4,
p {
  font-size: 1rem;
}
```

## Kerning

Kerning refers to the space between letters. It's subtle, but makes a huge difference to the attractiveness and legibility of text. Generally speaking, small text looks great with more space between the letters. Large text looks better with tighter kerning.

### Small text

When text is smaller, it is more readable and attractive if we increase the letter-spacing a little.

%p{style: 'letter-spacing:0.15em; font-size:0.5em; border:1px solid black; padding:1em;'} Small text looks better with a little more letter spacing. Here it is set to 0.15em.

### Big text

When text is larger, it looks better if we move the letters together a bit. Check out any newspaper headline.

%p{style: 'letter-spacing:-0.05em; font-size:3em; border:1px solid black; padding:1em;'} Big text looks better with tighter kerning (-0.05em)

### Ordinary text

Ordinary sized text looks better with slightly higher than default letter spacing:

%p{style: 'letter-spacing: 0.05em; font-size:1em; border:1px solid black; padding:1em;'} Ordinary text with just a little more breathing room (0.05em)

## Leading

Leading refers to the space between lines. It's a good idea to increase the default leading slightly. We do this with line-height.

Generally speaking, the larger your text, the less leading you need. Small text can be very legible with lots of leading.

## Alternative fonts

We can use any font using font stacks. The browser will use the first available font in the list, like so:

font-family: helvetica arial sans;
font-family: "Times New Roman" serif;

## Google fonts

We can also link to web fonts if we want something specific.

GEt them from here: <https://www.google.com/fonts>

## Colours

Black type on a white ground is glaring and hard to read. If you inspect this page you'll find that the type is not fully black, but instead is a dark charcoal.

## Width

Wide text is hard to read because it's difficult for the eye to track back across the screen. Aim for 80-120 characters to a line. More than 120 and you have a readability problem.

## Exercise

1. Copy and paste some of the content from this wikipedia page: <http://en.wikipedia.org/wiki/Typography>
2. Add in p tags, h1s and h2s.
3. Increase the kerning and leading a little so it looks nice.
4. Reduce the kerning on the h1s and h2s.
5. Change the text colour to dark grey, perhaps #111.
6. Make the h1s and h2s a little lighter in colour, perhaps #222.
7. Replace the default font with a Google font. You might like Open Sans or Slabo.
8. Change the width of the body tag to show around 80-120 characters.

%aside

## Downloads

- [Code from the board](https://www.dropbox.com/sh/j81r5z0yc0gg5zs/AAA97idEuJaHV5NrFX6OjYlBa?dl=1)
