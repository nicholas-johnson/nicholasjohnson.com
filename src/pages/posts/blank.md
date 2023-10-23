---
title: Using Object#blank? to check for whitespace
tags: ruby, rails
layout: "../../layouts/BlogPost.astro"
date: "2016-02-15"
preview: "The blank? method is defined on object, and is not Rails specific. An object is blank if it is false, empty or a whitespace string."
---

The blank? method is defined on object, and is not Rails specific. An object is blank if it is false, empty or a whitespace string.

```ruby
"".blank?
# => true

" ".blank?
# => true

"\n".blank?
# => true

"\n\r".blank?
# => true

[].blank?
# => true

{}.blank?
# => true

"\n \n\n".blank?
# => true

nil.blank?
# => true

false.blank?
# => true

```

When writing a CMS, you're users may enter all kinds of unintentional whitespace into your fields. Object#blank? will catch all of these cases.

We might use blank? in our templates to provide fallbacks, for example:

```ruby
<% unless @article.summary.blank? %>
<%= @article.summary %>
<% else %>
<%= @article.full_text %>
<% end %>
```
