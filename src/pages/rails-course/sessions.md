---
title: "Sessions hash"
description: ""
section: "ruby"
course: "railsCourse"
exercise: "sessions"
layout: ../../layouts/Course.astro
---

# Sessions

Rails allows you to store session data on the client in the form of an encrypted cookie. You can read from and write to the session cookie simply by accessing to the session hash:

```ruby
session[:user_id] = 1234
```

It's up to you how much data you store on the client, though if you store too much you will probably encounter a cookie overrun.

The most common use for sessions is for login. We might log a user in by storing the id of a User model in the session.

We might then log out by session this value to nil.

[Read more on sessions here](http://guides.rubyonrails.org/action_controller_overview.html#session):

<aside class="box">

## Beware cookie attacks

Be aware that although the cookie is encrypted, all client side data is potentially open to attack. If your admin user has an id of 1, you might be opening a ready attack vector.

For this reason I generally store user keys in the session, where user keys are large random alphanumeric values generated in some non-standard way.

</aside>

## Exercise - Access the session hash

A simple one first.

1. Create a \_header partial which outputs session[:username].
2. Now create a form which submits a username to a controller.
3. In the controller, store the username in the session.

Now as long as the session persists, the username is visible in the header, even if you navigate away from the page.

## Exercise - Login

We are going to implement login.

1. Create a user model with an email and password. Use the console to create a few user objects.
2. Your user model should have a login method that accepts a password. If the password matches, this method returns true.
3. Create a session controller. Give it a new method. Have the view render a login form which accepts a username and password.
4. Give your session controller a create method. Post the data from the login form to it. This method should find a user by email, and if one is found, call the login method with the password.
5. If everything checks out, add the user id to the session
6. Now in ApplicationController add a before_filter. This should check the session for a user_id, pull the user from the database and save it in @current_user instance variable.
7. Finally write a partial which displays the session user email.
