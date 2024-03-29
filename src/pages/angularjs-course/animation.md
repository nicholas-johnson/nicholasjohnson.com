---
title: "Animation - AngularJS Exercise"
section: "angular"
slug: "animation"
course: angularJsCourse
layout: ../../layouts/Course.astro
---

# Animation with transitions

## Upshot

- To make $ngAnimate work, you must download the ng_animate.js module from <http://angularjs.org>. Include it in your main app module to make it available.
- The ng_animate service automatically hooks into any CSS elements animations or transitions applied to the element. It causes enter end leave events to happen on a timeout, allowing you to apply CSS effects.

## Transitions

Transitions provide a way to move smoothly from one state to another. For example, a hover effect could be applied slowly giving a pleasing fade.

Transitions are cut down animations. You can’t loop them, or set keyframes. They are simple, easy to apply, and work nicely.

To make an attribute transition smoothly from one state to another, use the transition property:

```css
a {
  transition: all 2s linear;
}
```

You can animate all properties, or just a specific property. You can also specify a timing function.

```css
a {
  transition: color 2s ease;
}
```

Choose from the following timing functions:

- ease
- linear
- ease-in
- ease-out
- ease-in-out

## Animatable properties

Transitions don’t work with all properties, but do with most of the ones you would care about. A full list of [animatable properties (for Firefox) can be found here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

<div class="exercise">

## Angular Exercise

We're going to extend our Flickr exercise from before by adding animations

1. Download the correct ng_animate module for your version of Angular from here: <https://code.angularjs.org/>
2. Include the module in your application module
3. Modify your flickr exercise so that the images animate in smoothly

</div>

<div class="exercise">

## Further Exercise

Stagger the animation using ng-enter-stagger and ng-leave-stagger

</div>

## Full Keyframe Animation

Animation goes further than simple transitions by adding full keyframe based animation to CSS. This has several advantages, particularly in terms of performance. Because the browser is in charge of the animation it can optimise performance in a variety of ways, taking full advantage of the hardware.

## Declaring Keyframes

To make this work, we must first declare the keyframes we want to use, like so:

```css
@keyframes pop {
  from {
    font-size: 100%;
  }
  to {
    font-size: 500%;
  }
}
```

## Adding our Animation

Once we have declared our animation, we can add it to the page like so:

```css
h1 {
  animation-name: pop;
  animation-duration: 3s;
}
```

## Declaring more keyframes

We can add in additional keyframes using percentages:

```css
@keyframes pop {
  from {
    font-size: 100%;
  }
  50% {
    font-size: 1000%;
  }
  to {
    font-size: 500%;
  }
}
```

Here, we have added another keyframe at 50% of the way through the animation.

<div class="exercise">

## Exercise

Extend the Flickr search exercise.

Use Animation to make your images pop onto the page dramatically.

Optionally Make use of ng-enter-stagger to boost the effect.

</div>
