---
title: File System
course: nodeCourse
slug: file-system
layout: ../../layouts/Course.astro
---

# Filing

We can access the file system using the fs module. This gives us methods to read from and write to a file.

IO operations are by their very nature slow and error prone. The fs module allows us to specify a callback function which will have access to our file. The file will be opened for you, then the callback will be invoked and the file passed in to it. You don't need to worry about opening and closing the file, you just need to write code to talk to the file object which you will receive.

Node is not blocked during IO, because your code is not invoked until the file is ready for writing.

## First require fs

We will need the fs module, so first require it, like this:

```js
var fs = require("fs");
```

## \_\_dirname

\_\_dirname is a special variable that always points to the current working directory.

If we console.log \_\_dirname it will give us a string showing us our current directory.

## Read a file with fs.readFile().

We can read the file using fs.readFile():

```js
fs.readFile(path, function (error, data) {
  // data contains the file contents
  // error is null if no error occurred
});
```

## Exercise - get the current directory

Create a little program that outputs the current working directory.

Extend your Node server so that it can output the value of \_\_dirname.

## Exercise - Read a file

Make a file containing some content. Write a program which can read the file from the current directory and output it to to console.

## Node is Asynchronous with Callback Functions

JavaScript has an unusual way of dealing with potentially slow operations such as reading from the file system, using a _callback function_. Say we have code like this.

```js
console.log("Before");
fs.readFile(path, function (error, data) {
  console.log("** During! **");
});
console.log("After");
```

If our code was executed synchronously (i.e. in order), we would expect this little program to output something like this:

```js
  Before
  ** During! **
  After
```

=code(code, :bash)

If we actually run our code, we find instead we most likely see something like this:

```js
  Before
  After
  ** During! **
```

=code(code, :bash)

This is because the callback function is not actually executed until the filesystem has opened the file for reading, which will take more time than it takes to log the word "After". This will be a familiar pattern if you have previously used DOM scripting or JQuery.

## Exercise - Extend your node server so that it can serve out a file

Create a folder called views (there's nothing special about this folder name, it's just a common name for one part of a standard MVC pattern). In this folder make a file called about.html. Add some content to it.

Use fs.readFile to get hold of the about.html file. Remember you can use \_\_dirname to get the current directory. In the fs callback use response.write() to write the file contents to the response. Finally call response.end to send the about content to the user.

Remember callbacks are asynchronous, you don't know how long it will take to start reading the file, and Node will not wait. **This means you will need to call response.end in the fs callback or the response will be returned before the file has been read.** Note this.

Now make it so!

%img{ src: '/images/make-it-so-captain.jpg' }

## Further Exercise - Re-implement Apache

Use the path portion of the URL to decide which file to show. You can get this by inspecting the request object.

_There are obvious security concerns here. Don't do this on a live server please!!!_

## Farther further exercise - 404

If the file doesn't exist, the error object will be non-null. Detect this case and return a 404.

Congratulations! You've implemented a rudimentary Apache! Of course there are limitations here, there's no mime-type handling and security in non existent. In the next section we'll see how we can use express to create static file serving middleware.

## Downloads

[Code Samples (dropbox)](https://www.dropbox.com/sh/daacc6yr3cc9uwv/AABBLOh-UQPUioooykEaE1tga?dl=1)
