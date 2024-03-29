---
title: 'Semantic and Structural tags'
date: '2014-06-30 19:04:36'
legacy: true
---

The tags we have used so far all have some default styling associated with them. h1 tags are big and bold. p tags have space above and below them.

There are a whole class of tags that have little or no default styling. We use them to mark up parts of our page, and then add our own styling.

- article - an article.
- nav - a page navigation.
- header - the header of a page or article.
- footer - see above.
- aside - content related to the page, often a sidebar.
- div - an arbitrary document division that doesn't fit the above list.
- span - a smaller division that spans just a few words. Spans sit inline with the text.

## Exercise

Use the following HTML:

```html
  <!DOCTYPE html>
  <html>

    <head>
      <title>
        My Wonderful Page
      </title>
    </head>

    <body>

      <header>
        <h1>
          My Wonderful Title
        </h1>
      </header>

      <article>
        Some fabulous content
      </article>

      <footer>
        A handy footer, possibly containing some links
      </article>

    </body>

  </html>
```

Using style attributes:

1. Add a background colour to the header.
2. Add a top border to the footer.
3. Add some padding to the article.
4. Change the font for the whole document (tip: add a style attribute to the body tag)

## Further exercise

Also using style attributes:

1. Put a border around the whole body.
2. Add padding to the body.
3. Set the width of the body to 800px.
4. Add a table to the article. Set the width of the table to 100%.

Do not be tempted to use width attributes or anything like that. Only use style attributes.

%aside

## Downloads

- [Code from the board](https://www.dropbox.com/sh/za246fttv2fk3rp/AACS6kF00yGrCKJXXcbCM8hGa?dl=1)
