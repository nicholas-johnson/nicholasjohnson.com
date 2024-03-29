---
layout: ../../layouts/Course.astro
title: Welcome to D3
seoTitle: Intro to D3
course: d3Course
---

# AJAX

Ajax stands for:

- Asynchronous
- JavaScript
- And
- XML

It is the process whereby we pull data from a remote server via JavaScript.

Because accessing the network takes time, AJAX is asynchronous. We make our AJAX call and pass a callback function. This function will be called when the request is complete.

We can pull a JSON feed from the Internet something like this:

```js
d3.json("resource-path.json", function (error, data) {
  drawGraph(data);
});
```

Once the AJAX request has completed, the callback function will be invoked and passed the error (if there was one), and the data that was returned from the server.

We then pass this data to our graph drawing function.

## Working on a server

You won't be able to make AJAX requests when you serve your HTML directly from your file system. This would be a security risk and the browser will block it.

In order to make requests you will need a server.

You can create a simple local server with Node http-server

```sh
  npm install http-server -g
```

Start it with

```sh
  http-server
```

Your files will now be accessible on:

<http://localhost:8080>

## The Same Domain Policy

One of the big problems with AJAX is the same domain policy. This policy says that you are not allowed to make requests outside of your own domain.

There are a couple of ways to get around this:

### CORS

Cross Origin Resource Sharing (CORS) is the method natively supported by D3. This is a philosophical decision. CORS is superior technology and we should support it.

Unfortunately CORS requires a header to be set on the server marking the API as open. If you don't have access to the server, this might be a problem.

### JSONP

JSONP works cross browser. JSON ignores AJAX and simply embeds a script tag on the page containing the API call result. It's a functional hack.

There is a JSONP plugin for D3 available here:

<https://github.com/d3/d3-plugins/tree/master/jsonp>

## Exercise - The Weather

You can pull a JSON feed containing a 10 day weather forecast from here:

<http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&mode=json>

This feed implements CORS, so as long as we are hosting our HTML on a local server we should be able to access it.

Create a directory to hold your index.html and JavaScript. Start a server in that directory using http-server.

Use AJAX to pull the feed and plot the resulting data set in whatever format you see fit. Bonus points for imaginative solutions.

Optionally add scales and axes.

## Exercise - Your own data

If you have one, use AJAX to pull your own data feed from the internet.

If you don't have CORS headers available, you could use the JSONP plugin, or you could download the content and host it locally with http-server alongside your index.html.
