---
layout: ../../layouts/Course.astro
title: welocome To AJAX
seoTitle: How to do AJAX with JQuery
course: javascriptForProgrammers
unpublish: true
---

# Welcome to AJAX

AJAX is the amazing technology that allows you to transfer data to and from your server direct from JavaScript, updating it in real time without any need for a page refresh.

This is enormously cool.

## A Misnomer

AJAX stands for Asynchronous JavaScript And XML, but it's actually something of a misnomer, since we seldom use XML any more. More commonly we will find ourselves using JSON, or HTML fragments.

Unfortunately, AJAJ is not a great acronym, and AJAH sounds like a door, so we're stuck with AJAX for now (which has the nice side effect of making us sound cool and awesome).

<aside class="box">

## Working over http

We can't do AJAX on or local file system, that would be a security risk. In order to do AJAX, you need to work on a server.

You can use IIS or Apache, or your could create a server using node-server.

</aside>

# Talking to the server using jQuery

In this exercise, we will use jQuery as a wrapper around the XMLHttpRequest object. We will get greater cross browser compatibility, and a nice syntax which hides the rough edges.

When performing an AJAX request using jQuery, we have a number of wrapper functions to call on.

## $.ajax

$.ajax is the most flexible. It allows us to perform an XMLHttpRequest with a nice syntax. We can easily assign callbacks to each stage of the process, and can perform any type of request.

## $.getJSON

$.getJSON is less flexible. It allows us to pull a json object, which is automatically converted to a JavaScript object which we have access to. Powerful in it's simplicity.

## Documentation

The jQuery AJAX api is available here:

http://api.jquery.com/category/ajax/

# Easy In AJAX Exercise

Let's start slow...

...

This exercise is in four parts. See if you can follow along.

## Make the HTML

First create a little html file containing a little bit of text and upload it to the server. Verify that you can indeed see the file by viewing it in a web browser.

## Do the AJAX

Now write a Javascript file that hits that URL (note, the url will need to be local to the file, so no http:// at the start):

var url = "myfile.html"
$.ajax(url);

Use the Firebug console to verify that the file is being downloaded. Brilliant, you're doing AJAX!

## Listen for the result

Next add a lister. We're going to listen for 'done', so...

$.ajax(url).done(function(data) {
alert(data);
});

This function is called when the ajax request completes successfully. Wow, you have AJAX.

## Do something with the result

Finally we want to do something with the result. Lets just append it to the body.

$.ajax(url).done(function(data) {
$('body').append(data);
});

Et voila. We have called the ajax, listened for the result, and finally added the result to our page. Note that we don't need to just add the result to the page, we could do something else with it instead. For example we could put it into a particular div, make it pop up, or just use it for something else.

Jolly well done.

# HIJAX jQuery exercise

Overriding the function of hyperlinks is a particularly useful thing to be able to do. The hyperlink will work normally in the absence of JavaScript but will AJAX in the content if it is able. This technique is sometimes rather cleverly called HIJAX.

## Questions

1. Add a list of hyperlinks to a page. When a hyperlink is clicked, detect that event, and call a function that retrieves the content via AJAX and inserts it into an element on the page.

**Extension**

2. Add a data attribute to some of your links data-remote="true" now add the event only to hyperlinks with this data-attribute, so only links with data-remote set will use AJAX.

3. Add a spinner. link is clicked, display a little spinner next to the link to show something is happening. the complete event occurs, remove the spinner.

4. Add caching. Add a data-section-id attribute to your hyperlinks. When you click a link, first check for the presence of a div with that id. If it is present, reveal it. If not, create it, ajax the content into it, hide any other divs that may be on the page, and reveal the div that you just created. Fun!
