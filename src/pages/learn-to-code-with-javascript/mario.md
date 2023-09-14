---
layout: ../../layouts/Course.astro
title: Onject Orientation and Mario
seoTitle: More complex JavaScript coding exerices
course: learnToCodeWithJavaScript
---

# Object Orientation with Mario and Luigi Exercise

In this section we're going to create a dumb little game using objects. This will be an object oriented game.

Remember that JavaScript objects looks like this:

````js
```js
let mario = {
  description: "Small and jumpy. Likes princesses.",
  height: 10,
  weight: 3,
  speed: 12,
};

let bowser = {
  description: "Big and green, Hates princesses.",
  height: 16,
  weight: 6,
  speed: 4,
};
````

Here we have defined two objects, one called `mario` and on called `bowser`. As you can see, they consist of a series of name value pairs. We can access the values like so:

```js
alert(mario.description);
```

We can modify values like so:

```js
mario.description = "Big and smashy, having eaten a mushroom";
```

We can even add new attributes like so:

```js
mario.canFly = true;
```

Objects are useful for keeping things neat and tidy. We have encapsulated all the information about Mario in a single place so it's easy to get at and understand.

<div class="exercise">

## Exercise - canFly

1. Enter the above code
2. Alert the values of mario.description and bowser.description```
3. Use your web inspector to add a breakpoint. Check the values of the JSON objects in the debugger.
4. Add a canFly attribute to Mario using the dot syntax. Again, check the debugger.
5. Create an entry for Luigi. He's a bit thinner that Mario, but slightly taller, and he wears a green outfit.

</div>

## A Rather Dull Mario Game

If we wanted we could write a little Mario game using these objects. Lets create a little function to see who wins in a boss battle:

````js
```js
let bossBattle = function () {
  if (mario.speed > bowser.speed) {
    alert("Mario has escaped and saved Peach");
  } else {
    alert("Bowser has stomped all over Mario. Mario is dead.");
  }
};
bossBattle();
````

As we can see, Mario wins. Let's swing the odds a little in Bowser's favour. Bowser can go into a powered up mode where he swoops from side to side on the screen. We'll call this Bowser Boost.

Let's extend our game a little to add Bowser Boost:

```js
let mario = {
  description: "Small and jumpy. Likes princesses.",
  height: 10,
  weight: 3,
  speed: 12,
};

let bowser = {
  description: "Big and green, Hates princesses.",
  height: 16,
  weight: 6,
  speed: 4,
  boost: 0,
};

let bossBattle = function () {
  if (mario.speed > bowser.speed + bowser.boost) {
    alert("Mario has escaped");
  } else {
    alert("Bowser has stomped all over Mario");
  }
};

bossBattle();
bowser.boost = 20;
bossBattle();
```

<div class="exercise">

## Exercise Invincible

1. Enter the above code and get it to run. Who wins?
2. Give Mario an invincibility attribute. If invincibility is true, Mario always wins. Unfair I know.
3. Don't worry, we are going somewhere with this. Next!

</div>

<div class="exercise">

## Lets clean this code up a little

1. Add two more attributes to each character: attackPower and name.
2. Extend the boss battle function so it receives two parameters, contestant1 and contestant2.
3. Rewrite it so that instead of running the conditional, it simply prints out the name of the contestant with the highest attackPower. This renders all the other attributes irrelevant, it only checks the attackPower.
</div>

## Functions within Objects - Methods

This is all very well. We have Mario and Bowser objects and a function to compare them, but it seems a little artificial having all our functions scattered all over the place like this. Also, the more functions we have in our global namespace, the more likely it is that they will conflict, and we'll accidentally overwrite something important.

Let's see if we can improve things.

```js
let marioWorld = {
  mario: {
    name: "Mario",
    description: "Small and jumpy. Likes princesses.",
    celebration: "Mario wins and does a tidy little dance. Jiggy",
    height: 10,
    weight: 3,
    speed: 12,
    attackPower: function () {
      return this.weight * this.speed;
    },
  },

  bowser: {
    name: "Bowser",
    description: "Big and green, Hates princesses.",
    celebration: "Bowser wins and does a big hairy kind of roar",
    height: 16,
    weight: 6,
    speed: 4,
    boost: 0,
    attackPower: function () {
      return this.weight * (this.speed + this.boost);
    },
  },

  bossBattle: function (contestant1, contestant2) {
    alert(contestant1.name + " vs " + contestant2.name);
    if (contestant1.attackPower() > contestant2.attackPower()) {
      alert(contestant1.celebration);
    } else {
      alert(contestant2.celebration);
    }
  },
};

marioWorld.bossBattle(marioWorld.mario, marioWorld.bowser);
```

Ah, that's better. As you can see, this entire program is encapsulated within a single object called marioWorld. The marioWorld object is the only object in the global namespace. the bossBattle function is now an attribute of marioWorld, and each contestant has an attackPower function that works out his strength in a battle. The bossBattle function is parameterised, so you can battle any contestant against any other.

We have also written an attackPower function which is implemented by bowser and mario. This calculates the attack power from a series of other parameters.

Because functions are objects, we can assign them as attributes of objects. They're key value pairs, but if you've programmed before, you'll notice they work like methods. We can now call methods on our JSON objects.

## What is `this`?

You might have noticed also that in the attackPower function we use the "this" keyword. We say this.speed and this.boost.

This is a troublesome keyword that trips up even quite advanced JavaScript developers all the time. "`this`" refers to the context in which the code is currently operating in. In this case, the context is mario (or bowser) and so this refers to these variables. That's because the attackPower function is an attribute of mario. This points to the object the current object is a member of. Your knowledge of JavaScript will one day be measured by your understanding of scope, and the "`this`" keyword, so we'll come back to `this` in the advanced course, but for now, let's make a real game…

<div class="exercise">

## Exercise - Princess Peach

1. Enter the above code and make it work.
2. Add Princess Peach. The princess is smaller and lighter but compensates for this by being quicker and having a dash mode. Battle Peach vs Bowser and Peach vs Mario.
3. Add an activateBoost function to Bowser that adds 5 to his boost. You should be able to call marioWorld.bowser.activateBoost.
4. Add a toggleDash function to peach. Calling it should activate or deactivate her dash attribute.
5. Just for kicks, change the boss battle function so instead of outputting alerts, it returns a string. Now we have an API. Display that string where you call bossBattle
6. Add a function for Bowser Boost. When you run it, his boost is increased.
7. Add a Peach Dash toggle. Every time you run it, Peach's dash mode is toggled on and off.

</div>

And there we go. That's it. If you've stuck with the program this far, amazing! You now know all the fundamental pieces of code. Seems like a lot? Seems like not so much? Both things can be true.

You should now have a good understanding of:

- strings
- variables
- numbers
- operators
- expressions
- booleans
- functions
- if / else
- loops
- arrays
- functional loops (aka - welcome to functional programming!)
- objects (aka - welcome to Object Oriented Programming)

And that's pretty much all there is.

Code is like hobbits, You can learn all it's ways in a few hours, and then the rest is learning how to fit it together, and this is when the real work begins.
