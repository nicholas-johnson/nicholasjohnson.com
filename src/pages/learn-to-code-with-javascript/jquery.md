# Bonus Section - A Dash of JQuery

You've made it, now lets make it fly...

For the most part, when we write JavaScript, we want to use it to talk to and modify web pages. We do this via a thing called the Document Object Model or DOM - a series of JavaScript objects that let us interact with every part of the page.

Think of the web page as a set of nested elements, paragraphs inside divs inside articles. Each of these can be represented as an Object. This is why we call it the Document Object Model.

When it was new, the DOM was put together in a bit of a hurry and was not very easy to use. Douglas Crockford once described it as "The worst API ever conceived of". It has got a lot better over the past few years, but most of us still use some kind of wrapper to make using it easier.

Wrappers include React, Vue and Angular - which will automatically bind the DOM to changes in data.

And then we have JQuery. JQuery is used by roughly 50% of all websites. It is incredibly simple to pick up. Some people think we should abandon JQuery, but honestly, I think this is pulling up the ladder. JQuery is super simple to get started with, and it will teach you concepts such as navigating the DOM tree and event handling. Some people build their whole careers around it, others use it as a stepping stone. Either way, it makes for a good entry point into the DOM, and that's what we'll be using it for here.

## Hello JQuery!

So lets jump right in! First we need to download a copy of jQuery, so go visit jquery.com and download the latest version. I've got version 1.8 here in front of me now, but you'll probably get a newer version that this. You'll be offered the choice between a regular or minified version. Choose the regular version for now.

## The HTML

Now we need to create an html file for our scripts to live inside. Enter something like the following:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>jQuery</title>
    <script src="jquery.js"></script>
    <script src="hello.js"></script>
  </head>
  <body></body>
</html>
```

Note that the body element is empty.

## The Javascript

Next we'll need to create the hello.js file, so go ahead and create it and add the following text:

```js
$(function () {
  $("body").html("Hello jQuery");
});
```

Whoah, that looked complicated! Don't worry though, there's actually nothing here that we haven't already covered. We'll break this down in a minute, but for now let's just type it in and have a look.

<div class="exercise">

## JQuery Hello World Exercise

1. Create the program above and run it. What do you see?
2. Modify the program to make it say a different greeting.

</div>

## Decomposing hello world

The code we entered just now might look strange, but actually it's quite simple. JQuery works by defining a single function called $. Why $? Because $ easy to type and has no other meaning in JavaScript. Here is our Hello jQuery script again.

```js
$(function () {
  $("body").html("Hello jQuery");
});
```

Notice that it is wrapped in the dollar function like this:

```js
$( ...code goes here...);
```

Now it makes more sense, we have a function called $ (dollar) which accepts an argument. Remember in the last section we looked at functions, we said that a function could be assigned to a variable? That's because, in Javascript functions are Objects. We can pass them around, do things with them, assign them to variables, etc, etc.

In this case the dollar function is accepting another function as an argument. The function it's accepting looks like this:

```js
function() {
$("body").html("Hello jQuery");
}
```

This is an anonymous function, it doesn't have a name, but it's a function none the less. Lets look inside it:

```js
$("body").html("Hello jQuery");
```

This looks simpler. We're calling the $ function again, but this time we're passing it a string "body". When the `$` function receives a string, it uses it to find an element on the page. Horray, it has found the body element!

JQuery adds a bunch of convenience methods to any element it returns including this one `.html()`. The `html` method lets us set the html content of an element, so here we've set the content to the string `"Hello jQuery"`.

## Passing $ a function

One mystery remains, why did we have to pass our code to `$` as a function? Why wrap all that stuff up inside a function at all?

Well…

The dollar function behaves differently depending on what you pass it. If you pass it a string it finds the element that matches that string. If you pass it a function, it remembers that function and calls it as soon as the `DOM` is ready, that is, as soon as your page has downloaded. So by wrapping our code up in a function and passing it to jQuery first thing, we guarantee that jQuery won't try to run our code until our HTML is completely loaded. It's listening for the onLoad event on the whole page.

Let's look at it another way...

## jQuery - a conversation.

_You:_ Hi jQuery, I've written some code. Here's a function for you. I'll pass it to you using your $ function. I know you like that..

_jQuery:_ Thanks User, I'll execute that function just as soon as the page html has finished loading and the DOM is ready. I'm clever and I know just when that will be for all the various different browsers.

...time passes...

_jQuery:_ Ah, the DOM is ready, lets look at that function. Little Function? You can run now!

_Little Function:_ Hello there jQuery, nice to be running at last. jQuery, can you find me the body element?

_jQuery:_ Of course I can, with pleasure! Here it is, and I've taken the liberty of decorating it with a bunch of useful utility methods for you.

_Little Function:_ Great, I'll call the html method to set the html of the body element you gave me on the DOM.

_DOM:_ Aha, oho, you've set the inner html of the body element. I'll just tell the browser.

_Browser:_ Thanks DOM. What's that you say? You've been updated? I'd better redraw myself. There, that's all done.

...more time passes...

_You (completely unaware that any time has passed at all):_ Horray. My page now contains the text I wanted!

## jQuery Selectors

In the example above, we used jQuery to set the html of the body element. We selected the body element, then called the html method on it.

We can use jQuery to select any element on the page. We do this using CSS syntax. Lets say we wanted to select all the paragraphs on the page, we would do this like so:

```js
$("p");
```

Lets say we wanted the hyperlink with class name "login":

```js
$("a.login");
```

The string is just CSS. Any CSS will do, even the really edge stuff.

<div class="exercise">

## Exercise

1. Create an html document containing several hyperlinks, some of which have class attributes.
2. Link the jQuery library and a blank script file of your own.
3. Set the html of each hyperlink to "Hello from the hyperlink!", or some other text of your choosing.
4. Pick a couple of hyperlinks with classes. Use CSS syntax in your selector to give them different html content.

Are you starting to see how you might use JavaScript to create a whole web page? This is what we call a WebApp. People pay good money for Webapps.

</div>

## More on CSS Selectors.

Because jQuery uses CSS to select elements, plus it's own extensions, you can use jQuery to pull out and make changes to pretty much anything on the page. It works in all browsers so you don't need to worry about browser inconsistencies.

Read http://api.jquery.com/category/selectors for a full up to date list of selectors. It's a long and useful list.

## jQuery Events - listen to me and do what I say!

The real strength of JavaScript is that it allows the page to respond to the user. Whenever the user does something on the page, from moving the mouse to pressing a button, to submitting a form, lots of little events are fired off in the browser. We can tell our code to listen for certain events and call functions in response to them.

<div class="exercise">

## Events Exercise

1. Create an HTML file and import jQuery.
2. Create a file called dont_click.js and import that too.
3. Edit your html file so it looks like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>jQuery</title>
    <script src="jquery-1.5.js"></script>
    <script src="dont_click.js"></script>
  </head>
  <body>
    <div class="clickable">Do not press this button.</div>
  </body>
</html>
```

4. Enter the following JavaScript into your dont_click.js file.

```js
$(function () {
  $(".clickable").click(function () {
    alert("I can't believe you just did that!");
  });
});
```

5. Reload your page and don't click the text!

## Deconstructing don't click

How was that? Tricky? Make sense? Did you click the text? That's super rude, I asked you nicely not to.

Let's just deconstruct the JavaScript a little and have a look inside.

First we have this:

```js
$(function() {
    ...
});
```

This calls the dollar function and passes it a function. When we pass dollar a function, jQuery puts it on one side until the DOM is loaded and runs it then.

The function we passed it looks like this:

```js
$(".clickable").click(function() {
   ...
});
```

Can you guess what it does? First it gets all the elements on the page with class "clickable". Then it calls a method called click on them. This method says what to do when we click. It's a click handler.

And what happens when we click it? This happens:

```js
alert("I can't believe you just did that!");
```

...and we get our cute little alert box. So appealing!

<div class="exercise">

## Exercise - More event handlers

1. Review the list of events on: http://api.jquery.com/category/events/
2. Try to write some code that pops up an alert when the user double clicks the button.
3. Try to write some code that pops up an alert when the user mouses over the button.
4. Try to write code that removes the button from the body when the user mouses over it. (hint: set the body html to an empty string "")

</div>

## jQuery Forms - Talk to me...

OK, it's not sexy, but sooner or later we're going to have to cover it. Forms. There, I've said it. Don't worry, next well be looking at animation so lets just take a deep breath and...

Make a form:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>jQuery</title>
    <script src="jquery-1.5.js"></script>
    <script src="form.js"></script>
  </head>
  <body>
    <form>
      <label for="gadget">Please enter a handy gadget, eg jet boots.</label>
      <input type="text" id="gadget" />
      <input type="submit" value="Go Go Gadget jQuery!" />
    </form>
  </body>
</html>
```

This simple form doesn't do much. Let's make something happen with some...

Go Go Gadget JavaScript!

```js
$(function () {
  $("form").submit(function () {
    var gadget = $("#gadget").val();
    alert("Go Go Gadget " + gadget);
    return false;
  });
});
```

As you'd expect, jQuery lets us look at the values of form elements. It does this using the val method on any form element. As you can see above, we're responding to the submit event with a function that writes an alert to the screen.

<div class="exercise">

## Exercise - with forms

1. Create the above Form. Yada yada (yawn)….
2. Give it a spin.
3. Change the program so that rather than popping up an alert, it puts the go go gadget string into a div.
4. Extend the program so that you every time you click submit it adds a list item containing the string to an unordered list on the page.

We can do lots of things with forms.

## Further Exercise

1. Create an html file with linked jQuery and JavaScript file
2. Add two form elements which should accept numbers.
3. When the form is submitted, add the two numbers together and put the result on the screen.
4. Add a dropdown containing functions for + and -. When the user clicks submit, call a function that does the appropriate action.

</div>

## jQuery Effects - Making it zippy

As promised, here we are in the animation section, and what a section it is! jQuery provides a rich and detailed animation library. There are lots of built in effects, or we can define our own, transitioning between pretty much any CSS property you care to mention.

Lets look at some examples

Before we get stuck in, lets look at some examples.

First of all, let's look at some examples, so head on over to:

- http://jqueryui.com/demos/effect/
- http://api.jquery.com/category/effects/

...and have a look at some of the demos there. They should give you an idea of what can be done.

## I'm a Ninja, watch me fade

For this example we're going to look at the fadeIn effect. This is a nice effect for revealing things in a smooth way.

## The HTML

There's a fair amount of inline CSS here. If you want to do this properly do please extract this into a separate CSS file, I'm just doing it this way for brevity and clarity.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>jQuery</title>
    <script src="jquery-1.5.js"></script>
    <script src="fade_in.js"></script>
  </head>
  <body>
    <div
      class="hi"
      style="display:none; width:200px; height:200px; background:red;"
    >
      Hi There, I'm a ninja.
    </div>
  </body>
</html>
```

## The Javascript

```js
$(function () {
  $(".hi").fadeIn(1000);
});
```

As you can see, when the DOM is ready the hi div is faded in.

<div class="exercise">

## Exercise - Fade

1. Enter the code above. Try to get the div to fade in slowly.
2. What happens if you change the number.
3. Try using a slidedown animation instead.
4. Now use a show animation.
5. If you feel up to it, check out the jQuery animation API on the jQuery website and try to get some other effects running.
6. If you're still up for it, check out the effects on jQuery UI. You'll need to download the jQuery UI library. Horray! Animation!

</div>

## Other things we can do with jQuery

There's lots more we can do with Javascript. We can get and set attributes using the attr method. We can add and remove classes using the addClass and removeClass methods. We can set CSS styling using the css method. It all fits inside the same basic framework and I encourage you to try things out.
