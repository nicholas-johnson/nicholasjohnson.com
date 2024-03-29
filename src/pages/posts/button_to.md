---
title: Today's Rails is the button_to helper
tags: ruby, rails
layout: ../../layouts/BlogPost.astro
date: 2016-02-15
preview: "This little rockstar will make a whole RESTful form for you containing just one button, so you can make put, post and delete requests without relying on JavaScript.


A regular a link can only submit via get. To delete a resource you would usually submit a request via delete.


You can submit a delete request in two ways, either via JavaScript, or as a form submission. You don't want an errant search engine spider hitting all your URLs and deleting all your data, so hiding delete links in this way is a good idea, since spiders generally won't parse JavaScript or submit forms."
---

Today's Rails is the button_to helper.

This little rockstar will make a whole RESTful form for you containing just one button, so you can make put, post and delete requests without relying on JavaScript.

A regular "a" link can only submit via get. To delete a resource you would usually submit a request via delete.

You can submit a delete request in two ways, either via JavaScript, or as a form submission. You don't want an errant search engine spider hitting all your URLs and deleting all your data, so "hiding" delete links in this way is a good idea, since spiders generally won't parse JavaScript or submit forms.

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

## convert_boolean_attributes!

This little private helper takes an array of keys. If the key is found in the options hash, it replaces the value with a string. For example:

```ruby
convert_boolean_attributes!(html_options, %w(disabled))
```

if we pass in disabled:true in the options hash, we get back disabled:"disabled"

Here's the source:

```ruby
def convert_boolean_attributes!(html_options, bool_attrs)
  bool_attrs.each { |x| html_options[x] = x if html_options.delete(x) }
  html_options
end
```

Check out line 2: if html_options.delete(x)

Deleting a key returns the key, so if it's truthy, the first part of the statement is triggered.

## Optional block

The helper takes an optional block. This is checked for using block_given?. If you pass in a block, you will get a button. If you don't , you'll get an input type="submit".

## Read more

[Go read more about it on Github here](https://github.com/rails/rails/blob/master/actionview/lib/action_view/helpers/url_helper.rb)
