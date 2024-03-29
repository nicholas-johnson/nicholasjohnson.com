---
layout: ../../layouts/Course.astro
title: Closure and Variable Scope
seoTitle: JavaScript Closure and Variable Scope
course: javascriptForProgrammers
---

# Object Orientation with Object Literals

## Welcome to JSON

There are several different syntaxes for declaring objects in JavaScript. Of these, the cleanest and most commonly used is JavaScript Object Notation (JSON), pronounced Jason.

Packaging our code up into JSON gives us several significant advantages:

1. It looks pretty.
2. It reduces the number of objects in the global namespace.
3. It's great for AJAX, smaller than XML and readily parsable both client and server side.

In this series of exercises we'll write some JSON, create an API and finally add a thin layer of listeners to hook it up to a jQuery User Interface.

JSON looks like this:

```js
var mario = {
  description: "Small and jumpy. Likes princesses.",
  height: 10,
  weight: 3,
  speed: 12,
};

var bowser = {
  description: "Big and green, Hates princesses.",
  height: 16,
  weight: 6,
  speed: 4,
};
```

Here we have defined two objects, one called mario and on called bowser. As you can see, they consist of a series of name value pairs. We can access the values like so:

```js
alert(mario.description);
```

We can modify values like so:

```js
mario.description = "Big and smashy, having eaten a mushroom";
```

We can even add new attributes like so:

```js
mario.can_fly = true;
```

Objects are useful for keeping things neat and tidy. We have encapsulated all the information about Mario in a single place so it's easy to get at and understand.

## Exercise - canFly

1. Enter the above code
2. Alert the values of mario.description and bowser.description
3. Use your web inspector to add a breakpoint. Check the values of the JSON objects in the debugger.
4. Add a canFly attribute to Mario using the dot syntax. Again, check the debugger.
5. Create an entry for Luigi. He's a bit thinner that Mario, but slightly taller, and he wears a green outfit.

## A Rather Dull Mario Game

If we wanted we could write a little Mario game using these objects. Lets create a little function to see who wins in a boss battle:

```js
var boss_battle = function () {
  if (mario.speed > bowser.speed) {
    alert("Mario has escaped and saved Peach");
  } else {
    alert("Bowser has stomped all over Mario. Mario is dead.");
  }
};

boss_battle();
```

As we can see, Mario wins. Let's swing the odds a little in Bowser's favour. Bowser can go into a powered up mode where he swoops from side to side on the screen. We'll call this Bowser Boost.

Let's extend our game a little to add Bowser Boost:

```js
var mario = {
  description: "Small and jumpy. Likes princesses.",
  height: 10,
  weight: 3,
  speed: 12,
};

var bowser = {
  description: "Big and green, Hates princesses.",
  height: 16,
  weight: 6,
  speed: 4,
  boost: 0,
};

var boss_battle = function () {
  if (mario.speed > bowser.speed + bowser.boost) {
    alert("Mario has escaped");
  } else {
    alert("Bowser has stomped all over Mario");
  }
};

boss_battle();

bowser.boost = 20;

boss_battle();
```

## Exercise Invincible

1. Enter the above code and get it to run. Who wins?
2. Give Mario an invincibility attribute. If invincibility is true, Mario always wins. Unfair I know.

Don't worry, we are going somewhere with this. Next!

## Lets clean this code up a little

1. Add two more attributes to each character: attack_power and name.
2. Extend the boss battle function so it receives two parameters, contestant_1 and contestant_2.
3. Rewrite it so that instead of running the conditional, it simply prints out the name of the contestant with the highest attack_power. This renders all the other attributes irrelevant, it only checks the attack_power.

## Functions within JSON

This is all very well. We have Mario and Bowser objects and a function to compare them, but it seems a little artificial having all our functions scattered all over the place like this. Also, the more functions we have in our global namespace, the more likely it is that they will conflict, and we'll accidentally overwrite something important.

Let's see if we can improve things.

```js
var mario_world = {
  mario: {
    name: "Mario",
    description: "Small and jumpy. Likes princesses.",
    celebration: "Mario wins and does a little dance",
    height: 10,
    weight: 3,
    speed: 12,
    attack_power: function () {
      return this.weight * this.speed;
    },
  },
  bowser: {
    name: "Bowser",
    description: "Big and green, Hates princesses.",
    celebration: "Bowser wins and does a big roar",
    height: 16,
    weight: 6,
    speed: 4,
    boost: 0,
    attack_power: function () {
      return this.weight * (this.speed + this.boost);
    },
  },

  boss_battle: function (contestant_1, contestant_2) {
    alert(contestant_1.name + " vs " + contestant_2.name);
    if (contestant_1.attack_power() > contestant_2.attack_power()) {
      alert(contestant_1.celebration);
    } else {
      alert(contestant_2.celebration);
    }
  },
};

mario_world.boss_battle(mario_world.mario, mario_world.bowser);
```

Ah, that's better. As you can see, this entire program is encapsulated within a single object called mario_world. The mario_world object is the only object in the global namespace. the boss_battle function is now an attribute of mario_world, and each contestant has an attack_power function that works out his strength in a battle. The boss_battle function is parameterised, so you can battle any contestant against any other.

We have also written an attack_power function which is implemented by bowser and mario. This calculates the attack power from a series of other parameters.

Because functions are objects, we can assign them as attributes of objects. They're key value pairs, but if you've programmed before, you'll notice they work like methods. We can now call methods on our JSON objects.

**What is this?**

You might have noticed also that in the attack_power function we use the "this" keyword. We say this.speed and this.boost.

This is a troublesome keyword that trips up even quite advanced JavaScript developers all the time. "this" refers to the context in which the code is currently operating in. In this case, the context is mario (or bowser) and so this refers to these variables. That's because the attack_power function is an attribute of mario. This points to the object the current object is a member of. Your knowledge of JavaScript will be measured by your understanding of scope, and the "this" keyword, so we'll come back to this, but for now, let's make a real game...

## Exercise - Princess Peach

1. Enter the above code and make it work.
2. Add Princess Peach. The princess is smaller and lighter but compensates for this by being quicker and having a dash mode. Battle Peach vs Bowser and Peach vs Mario.
3. Add an activate_boost function to Bowser that adds 5 to his boost. You should be able to call mario_world.bowser.activate_boost.
4. Add a toggle_dash function to peach. Calling it should activate or deactivate her dash attribute.
5. Just for kicks, change the boss battle function so instead of outputting alerts, it returns a string. Now we have an API.

## But what about the jQuery?

Having defined our API, it's now time to hook it up to a user interface. This is where jQuery comes into it's own.

1. Extend your HTML page. Create a form. Add two dropdowns, containing the names of the available characters. Ideally populate these dropdowns by querying the API. You may need to adjust your JSON to do this.
2. Add a "Fight" button that will make those two characters battle.

## Further Challenge

Now lets take things a little further. I'll leave this up to you.

1. Add a button for Bowser Boost. When you click it, his boost is increased.
2. Add a Peach Dash button. Every time you click it, Peach's dash mode is toggled on and off.
3. Make it so that when the dash and boost buttons are only visible when Peach or Bowser are selected.
4. Handle the case where the battle is a draw.
5. Grab images for each character. Store the URL of the image in the JSON. Draw an arena and put the characters in it when they are selected.
6. Destroy the losing character with an appropriate animation.
7. When the fight button is clicked, animate a fight briefly before destroying the loser.

## Answers

The following are sample answers only, and you may be able to come up with a better way.
