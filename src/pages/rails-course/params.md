---
title: "Params"
description: ""
section: "ruby"
course: "railsCourse"
exercise: "params"
layout: ../../layouts/Course.astro
---

# Params

The params hash contains all the url and post parameters that were passed to your application.

You can access it from inside any controller, like so:

```ruby
params[:key]
```

Say you have defined a route like so:

```ruby
  get '/hello/:hello/:everyone' => 'hello#index', :as => :hello_world
```

In your controller, you can access:

```ruby
params[:hello]
```

and

```ruby
params[:everyone]
```

These will automatically be extracted from the route.

## Exercise - Make a calculator

We are going to make a simple calculator, you will be able to give it two numbers, and have it give you the sum.

First create a controller and route. The routes should have space for two numbers. It should be possible to hit a URL like this:

http://localhost:3000/calculate/12/15

## Retrieve the values and store in instance variables

Now in your controller, retrieve these from the params hash and store them in instance variables, @number_1 and @number_2

## Sum them in the view

Finally create a view. In the view, sum together the two numbers, giving a nice output.

## Optional Extension

Try and think of a way you can make this work using a form. You will need to change the route to accomplish this.
