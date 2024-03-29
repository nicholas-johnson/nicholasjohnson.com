---
title: Checking if an object is a subclass
tags: ruby, rails
layout: "../../layouts/BlogPost.astro"
date: "2016-02-15"
preview: "Short tip today, checking if a class is a subclass of another object."
---

Short tip today, checking if a class is a subclass of another object.

```ruby
class Emotion; end
class Lassitude < Emotion; end
```

We can use is_a? to test if an instance is an instance of a class or not

```ruby
feeling_this_morning = Lassitude.new
feeling_this_morning.is_a? Lassitude
# => true
feeling_this_morning.is_a? Emotion
# => true
feeling_this_morning.is_a? Object
# => true
```

If we want to test if the class itself is a subclass though, we can't use is_a? because:

```ruby
Lassitude.is_a? Class
# => true
```

Instead we use the less than < operator

```ruby
Lassitude < Emotion
# => true
```

If we want to include the class itself we can use the <= operator

```ruby
Lassitude <= Lassitude
# => true

Lassitude <= Emotion
# => true
```
