---
title: Using Micro-Frontends to Permanently Solve the Legacy JavaScript Problem
date: "2018-05-11T23:46:37.121Z"
layout: post
draft: false
path: "/posts/micro-front-ends/"
category: "JavaScript"
tags:
  - "JavaScript"
  - "ES6"
  - "Micro Frontends"
description: "Legacy is a constant in JavaScript. Here’s how we solved it."
---

Legacy is a constant in JavaScript. Frameworks that were once the latest and greatest are now old and reviled. Backbone, AngularJS, JQuery, DOJO, YUI. Beautiful, extraordinary things with enormous mindshares; millions of collective developer hours invested in learning them.

And then we abandon them, alone and friendless, in a metaphorical cardboard box by the motorway. Because for reasons both clear and shady, they are no longer cool.

Then we move onto the next thing, confident in the knowledge that this is the one. This is finally the framework that will last into the new era. The framework that will love us and never betray us. A framework to endure through the ages.

Because no one wants to be legacy right?

Legacy hurts your career and your business in surprising ways
Code moves forward for a reason. Developers are intelligent, forward-thinking people, always trying to solve the next problem in the smartest possible way. This is normal and natural, even right.

If you don’t keep up, hiring will become difficult. Have you tried to recruit an AngularJS developer recently? It’s hard because all the good people have moved on to the next thing. No good developer wants to peg their career to a sinking ship.

Is your tech stack a sinking ship? You’ve automatically alienated the very people you want to attract. The good developers will not come to you, and they will not stay.

Struggling to Migrate a large AngularJS app
This is exactly the problem we faced at Beamery last year. We had a large, AngularJS app, built over several years. Good code, well thought through, built on services with components and one-way binding throughout.

Our clients were happy, but we were not.

We had several problems:

Building new features was slow. AngularJS doesn’t scale nicely. Features clash with each other. Isolation doesn’t come as standard, you have to work hard to keep features separate. It takes time to get it right. Hiring was hard, for all the reasons listed above. The app was slower than it needed to be because AngularJS was never built for speed. We wanted to render half a million contacts, and Angular was fighting us all the way.

As time went by it become harder to find developers who would willingly choose AngularJS over React, Angular 5, Vue, Aurelia or Polymer.

So we faced a choice:
1. We could throw it all away and start again.
This was never a good option. We’re a fast moving company. We iterate and press onwards. The thought of halting development for six months while we built and tested a new thing was not appealing. All that work, all that careful thought, all that money, in the bin.

So we noped out of that idea, and trundled swiftly on.

2. We could upgrade to Angular 5 using Google’s (ugly) upgrade path
Again. We considered this, but the thought of bundling Angular 1 and 5 in the same codebase was not appealing. We would significantly increase our bundle size. We would face unknown technical hurdles. We would lose control of our code.

And in three years, we’d be in the same situation again. Angular 5 will be legacy one day, just as certainly as Dojo is legacy today.

Dead as a dojo if you like.

3. The Awesome option — We could use micro-frontends
So we thought, what if we could find a way to break down our monolith into micro-frontends? Small, single-purpose apps, wired together with a single root-application, which would dynamically load and instantiate them into divs on the page based on the route.

These apps could be built in whatever technology we deemed most appropriate, and because they would be small, upgrading them would be no problem at all. Every new feature would be greenfield. Working legacy features could be siloed in their own apps, and retained for as long as they still did the job.

And this is how we permanently solved legacy.

Permanently solving Legacy with Micro-Frontends
It turned out we were not the first people to have this idea. A company called Canopy Tax had already built a product called Single-Spa, which had a central router, and adapters for AngularJS, Vue, Angular 5, Backbone, React, and a host of other bits of kit, future and legacy.

We started with our legacy app, and quickly wrote an adapter to allow Single-Spa to turn it off and on again. We pointed it at a div, told it to match all routes, and presto, legacy beamery running in a div, with a switch attached to document.location that would allow us to instantiate, activate and sleep it, depending on what routes the user wanted to see.

Our team lead Aaron, christened it the Bathtub, because it was a big SPA. Our old app was now a lone duck, floating in the bathtub. All bubbly.

The legacy app was now siloed, and we were free to move on to the next thing, unencumbered by legacy. A new age was dawning for FE at Beamery, and we were equipped.

Adding some Ducks
We wanted to try out our new capabilities. We needed to refactor our top and side navigation, so we made them as new micro-apps.

We created two new React apps to manage our top and side navigation, styled them with some fancy component isolation, added Flux, pointed them at two divs at the top and side of our page, commented out the navigation in our existing app, and presto. Three apps, two running the navigation, one running the legacy.

Two apps in React, one in AngularJS, running on the same page, at the same time, communicating via the address bar. Each clean and separate, sharing nothing but a DOM.

When you think about it, this is actually not a hard thing to do. All apps have a root, which is typically a div. We just added extra root divs and extra apps. The challenge was the orchestration, lazy loading code on demand, and making sure the apps were visible on certain routes, and invisible on others. Single-spa solves most of these features out of the box. It lets you write an activity function for each app, like this:

() => document.location.hash.startsWith(“#/reports”)
This function will activate a reports app, whenever the route starts with /reports.

Now we just needed a reports app.

All New Features are Greenfield.
Who doesn’t love greenfield, right? You get to pick your stack, build tool and test harness, even your language. Anyone for TypeScript or Flow? How about some TSX, or maybe you love plain old ESNext? You get to make everything as perfect as you want it to be.

We wanted to build a leaderboard reporting page. It would let our clients rate their performance against metrics with graphs and other prettiness. It was a contained feature, so we just built a new app.

We used create-react-app to get a good start on it, with styled-components to manage the SASS, Webpack for the build, and Jest/Enzyme for the tests. The graphs were D3, but they could just as easily have been vanilla React. Because it was a brand new project, we were able to complete it in just two sprints with maximum developer satisfaction.

Then we wrote a small wrapper to add it to the root-application. The wrapper knew how to lazy-load the JavaScript, and which div it should sit in.

We dropped the new app into the bathtub, and told the root application which routes it should respond to (i.e. when it should be visible, and when it should sleep).

Now when the user visits a URL, the dashboard app is lazy-loaded into the content panel and the legacy app goes to sleep.

How this helps our users
Our app can now lazy-load micro-apps in response to the route. This means that users no longer have to download the entire app to use any one part of it. If they don’t want reporting, or vacancies, or CSV upload, that’s completely fine, they won’t have to sit around while we load them.

Startup times are faster. The app needs to download and parse less JavaScript for first-load.

We also have the ability to create and deploy new features much faster. We can build a new feature on one micro-app, then redeploy just that app without touching the rest of the codebase. No more blocked deployments. No more teams falling over one another. Each micro-app has a separate repo and build process.

So what’s next?
We are now actively working to break three new apps out of our existing legacy app. These will probably be React apps because they will deal with very dynamic DOMs, and the virtual DOM is perfect for that sort of thing, but maybe we’ll do something different.

Because we have that option now.

Are you stuck with legacy? Have you found strategies to get around it? Would you like to chat with us? Drop a comment below.

