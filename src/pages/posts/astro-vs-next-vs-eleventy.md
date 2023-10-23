---
title: Astro vs. Next vs. Eleventy
tags: javascript
layout: "../../layouts/BlogPost.astro"
date: "2023-09-11"
preview: "A Static site generator is a piece of software that lets you write pages, ideally in Markdown, then press a button to create a nested folder full of HTML that you can drop onto any old hosting environment. Static sites are fast, just HTML and CSS. They are trivial to make accessible, you actually don't need any JavaScript at all.


My criteria for selecting a static site generator were as follows..."
---

This site is old. When I first built it,it was Wordpress. Later, in a fit of Ruby, I replatformed it to Gatsby with HAML and Github Static Pages, and this was nice for quite a few years.

Nowadays, I prefer TypeScript for my front end tasks, so I went looking for a new static site generator. In this post I'll explain my journey, and hopefully this will help you too.

Note that these are just my opinions for this particular project. 

## What is a Static Site Generator?

A Static site generator is a piece of software that lets you write pages, ideally in Markdown, then press a button to create a nested folder full of HTML that you can drop onto any old hosting environment. Static sites are usually very fast, just HTML and CSS. They are trivial to make accessible, you actually don't need any JavaScript at all. 

Your pagespeed will be top notch, and if you're halfway decent at HTML, SEO and accessibility will be a breeze.

My criteria for selecting a static site generator were as follows:

* Write content pages in Markdown
* Write more complex pages in some sweet templating language
* Easy build process produces a nested folder structure of HTML
* Nice debugging tools
* Nice documentation
* Live reload - so I can see what I'm doing
* Fast enough to not be annoying
* TypeScript types
* Styling with SASS
* No obnoxious limitations
* No fluff
* No vendor lockin

## Next

First port of call was Next. Next is not actually a static site generator, it's a React framework that includes SSR (SErver Side Rendering). You write your whole site in React, then build it and have it do it's SSR thing. This will produce a folder full of HTML which should be quick to render, then Next will quietly take over and from then on your site will be rendered by Next.

Setup was simple, a nice generator made a skeleton app for me. `npm start` and everything was running. Nice.

This was when the issues started. I had a lot of SASS from my old site, and ideally I'd like to copy it over as SASS modules into my new components and manually scope it. 

Me: Can I just import SASS in a component please?

Next: Nope. I like SASS modules or global sass. 

Me: These are nice things but I don't want them in this instance because I'm porting a legacy site. Can I just import SASS?

Next: Nope, too dangerous for you.

Me: I'll take care of namespacing, seriously Next, I do know what I'm doing. 

OK, this is starting to get obnoxious. Now I want some images. They're already nicely scaled, and I've got a LOT of them. Can I just bash them in with an img tag and srcset?

Next: nope, use our Image component please.

Me: But it's a legacy site, I've already got srcsets

Next: Ahem, did I stutter?

Over and over, Next made choices, until I felt like I was dealing with a petty schoolchild. Thjese things should work, just let me modify the Webpack config and get out of my way please?

Next: Absolutely not. You are not qualified to be making these kinds of decisions

### Next Verdict

Probably nice if you're working on greenfield and you want SSR, and you want React, and you don't mind every decision having been made for you. Not a thing for me in this instance. 

Next fails the obnoxiousness test. It's also way overspecced for what I need, so it's failing the fluff test, why would I need SSR on a blog?  I'll be using this site for another ten years. Will React even still be a thing in ten years? The vendor lockin test is also out. 

Use this if you're making a site that absolutely needs React and SSR, and you don't mind colouring inside the lines. Avoid if you have any special requirements, it's going to yell at you.

Next please.

## Eleventy

Ah, here we go, a bare metal community driven static site generator. This is actually a pretty nice thing. Eleventy lets you define folders full of markdown, which will then be converted into pages. I can set a layout in the markdown frontmatter, and the thing will build. templating is via Nunjucks, which is actually not bad.

Installation is easy, I got a basic site up and running in a few minutes. The tutorials are nice. I could actually live with this, but there are still issues.

### Dev Tooling

In VSCode, my Nunjucks autoformatter was not the nicest. I also had some issues with debugging. I wanted to log some values, but the debug pipe kept failing. I wanted SASS, but it didn't come as standard and I found I often had to refresh a couple of times to see changes.

Nunjucks also started fighting me. It's a whole new language, and honestly who has time to learn a whole new language. JavaScript is nice, can I use that please?

### Eleventy Verdict

This was a reluctant pass. I really wanted to love Eleventy, it's stripped down, and tremendously fast. I just couldn't get past the tooling. I don't want a whole other set of tools just to write templates. I want JavaScript and HTML.

Use it, you'll probably like it, but not for me on this project.

## Astro

Ah, Astro, the new kid. The first beta came out in mid 2022, so it's barely a year old.

Installation was simple, via npx. It has filesystem routing.

The first thing I notices was how it just worked. I started it up and it was going. I added a markdown file, and there it was. I built it, and it made the nicest HTML / CSS page, as nice as I could make by hand.

The template language is lovely, very like Svelte. You have `---`` fenced JavaScript / Typescript areas on the page where you can write regular code with imports and console.logs. You put your HTML right on the page with curly brace includes. 

Strong typing is supperted via props interfaces, although the Markdown is obviously not typechecked so you still need to be careful. You have components that recieve props that get rendered as plain HTML on build. 

SASS comes out of the box, just set the lang attribute, and it's automatically namespaced, just like Angular.

It even has the ability to instantiate microapps into divs, should you aever need this. I can see it being used for microfrontends.

### Astro Verdict

As you might have guessed, this one is my favourite. It checks literally every single box, it's easy to use, handles markdown brilliantly. The documentation is excellent and debugging is no problem at all. It has types, SASS, just about everything I could want.

## To sum up

Every one of these platforms is excellent and has it's place in the ecosystem. 

**Next** is great for SSR, and fills a place somewhere between a blog and a single page app. You will like it.

**Eleventy** is superfast, but I found it a bit scrappy. It's a hackable platform. Use it if you want something lightweight for a content driven site like a blog and you're happy to debug some ecentricities.

Astro is the real star for me though. It's fast enough, it's super stable, and the templating syntax is to die for. Very very nice thing. It's my new favourite.