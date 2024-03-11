---
title: Passing additional props to React children with React.Children.map
tags: javascript, react
layout: "../../layouts/BlogPost.astro"
date: "2023-09-13"
preview: "React components are supposed to be modular and stackable, just like html. We achieve nesting in React components by passing children as an implicit prop to our component, but what if we want to do more than simply dump those children on to the page? What if we want to manipulate them in some way? Enter React.Children.map"
---

_React components are supposed to be modular and stackable, just like html. We achieve nesting in React components by passing children as an implicit prop to our component, but what if we want to do more than simply dump those children on to the page? What if we want to manipulate them in some way? Enter React.Children.map!_

This topic is by necessisity mega-technical. Reading it back now, I feel a slight sense of dread. There's a lot here's but we're going to break it down.

Say I had a form and the form had buttons, in plain HTML this would look like this:

```html
<form>
  <button>Button 1</button>
  <button>Button 2</button>
</form>
```

In React, I would quite like to be able to write something similar, and indeed I can:

```tsx
export const App: FC = () => (
  <Form>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
  </Form>
);
```

In React we achieve this using children. The form component recieves children as a prop, and the children prop contains the two buttons, like so:

```tsx
export const Form: FC<PropsWithChildren> = ({ children }) => (
  <form>{children}</form>
);
```

And this is all very nice and modular, but what if we didn't want to just dump the children into the middle of the form unedited. What if we wanted to do something different to each child, maybe wrap it in a div, or add some props.

Say for example we wanted to disable the form, right now we would do this by passing a isDisabled prop to all the form elements, like this:

```tsx
export const App: FC = () => {
  const isDisabled = true;
  return (
    <Form isDisabled={isDisabled}>
      <Button isDisabled={isDisabled}>Button 1</Button>
      <Button isDisabled={isDisabled}>Button 2</Button>
    </Form>
  );
};
```

Gosh, that's pretty ugly, right? I've had to duolicate that isDisabled prop a lot of times. I've manually disabled the form, which presumably applies some styling, and then I've had to pass that prop one by one to each button.

The button receives that prop like so:

```tsx
interface ButtonProps extends PropsWithChildren = {
  isDisabled: boolean;
}

export const Button: FC<ButtonProps> = ({isDisabled, children}) => (
  <button disabled={isDisabled}>{children}</button>
)
```

And this is fine for most use-cases, but you have to admit there's a lot of unnecessary pain here. What if there were ten buttons, do I really need to pass each of them an isDisabled prop? What if I forget? What if my arms get tired?

Let's say, for the sake of the demo, we want to disable the whole form. Maybe we have styling on the form to change the opacity or something? Maybe this form is actually some sort of toggle component? Maybe you have lots of buttons, and managing multiple isDisabled attributes will be painful?

Let's change our app, so we only pass a single prop to the Form:

```tsx
export const App: FC = () => {
  const isDisabled = true;
  return (
    <Form isDisabled={isDisabled}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </Form>
  );
};
```

Oooh, now I've passed isDisabled to the Form component. I need to get that prop and pass it to the Buttons, so I can make sure they're disabled too. Let's do the magic, then we'll explain how it works underneath.

Here's the magic:

```tsx
interface FormProps extends PropsWithChildren = {
  isDisabled: boolean;
}

export const Form: FC<FormProps> = ({ children, isDisabled }) => (
  <form>

    {/* And here begins the magic! */}
    {
      Children.map<ReactNode, ReactNode>(children, (child) => {
        if (!isValidElement(child)) {
          return child;
        }
        return cloneElement(child as ReactElement, { isDisabled });
      })
    }
    {/* End of magic */}

  </form>
);
```

See how React.Children.map lets us iterate over the children and manage them? I can do what I like with them. Wrap them in a div, change the props, hide them, the sky is almost the limit.

Let's break down the code:

## React.isValidElement

First we check the child is a component, rather than a string or a number of null, or some other primitive. We do that with isValidElement. If we passed a plain string, number, or null as a child, we just dump it back out again. It has no props, so no sense in mucking with them.

## React.cloneElement

If we have an element though, we want to add the isDisabled prop to it. The easiest way to do this is with React.cloneElement. This receives an element, plus any additional props. And just like that, all our children get the isDisabled prop.

## When is this useful?

I recently used this in an accessible toggle component. The toggle had multiple styled buttons in it, which would activate different states. The Toggle had lots of ToggleButtons in it. Now to disable this toggle I needed to add an isDisabled prop to the Toggle and all the ToggleButtons, not great.

Mapping the children let me pass a single isDisabled prop to the Toggle which then got passed down to the children. Ditto for onChange, which got passed to the onClick props of the ToggleButtons. A lovely clean interface.
