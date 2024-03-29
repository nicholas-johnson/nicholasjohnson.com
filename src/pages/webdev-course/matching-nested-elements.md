---
title: 'Matching elements inside other elements'
date: '2014-06-30 19:04:36'
legacy: true
---

The final thing we need to know before we move on to creating some web pages of our own is how selectors chain together to make more complex selectors.

If we put 2 selectors together with a space between them, we narrow our focus. The selectors act like filters. The first selector narrows the focus a bit. The second selector can then only choose parts of the document that the first selector has already matched.

Say we have html like this:

```html
<header>
  <p>cats</p>
</header>

<footer>
  <p>bats</p>
  <footer></footer>
</footer>
```

If we want to select every paragraph we might write

```js
  p {
    color: red;
  }
```

If we only wanted the paragraph in the footer we might write instead:

```js
  p footer {
    color: red;
  }
```

## Exercise

Use the following HTML. Copy it into a file and save it as index.html. Don't worry that it looks a little long, it's just more of what you've already covered:

```html
<html>
  <head>
    <title>Super Selector Tag Team</title>
  </head>
  <body>
    <header>
      <h1>A big title makes an impact</h1>
      <p>
        a subtle
        <strong> strapline </strong>
        is great
      </p>
    </header>

    <article>
      <p class="first">some body text</p>
      <p>
        and some
        <strong> more </strong>
      </p>
      <p>
        and the
        <em> last line </em>
      </p>
    </article>

    <footer>
      <p class="copyright">&copy; 2011</p>
      <p class="contact">
        <strong> Contact </strong>
        us
      </p>
    </footer>
  </body>
</html>
```

## Exercise 2

Create a stylesheet and link it to the html using a link tag. Enter the following content:

```js
  header strong {
    font-weight:normal;
    color:#777;
  }
```

The strong element in the header has changed, but the strong element in the body has not. The first selector in the style rule has narrowed the focus to the header div. The second selector has further narrowed it to strong elements inside the header div.

## Exercise 3

1. Write a style rule that makes both paragraphs in the footer small and grey
2. Write a style rule that makes the word contact black and italic.
3. Write a rule that makes the h1 twice the size
4. Write a rule that makes the word "more" big and red.

## Exercise 4

Attempt the combination exercises in the downloads folder.

%aside

## Downloads

- [Code from the board and exercises](https://www.dropbox.com/sh/uqq87yygnn0hhgb/AACBGxHoX5GOyaFkxC_iATsXa?dl=1)
