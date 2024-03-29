---
title: "Assets"
course: "railsCourse"
layout: ../../layouts/Course.astro
---

# Assets and SCSS

Assets are files which belong to the web page, such as images, JavaScripts and CSS files. They live in the app/assets folder.

The asset pipeline is the conduit through which you import stylesheets, JavaScript files, images, etc. They can be served individually or else precached, minified, concatenated, etc.

In development, assets are served individually. This is set in config/environments/development.rb with this line:

```js
config.assets.debug = true;
```

## Asset Digest

A Digest is a string which is added to the end of your asset filename. It's created by hashing the file. If any of your files change, the digest is updated, and so the filename is updated. This gets round caching issues.

Turn on digests like this:

```js
config.assets.digest = true;
```

Now view source. You'll see all your assets are compressed.

## Asset Compilation

Let's have a look at asset compilation:

By default your development server will serve all your assets as separate files. Turn off asset debugging in config/environments/development.rb by modifying the line:

```js
config.assets.debug = true;
```

to:

```js
config.assets.debug = false;
```

Restart your server to see the results.

## Namespacing CSS

Because all your stylesheets are imported with each request, you have to be clever not to apply page specific rules everywhere. I typically add the controller and model as a class to the body element. This allows me to namespace my SCSS.

app/helpers/application_helper.rb is a module that's imported by all your views. You can define helpful methods in it. The following method will create a string based on your controller, action, and optionally a version parameter. Add it to the application helper, or modify it your purposes.

```js
  def body_class
    bc = []
    bc << params[:controller].gsub('/', ' ')
    bc << params[:action]
    if @version
      bc << "version_#{@version}"
    end
    bc.join(' ')
  end
```

Now in your app/views/layouts/application.html.erb file, add the new class:

```js
  <body class="<%= body_class %>" >
```

In your SCSS files you can now write things like:

```js
  .home.index {
    h1 {
      font-size:5em;
    }
  }
```

## Exercise - Compiling SCSS

In this section we will look at scss, Look in the app/assets/stylesheets folder, you'll find a set of scss files in there which you can modify. If you create additional files they are automatically included.

1. Create a stylesheet called header.css.scss.
2. Add code to style the header on the page. Perhaps add a pretty pink background or something.
3. Verify the header has been styled.
4. View the page source in your browser. Look for the link tags that include the stylesheets.

Optionally style the footer.

## Exercise - Sprockets

1. Now edit config/environments/development.rb.
2. Set config.assets.debug = false
3. Restart the server (you need to restart if you change configuration settings)
4. View the page source. You should see all the assets rolled into a single file.

## Digest

1. Edit config/environments/development.rb.
2. config.assets.digest = true
3. Restart and view the page source. See the filename has been rewritten to defeat caching.
