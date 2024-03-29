---
title: Yeoman
course: nodeCourse
slug: yeoman
layout: ../../layouts/Course.astro
---

# Yo Yeoman

Yeoman is a code generator. You can use it to bootstrap an entire project, or you can use subgenerators to make individual units of code, perhaps a single controller, JavaScript file or view.

You can read more about Yeoman here: <http://yeoman.io/>

In this section we're going to use the Yeoman Express generator to build an Express project.

## Installing Yo

First install Yeoman. As you would expect, we install it with npm. We're going to use the -g global flag because we want to call yeoman from outside of a project.

```js
  npm install -g yo
```

=code(code, :bash)

## Installing a generator

Next we'll need a generator. You can find a list of them here: [yeoman.io/generators/](http://yeoman.io/generators/). Yeoman generators all start with the word generator, for example express-generator or angular-generator.

Create a project directory to hold your code. Now install the express generator. We'll make this local to our project in case we need a sub-generator again later:

```js
  mkdir myproject
  cd myproject
  npm install generator-express
```

=code(code, :bash)

## Build your Express application

Create an app using the express generator. At a command line type:

```js
yo;
```

=code(code, :bash)

Choose the Express generator. Accept the defaults. Choose Jade for templates. As a build tool, choose gulp (or grunt if you prefer an old friend). For CSS choose SASS. Optionally choose MVC.

## Using SASS

If you choose SASS you'll probably need the compass Ruby gem. Install Ruby if you don't already have it. For Windows this is a double click install:

<http://rubyinstaller.org/downloads/>

test if from a terminal using:

```js
ruby - v;
```

=code(code, :bash)

Now install the gem. From a terminal:

```js
  gem install compass
```

=code(code, :bash)

## Starting the server

We start the server using gulp:

```js
gulp;
```

=code(code, :bash)

## View in the browser

We can now visit <http://localhost:3000> to view our app in all it's glory.

## Exercise - Create an Express scaffold with Yeoman

Use yo to generate a simple express site. Fire it up with by running Gulp.

- Try to add another route

## Exercise - Gulp

Gulp is watching your project. Every time you change a view file, your browser will refresh.

Make a change to the SASS file and watch the browser reload automatically. This is a massive productivity gain, especially with multiple screens.

You ay need to install the livereload Chrome plugin.

## Exercise - Modify a view

Look in your views folder. You'll find a file called layout.jade. Jade is an html preprocessor with semantic indentation. You don't need to use angled braces or close your tags, it handles that for you.

Read more on Jade here: <http://jade-lang.com/>

1. Try to create a header and footer in your layout.jade file that will appear on every page.
2. Create an about us page url with content.
