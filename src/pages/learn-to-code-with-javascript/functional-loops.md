---
layout: ../../layouts/Course.astro
title: Functional Loops - the power of functions meets the scale of arrays
seoTitle: Introduction to Functional Loops in JavaScript
course: learnToCodeWithJavaScript
---

# Functional Loops - the power of functions meets the scale of arrays

I've told you a little lie, well more of a half truth. I introduced you to loops using while and for, but the reality is we hardly ever use these types of loop anymore outside of toys.

Most of the time, when we loop, we're looping over an array, like this:

```js
let animals = ["cats", "dogs", "cheeses"];
```

Now think of our for loop

```js
for (let i = 0; i < animals; i++) {
  alert(animals[i]);
}
```

What's wrong with this? One word: **encapsulation**. Encapsulation means that a thing has everything it needs.

A string knows how to reverse itself:

```js
"hello".reverse();
```

Because the string is an object. It has a reverse method.

Wouldn't it make sense if an array knew how to loop over itself? Right now the for loop is on the outside looking in. What if the loop was on the inside of the array, and we told it how to behave? Imagine if we could pass in a little ball of reusable, movable code, right into our array.

What's a little ball of reusable, movable code called in JavaScript? That's right, it's a function.

## forEach

Remember how we can assign functions to variables? We can treat them just like any other bit of data. JavaScript is totally cool with this, in fact it likes it.

Here's a function that can alert a value.

```js
let doAlert = function (value) {
  alert(value);
};
```

The astute among you will notice this function is completely superfluous, since alert is already a function, but I'm going to press on because I've already typed the example.

now I can call:

```js
animals.forEach(doAlert);
```

Just that. Mind bending right? You might need to sleep on this one. I passed the doAlert function to the forEach method of the array. This method will call the function once for each element in the array, passing in that element.

I'll say it again: **forEach will call the doAlert method once for each element in the array, passing that element to the doAlert function!**

Maybe read that a couple of times until it makes sense.

And this is encapsulation. See how tidy it is?

## map

We have lots of funcitonal looping strategies. Map is a good one, it will accept a function, then call that function once for each element in the array, and output a new array where the values are the return values from the function.

I'll say that again: **Map will accept a function, then call that function once for each element in the array, and return a new array where the values are the return values from the function.**

Gosh. Maybe an example? Don't worry, this is easy once you get it, and rally getting it takes most people at leaset a couple of days.

Heres a funciton that accepts a string and returns a new string suitable for Mrs Potts.

```js
let toSandwich = function (filling) {
  return "a sandwich made with " + filling;
};
```

now let's pass it to map:

const sandwices = animals.map(toSandwich);

and what do we get?

```js
[
  "a sandwich made with cats",
  "a sandwich made with dogs",
  "a sandwich made with cheeses",
];
```

Wow! That sounds maybe like it might be useful. This morning I worked on a trading platform for a major bank. I had a list of stock tickers and I wanted to have a list of DOM nodes on a web page. Guess what I did? That's right, I used a map!

Whenever you need to transform a list of one type of thing into a list of the same length of another type of thing, use a map.

## Other functional loops

- `forEach` calls a function for each element, and passed that element to the function
- `map` does the same, but bungs the return value back in a new array
- `reduce` builds a new value that gets passed back into the function over and over. Master this one and you're officially a wizard, or possibly a wizrobe. Exercise for the reader.
- `filter` accepts a function that returns true or false. It loops over the array and returns a new array which only contains the values for which the function returned true
- `find` as above, except it only returns the first value it finds. Nice

And there we go. Amazingly useful, fully encapsulated. Kinda brain-breaking? Let it sit awhile, I believe in you, you've got this.
