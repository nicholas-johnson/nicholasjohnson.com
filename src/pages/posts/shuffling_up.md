---
title: Shuffling up method params with parallel assignation
tags: ruby, rails
layout: "../../layouts/BlogPost.astro"
date: "2016-02-15"
preview: "This little rockstar will make a whole RESTful form for you containing just one button, so you can make put, post and delete requests without relying on JavaScript.

In this section, we're going to look at how parallel assignation gives us two clean and simple ways to call the helper."
---


Today's Rails is the button_to helper.

This little rockstar will make a whole RESTful form for you containing just one button, so you can make put, post and delete requests without relying on JavaScript.

In this section, we're going to look at how parallel assignation gives us two clean and simple ways to call the helper.

## Here's the code:

```ruby
def button_to(name = nil, options = nil, html_options = nil, &block)
  html_options, options = options, name if block_given?
  options      ||= {}
  html_options ||= {}

  html_options = html_options.stringify_keys
  convert_boolean_attributes!(html_options, %w(disabled))

  url    = options.is_a?(String) ? options : url_for(options)
  remote = html_options.delete('remote')

  method     = html_options.delete('method').to_s
  method_tag = BUTTON_TAG_METHOD_VERBS.include?(method) ? method_tag(method) : ''.html_safe

  form_method  = method == 'get' ? 'get' : 'post'
  form_options = html_options.delete('form') || {}
  form_options[:class] ||= html_options.delete('form_class') || 'button_to'
  form_options.merge!(method: form_method, action: url)
  form_options.merge!("data-remote" => "true") if remote

  request_token_tag = form_method == 'post' ? token_tag : ''

  html_options = convert_options_to_data_attributes(options, html_options)
  html_options['type'] = 'submit'

  button = if block_given?
    content_tag('button', html_options, &block)
  else
    html_options['value'] = name || url
    tag('input', html_options)
  end

  inner_tags = method_tag.safe_concat(button).safe_concat(request_token_tag)
  content_tag('form', content_tag('div', inner_tags), form_options)
end
```




<a href= "https://github.com/rails/rails/blob/master/actionview/lib/action_view/helpers/url_helper.rb" >source</a>



## Parallel Assignation

On line 2 we see this happy little guy:

```ruby
html_options, options = options, name if block_given?
```





Ruby is allowing us to assign multiple variables on a single line. Here's an example:


```ruby
a,b = 1,2

# a => 1
# b => 2
```




## Two ways to call the helper

In the button_to helper there are two ways to set the content of the button, either by passing a string, or by passing a block, like so:

```ruby
# method one
button_to "profile", profile_path

# method two
button_to profile_path do
  "profile"
end
```




But the method is defined like this:

```ruby
def button_to(name = nil, options = nil, html_options = nil, &block)
  # ...
end
```




Passing nil as the first parameter looks lame, so if a block is given we want to shuffle up the parameters, putting the value of name into options, and the value of options into html_options.

We can achieve this nice and easily using parallel assignation, like so:

```ruby
def fnc(a=nil,b=nil,c=nil, &block)
  if block_given?
    b,c = a,b
  end
end

fnc(1,2,3)
fnc(2,3) {1}
```



