# QUnit

QUnit is a popular unit testing framework for JavaScript. It's used in several large projects including JQuery and Underscore.

We're going to use it to test our Mario app.

## 1. Add the HTML and CSS

First insert the following little bit of HTML at the bottom of your Mario page.

    <div id="qunit"></div>
    <div id="qunit-fixture"></div>

Now in the header, link to the CSS and JavaScript using the following sources:

    http://code.jquery.com/qunit/qunit-1.14.0.css
    http://code.jquery.com/qunit/qunit-1.14.0.js

## 2. Test Bowser Boost

Create a tests.js file, and link to it in the header. Add code a bit like this:

    $(function() {
      test("bowser boost is off by default ", function() {
        equal(marioWorld.characters.bowser.boost, 0);
        equal(marioWorld.characters.bowser.attackPower, 24);
      });
      test("bowser boost increases attack power", function() {
        marioWorld.characters.bowser.boost = 10
        equal(marioWorld.characters.bowser.boost, 10);
        equal(marioWorld.characters.bowser.attackPower, 84);
      });
    })

This will test that the attack power is affected by the boost attribute as expected.

## 3. Test other aspects of your app.

Try to test each aspect of your Mario World app. See if each part of the API behaves as expected.

Add a Koopa character. Koopa can have a green shell or a red shell. A red shell increases his attack power by 5. Try to build this functionality using a test suite.
