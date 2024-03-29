---
title: Delegating methods using extend
tags: ruby, rails
layout: "../../layouts/BlogPost.astro"
date: "2016-02-15"
preview: "A change from Rails today, we're dipping into Sinatra to look at how we can use extend to implement a Delegator.

A delegator is an object which delegates responsibility to another object. Sinatra uses it to delegate methods called on the global scope to another object which can handle them."
---

A change from Rails today, we're dipping into Sinatra to look at how we can use extend to implement a Delegator.

A delegator is an object which delegates responsibility to another object. Sinatra uses it to delegate methods called on the global scope to another object which can handle them.

## Sinatra

Sinatra allows us to write code like this:

```ruby
get "/hello"
  return "Hello There!"
end
```

The get method appears to be defined in the global scope. In fact, the methods are namespaced nicely in a class called Application. The global scope is delegating method calls to the Application class.

## The Delegator forwards method calls to another class

If we look inside Sinatra/Base we'll find this dandy little action ninja:

```ruby
module Delegator #:nodoc:
  def self.delegate(*methods)
    methods.each do |method_name|
      define_method(method_name) do |*args, &block|
        return super(*args, &block) if respond_to? method_name
        Delegator.target.send(method_name, *args, &block)
      end
      private method_name
    end
  end

  delegate :get, :patch, :put, :post, :delete, :head, :options, :link, :unlink,
           :template, :layout, :before, :after, :error, :not_found, :configure,
           :set, :mime_type, :enable, :disable, :use, :development?, :test?,
           :production?, :helpers, :settings, :register

  class << self
    attr_accessor :target
  end

  self.target = Application
end
```

<a href="https://github.com/sinatra/sinatra/blob/eec8c52cdb04f39d74f008ad4f60e65fe7edc62c/lib/sinatra/base.rb">Source</a>

This module defines a whole load of methods using define_method. If you look though, all of these methods send a call to the Delegator.target which, which in this case is the Application class.

## Rocking it in on the global scope

Now Sinatra needs to mix these methods in to the global scope, so they are available everywhere. If you remember from last time we add methods to an object (rather than to a class) using extend.

From the global scope we can now simply do this:

```ruby
extend Sinatra::Delegator
```

This will extend the global scope object (pointed to by self) with the methods in the mixin. We can now call all of these methods on the global scope, and the delegator will forward them nicely onto the Application class.
