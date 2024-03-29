---
title: "Integration Exercise"
description: ""
section: "ruby"
course: "railsCourse"
exercise: "integration"
layout: ../../layouts/Course.astro
---

# Blog integration exercise

Create a new Rails App using:

```sh
rails.new;
```

We're going to put everything together and make a simple blog.

## Create the model

First create a BlogPost model and give it some attributes. You can use the following generator as a jumping off point. You will need to add a content:text and probably also a date:datetime too.

```sh
  rails g model blog_post title:string
```

## Create the controller

Next we'll need a BlogPost controller. Use a generator like this:

```sh
  rails g controller blog_post
```

## Create your routes

Use resources to create the standard CRUD routes. Like this:

```ruby
resources: blog_post;
```

## Create the CRUD methods

Review your scaffold code and create the standard Rails CRUD actions in your controller (index, show, new, create, edit, update, destroy). Create views to go along with them.

## Validation

Use validates_presence_of :title to validate that the blog_post has a title. It is now not possible to save a blog_post without a title. Add validation for the content.

## Homepage

Set `blog_post#index` as the homepage

## Friendly URLs

Add a slug attribute to the blog_post. Do a find_by_slug instead of a regular find in your show method.

You can use a migration to add the field, something like:

```sh
rails g migration add_slug_to_blog_post
```

Within the migration you will want to do:

```ruby
add_column :blog_posts, :slug, :string, index: true
```

# Comments

We're going to create a Comment model. Comments belong to BlogPosts and blog_posts have many comments. You'll need something like the following:

```ruby
class BlogPost
  has_many :comments
end

class Comment
  belongs_to :blog_post
end
```

Comment will need a blog_post_id:integer attribute.

Use the generator to create the post.

## Routes. We'll use a nested route to generate the resources. Modify your routes.rb file like so:

```ruby
resources :blog_posts do
resources :comments
end
```

rake routes to check the routes you have made.

- [side project - read up on routes here](http://api.rubyonrails.org/classes/ActionDispatch/Routing.html)
- [and here](http://guides.rubyonrails.org/routing.html)

## Comment Controller

Make a comment controller with a new and create method. It should receive a comment and create it. Make a matching view and form.

## Form

Integrate the comment form into the BlogPost#show view. Integrate the list of comments into this view.

## Optional finishing up

- Style your blog nicely using assets.
- Deploy to Heroku. <https://devcenter.heroku.com/articles/getting-started-with-rails4>
