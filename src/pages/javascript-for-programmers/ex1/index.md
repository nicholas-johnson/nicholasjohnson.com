# Guess the output

For each of the following, try to work out what the output will be. Run the code to check your answer.

## 1.

```js
var a = 12;
(function () {
  alert(a);
})();
```

## 2.

```js
var a = 5;
(function () {
  var a = 12;
  alert(a);
})();
```

## 3.

```js
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();

x();
```

## 4.

```js
var a = 10;
var x = (function () {
  var y = function () {
    var a = 12;
  };
  return function () {
    alert(a);
  };
})();

x();
```

## 5.

```js
var a = 10;
var x = (function () {
  (function () {
    a = 12; // <<< look carefully at this line.
  })();
  return function () {
    alert(a);
  };
})();

x();
```

## 6.

```js
var a = 10;
(function () {
  var a = 15;
  window.x = function () {
    alert(a);
  };
})();

x();
```

## Further Reading

[Read my post on "What is a closure" on Stack Overflow](http://stackoverflow.com/a/7464475/687677)
