---
title: "View Encapsulation - all the ways"
date: "2015-05-06"
---

Most modern web frameworks have components, tiny bits of DOM that hold their own template and state. CSS on the other hand is inherantly global. How to make your CSS apply to one component.

Programming with Globals is inherantly problematic in all but the simplest of apps. Change one thing, and you potentially change many things right across your app. CSS is inherantly global. The rules we create are applied to the whole DOM tree. We need to do work to make sure that our style rules only match the bits of DOM we care about.

## Components to the rescue!

Most modern web frameworks, like React, Angular and Vue give us components, and there are ways to (optiannly) make our styles apply to only

* ViewEncapulation in Angular
