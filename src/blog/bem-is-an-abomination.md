---
title: "BEM is an Abomination - Here's Why"
data: "2017-08-21"
---

The purpose of BEM is to create view encapsulation. We do this by adding a unique class to each and evey element we want to style. The developer is responsible for creating that class, and following the rules to ensure that it is indeed unique.

The style rules we write then match those specific classes, without nesting, or any of the other more interesting selectors that CSS gives us.

## BEM addressses a genuine problem

In old school web design, CSS is disconnected from HTML. This means that:

1. It's easy to forget an old rule. Pruning CSS is hard work
2. It's easy to write messy rules.
3. Especially, it's easy to write rules that apply to parts of the page they shouldn't.

Let's assume we have a simple email form component:


```html
<input name="email">
<button>Hello</button>
```

BEM would have us decorate it like so:


```html
<button class="">Hello</button>
```

We already have several lovely ways to acieve view encapsulation. First up, good old SASS does the job perfectly reasonably:

```sass
app-button {
	button {
	  background:red
	}
}
```


Any rules we apply to the component will only apply to the component and it's children. This will generate

```sass
app-button button {
	color:red;
}
```
