---
title: Using dup to dry up bang methods. Bang bang!
tags: ruby, rails
layout: "../../layouts/BlogPost.astro"
date: "2016-02-15"
preview: "Hello, and today we're going to take a dip into Active Support to look at how we can use Object#dup to dry up bang methods.

As you probably know, most methods are non destructive, but a bang method modifies an object in place. Here's a non-destructive method, it returns a modified copy of the object. The original object is not changed. This is what we want to do most of the time."
---

# Using dup to dry up bang methods. Bang bang!

Hello, and today we're going to take a dip into Active Support to look at how we can use Object#dup to dry up bang methods.

As you probably know, most methods are non destructive, but a bang method modifies an object in place. Here's a non-destructive method, it returns a modified copy of the object. The original object is not changed. This is what we want to do most of the time:


```ruby
a = "CrazyPony"
a.camelize
# => "crazy_pony"
a
# => "CrazyPony"
```





Here's the same thing with a bang. It changes the object in place.

```ruby
a.camelize!
# => "crazy_pony"
a
# => "crazy_pony"
```





Often we want to define both non bang and bang methods, but we don't want to repeat code.

```ruby

class String
  def camelize
    ("_#\{self}").gsub(/_[a-z]/){ |match| match[-1].upcase}
  end
end
```


