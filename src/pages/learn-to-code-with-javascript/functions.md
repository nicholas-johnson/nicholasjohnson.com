---
layout: ../../layouts/Course.astro
title: Functions - doing things more than once
seoTitle: How to create functions in JavaScript
course: learnToCodeWithJavaScript
---

# Functions - doing things more than once

Mrs. Potts is the school dinner lady. Today is the school trip, and it's her job to make sandwiches for all the children. She has to make a lot of sandwiches, and each one takes some work. The bus will be arriving soon and Mrs. Potts is worried she might not finish. Some of the children might not have enough food to eat. Hurry Mrs. Potts!

To make a sandwich Mrs. Potts has to:

1. Get some bread
2. Spread the butter
3. Spread the jam
4. Cut off the crusts
5. Put it in a little bag

We could write a program to help her to this, it might look something like this:

```js
console.log("Get bread");
console.log("Spread butter");
console.log("Spread jam");
console.log("Cut off crusts");
console.log("Put in a little bag");
```

<div class="exercise">

## Exercise - Poor Mrs Potts

1. Create an HTML file and linked JavaScript file.
2. Enter the above program and run it.

Help Mrs. Potts. The bus will be here soon. Time is running out!

</div>

## Who will help Mrs Potts?

This is all very well, but Mrs. Potts has to make 40 sandwiches and we've only made one. To make 40 could take a lot of typing. What if there was a way to help her by wrapping up all the actions needed to make one sandwich into a single reusable function, something we could use over and over 40 times, 100 times even. Well...

## Wrapping it all up in a function

Lets make a few changes to our program above.

```js
let makeSandwich = function () {
  alert("Get bread");
  alert("Spread the butter");
  alert("Spread the jam");
  alert("Cut off the crusts");
  alert("Put in a little bag");
};

makeSandwich();
```

What have we done here? Well, you may have noticed that we've created a new variable called makeSandwich.

The variables we have created so far have contained strings or numbers, see the section on variables if you need a refresher, but variables are buckets remember and they can hold any type of thing. In this case we have said that the makeSandwich variable should be a new type of thing called a function.

A function is a little ball of code, all wrapped up neatly so that we can use it again and again. After creating our function and assigning it to the makeSandwich variable, we can call it by writing:

```js
makeSandwich();
```

The parenthesis (brackets) mean that we want to treat the variable as a function. We can run the function as many times as we like. Just call makeSandwich() again and again, as many times as we need it.

<aside class="box">

## Note that this is unusual.

Most languages do not encourage you to create a function and put it in a variable like this. This is what we call a lambda function, an unnamed function that works like any other data type. In JavaScript we use lambdas pretty much all the time, it's just how we like to do it.

Assigning functions to variables is one aspect of a programming paradigm called "functional programming". It is one of JavaScript's most powerful features because it enables a thing called "function portability" which we shall look at on the advanced course.

</aside>

<div class="exercise">

## Exercise - Making five sandwiches

1. Create an HTML file and linked JavaScript file.
2. Enter the code above carefully and run it.
3. Add the line `makeSandwich()` again five times to help Mrs. Potts make five sandwiches. We're still a little way off...

### Answers

```js
let makeSandwich = function () {
  alert("Get bread");
  alert("Spread the butter");
  alert("Spread the jam");
  alert("Cut off the crusts");
  alert("Put in a little bag");
};
makeSandwich();
makeSandwich();
makeSandwich();
makeSandwich();
makeSandwich();
```

</div>

## Marmite sandwiches - Passing Parameters

This is all excellent, but oh dear, Mrs. Potts has just remembered that some of the children have asked for Marmite sandwiches because they are allergic to jam. Our function can only make jam. What will we do? Will the children still go hungry?

What if there was a way to tell our function what filling we want? Thankfully there is. We are going to use **Function Parameters**. Let's change our program like so:

```js
let makeSandwich = function (filling) {
  alert("Get bread");
  alert("Spread the butter");
  alert("Spread the " + filling);
  alert("Cut off the crusts");
  alert("Put in a little bag");
};

makeSandwich("marmite");
makeSandwich("jam");
makeSandwich("squeezy cheez");
```

See, we have changed our function and made it accept a parameter called filling. filling is a variable, a bucket. It is available anywhere inside the function body, that is between the {curly braces}. It can hold anything, even sandwich filling. We did this when we wrote: `let makeSandwich = function(filling)`.

Further down in our code we call makeSandwich("marmite"); Here we are passing the string "marmite" to our function. It will be automatically assigned to the variable called filling which will be magically available to our function when it runs.

<div class="exercise">

## Exercise - Crab Pate - Mmmmmm

1. Create an HTML file and linked JavaScript file.
2. Enter the code above carefully and run it.
3. Create a Crab Pate sandwich.

### Answers

```js
makeSandwich("crab pate");
```

</div>

## Butter allergies - Passing Multiple Parameters

Poor Mrs Potts. She's just remembered that some of the children are allergic to milk. If they eat butter they may go into anaphylactic shock. She needs to make some of her sandwiches with margarine. Things keep getting worse and worse for Mrs Potts, she looks like she might cry. Fortunately, you are here to help her. We can extend our sandwich function to accept two parameters.

```js
let makeSandwich = function (filling, spread) {
  alert("Get bread");
  alert("Spread the " + spread);
  alert("Spread the " + filling);
  alert("Cut off the crusts");
  alert("Put in a little bag");
};

makeSandwich("marmite", "butter");
makeSandwich("jam", "margerine");
makeSandwich("squeezy cheez", "butter");
```

Now we are passing in two parameters, one called filling and one called spread. Filling comes first, spread comes next. When we call the function, we pass in a filing, then a spread and those values get assigned to the filling and spread variables inside the function body, i.e. everywhere between the {curly braces}.

<div class="exercise">

## Exercise - Multiple Parameters

1. Create an HTML file and linked JavaScript file.
2. Enter the code above carefully and run it.
3. Create a tuna and sweetcorn sandwich with artisan linseed margarine. 4. Some of the children need rye bread. Make the function accept another parameter: breadType and make some more sandwiches.

### Answers

```js
let makeSandwich = function (filling, spread, breadType) {
  alert("Get" + breadType);
  alert("Spread the " + spread);
  alert("Spread the " + filling);
  alert("Cut off the crusts");
  alert("Put in a little bag");
};

makeSandwich("tuna and sweetcorn", "soya margarine", "rye bread");
```

</div>

## Return Values - the Sandwich Machine

So we have created a make sandwich function, and passed it some ingredients. We have control over our function.

At the moment though, all our function does is bung the various stages of the sandwich making process into alert boxes as it goes along. What if we don't want alert boxes, what if we want to output them to the console instead, or turn them into a web page? Mrs Potts doesn't like a fuss.

It would be sort of handy if, instead of just alerting the sandwich stages, the makeSandwich function could make the sandwich, then just hand us the completed sandwich back, perhaps as a string, sort of like a sandwich machine. Then we could choose what to do with our sandwich, alert it, add it to a pile of other sandwiches, feed it to a child, etc...

To do this, we need to understand about return values. When we use the return keyword in a function, the value that we ask to be returned is sent back out of the function.

When we use the return keyword in a function, the value that we ask to be returned is sent back out of the function.

Observe:

```js
let makeSandwich = function (filling) {
  return "A sandwich loving made with " + filling;
};

alert(makeSandwich("tofu mayonnaise"));

// A sandwich loving made with tofu mayonnaise
```

See? Our make sandwich function now makes a sandwich and returns it.

We sometimes call this input, process and output. It's as though we have made a sandwich machine. we pass it ingredients, it processes them into a sandwich (or a string in this case), and returns it to us.

Note that we can use our sandwich machine anywhere where we might have used a string previously. JavaScript will see the function, execute it, get a string back, and then just act as though there was a string there all along. Our function is an **Expression**!

<aside class="box">

## A node on Expressions

You need to be comfortable thinking about your code in terms of expressions. An expression is a piece of code that can be simplified. If I write this for example:

```js
1 + 1;
```

Javascript can easily simplify this to 2.

What if I have more than one expression? What if an expression is composed of other expressions? Say I write:

```js
(1 + 1) * (8 / 2);
```

This is an expression composed of two smaller expressions.

JavaScript will simplify the first expression `(1 + 1)` to `2`, and the second expression `(8 / 2)` to `4`. The final simplified expression is `2 * 4`, which is `8`.

The same thing applies to functions.

Say I create a function like this:

```js
let square = function (x) {
  return x * x;
};
```

Now I can use this just like ny other expression:

```js
(1 + square(2)) * square(3);
```

Square 2 simplifies to 4 and square 3 simplifies to nine, so JavaScript will simplify this compound expression to:

```js
(1 + 4) / 9;
```

which is `0.5555`.

_Functions are expressions in a box_. I'll say this again. **FUNCTIONS ARE EXPRESSIONS IN A BOX!**

You can use them to hide complexity and create reusable code. Pass parameters in, and then whatever is returned becomes the value of the expression.

</aside>

<div class="exercise">

## Exercise: A trickier sandwich

1. Enter the code above and get it to run.
2. Extend it so it takes 2 fillings, perhaps "tuna" and "falafel".
3. Instead of using an alert, output the returned sandwich using an alert box.
4. Instead of alerting directly, save the sandwich in a variable. Now alert the variable. Using sensibly named variables like this can make your code easier to read.

</div>

## Extra Difficult Bit: involving stuff you haven't covered yet

Here's a curve ball for Mrs Potts. Please ignore this bit. Definitely don't try and do it yet.

We are going to extend our code so that it is possible to pass in either one or two fillings. The function should handle this by only outputting one filling if just one is passed in, or two if two are passed.

To solve this puzzle, we need to use an if statement. We'll get to these in a while when we cover flow control, but for now just pretend it makes sense.

We can check to see if filling2 is present, and if it is, we can add it to the string.

```js
let makeSandwich = function (filling1, filling2) {
  let sandwich = "A sandwich with " + filling1;
  if (filling2) {
    sandwich += " and " + filling2;
  }
  return sandwich;
};
```

We can call this like so:

```js
alert(makeSandwich("marmite", "cheese"));
alert(makeSandwich("marmite"));
```

A handy feature of JavaScript is that if you don't pass in a parameter, it is set to be `undefined`. `Undefined`` is a special value that a variable has before anything has been put in it. It's an empty bucket.

One of the great things about `undefined` is that it's falsey. Falsey values evaluate to false, so we can call our makeSandwich function like this:

```js
alert(makeSandwich("butter", "marmite"));
```

Filling2 is undefined, and so evaluates to false in the if statement. This is a very handy feature of JavaScript.

Notica also how we can drop our function call right into the call to alert. Alert is also a function BTW, in case you hadn't realised. This is a compound expression. makeSandwich runs and changes to a value, then that value is already between the braces for the alert function.

## Maybe sleep on it?

Functions are one of those things that people often find a little mind bending the first time they see them. If this is you, I suggest you put this down and go have a nap, let your brain do it's thing integrating the new knowledge. You're doing great!

Now on to Flow Control!
