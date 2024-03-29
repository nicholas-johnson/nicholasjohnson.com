---
title: "Hello World"
description: ""
section: "ruby"
course: "railsCourse"
exercise: "hello-world"
layout: ../../layouts/Course.astro
---

# Hello World

Hello World is the traditional way to start any new framework. Hello World in Rails is fairly simple, around six lines of code. In this section we'll create an MVC hello world using a simple model, a controller, and a view, in fact the full MVC stack.

This will take us about three minutes. Rails is nice that way.

## Create your rails application

At a terminal type:

```sh
rails new HelloWorld
```

This initialises a new blank application called HelloWorld

## Start your rails application server

At a terminal navigate to your HelloWorld directory and type:

```sh
rails server
```

Wait for the application to start then in a web browser visit:

<http://localhost:3000>

## Creating a Controller

Create a new file in the app/controllers directory called hello_controller.rb

```ruby
class HelloController < ApplicationController
  def index
    @text = "Hello World!"
  end
end
```

This controller defines a single method called index. Index is the default controller action. If you're familiar with HTML this should make sense.

The index method creates an instance variable called @text.

## Creating a View

In the app/views/hello directory (you'll need to create this directory) create a file called index.html.erb containing the following

```ruby
<h1>Hello World</h1>
<%= @text %>
```

=code(code, :erb)

Views have access to the controller's instance variables. You don't need to do any work to pass them through, they're just there.

## Create a route

Visit config/routes.rb. Take a moment to read the helpful instructions, then add the line:

```ruby
get '/hello' => 'hello#index', :as => :hello_world
```

This line creates a named route (called hello_world). It matches the HelloController index method.

## Hey Presto

In a web browser visit:

<http://localhost:3000/hello>

And there we are. Of course we're only touching on the awesome power of Rails here, but this should give you an idea of how easy things are to get going.

## Exercise - Goodbye World

Change your app into a goodbye world app. Here are the thing's you'll need to do:

1. Add a new controller goodbye_controller.rb.
2. Add a route.
3. Add a view

Make it so that you can visit <http://localhost:3000/goodbye> to see the goodbye view.

## Exercise - Tell the time

We're going to create a simple website that displays the current time and date.

1. Create a controller called something like time_controller.
2. Add a route
3. In your controller create a variable called @time which contains the value: Time.now. This is just the current time.
4. Write a view which outputs the value of the @time variable. Look up strftime for help with this.

## Exercises - Root URL

Adjust your app so it responds to the root url. You should be able to visit:

<http://localhost:3000/>

and see hello world.

- First delete public/index.html
- Now view the instructions in config/routes.rb to create a default URL.
