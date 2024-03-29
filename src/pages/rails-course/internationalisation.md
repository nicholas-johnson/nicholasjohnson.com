---
title: "Internationalisation"
description: ""
section: "ruby"
course: "railsCourse"
exercise: "internationalisation"
layout: ../../layouts/Course.astro
---

# Internationalisation

## Rails Locales

Rails defines Yaml files for internationalisation of strings. These are held in config/locales.

The Yaml files contain a set of strings. To access a string from your controller, use: I18n.t 'hello'. In your view, you can use: <%= t('hello') %>

If a string is not defined in your locale, the default locale is used instead. This can be set in application.rb.

## Sample locales.

Check out Sven Fuchs' rails i18n project for a pretty good basic locale set.

<https://github.com/svenfuchs/rails-i18n/tree/master/rails/locale>

## Finding the locale from your URL.

Your locale will not be set for you. You can use your URL to set it, then retrieve it using a filter in application_controller.rb

before_action :set_locale

def set_locale
I18n.locale = params[:locale] || I18n.default_locale
end

Now if you hit a URL like this:

localhost:3000?locale=fr

The locale will be set to 'fr' (French).

There are various other options here. You can read about them in the documentation here: <http://guides.rubyonrails.org/i18n.html>

## Exercise: Localise your blog

Create a locale file for a language you know. Now take one of the strings, e.g. 'New Blog Post'. Create a locale file to localise this string.
