---
title: 'Welcome to Python'
section: 'puthon'
course: 'python'
date: '2022-11-30 19:00:40'
---

Welcome to Python! Really, you're most welcome, come inside.

This short intro to Python will teach you all the fundamentals of the language with a focus on Machine Learning and Neural Networks. All the examples will relate to robotics and AI. Whoo!

This is not a beginners course, the assumption is you already know some programming, maybe JavaScript, C or Java. we're not going to look at what a variable is, we're just going to jump right in to building perceptrons and controlling robots.

I'm also going to assume you have access to a **Bash shell** or similar. If you want to use Windows, that's fine, but you might need to Google the equivalent commands.

The aim here is to learn the whole of the core of the language (variables, loops, conditionals, objects, that kind of thing). If you already know another language, this will take you about a day (plus a couple of nights dreaming).

## What is Python

Python is a fabulous little language with a tiny core and a whole lotta libraries. It comes in two flavours: Python 2 and Python 3. Python 3 has slightly stricter syntax, and it's the one we'll be using today.

It's unusual in that it has **semantic whitespace**. To nest a statement under another one, just indent, no need for curlies. To terminate a statement, use a newline, no need for semicolons.

## Origin story

Guido van Rossum, a dutch scientist working in Amsterdam, wanted a project to work on over Christmas while the university was closed. He was a big fan of Monty Python, and so Python was born.

He designed it right from the start to be extensible. You can write modules in Python or C, and this is one of the main reasons it's been so successful. Whatever you want to do, there's probably a really fast library to help you do it.

Here he is:

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Guido-portrait-2014-drc.jpg" alt="Guido van Rossum" />

> I think my most innovative contribution to Python’s success was making it easy to extend. That also came out of my frustration with ABC. ABC was a very monolithic design. There was a language design team, and they were God. They designed every language detail and there was no way to add to it. You could write your own programs, but you couldn’t easily add low-level stuff.

> Guido van Rossum

## Who uses Python anyway?

Python's friendlieness means it has become a preferred language in academia, and by extension AI and Machine Learning. Most of the core libraries are written in C, so although it's an interpreted language, it's actually pretty fast.

It's also favoured by roboticists. Builds like ADAFruit's CircuitPython or MicroPython make controlling arrays of servos, motors, or LEDs trivial. You can aquire camera data with a single command.

To give you an example, getting a servo and moving it looks like this:

    # Get the servo plugged in to pin 2
    pwm = pwmio.PWMOut(board.A2)
    my_servo = servo.Servo(pwm)

    # Rotate the servo to 180 degrees
    my_servo.angle = 180

# Interpreted of compiled

Python is both. You can run your Python code directly, in which case the code will be compiled to bytecode right before execution. All you need is a machine with a Python compiler.

You can also precompile it to bytecode in which case your .py file will be compiled into a .pyc file. The compiled file might be architecture specific, so if you compiled on ARM, it might not run on Intel.

# Getting started

Install Python3 here. Once installed, you can type `python` or `python3` at the command line to drop into a console. If you have multiple versions of Python installed, say on a mac, typing `python3` will disambiguate.

You can use any text editor, I like VSCode.

# Hello World

Jumping right in. Hello world is super simple

print('Hello Python')

In Python2 you could leave the braces out and just type

print 'Hello Python2!'

Not so in Python3. You should probably use the braces, but I'll leave that up to you.

## Exercise

Try it below. Change the code so it says something more interesting.

# Variables

Variables in Python are dynamically typed and come into existence when we first use them:

number_of_pies = 12

Being dynamically typed, we can change the type anytime:

    number_of_pies = 12
    print(number_of_pies)

    number_of_pies = 'a dozen'
    print(number_of_pies)

## Mutiple assignments

You can do multiple assignments:

a, b, c = 1, 2, 3

## Snake case

variables in python are snake_case (funny!). Use underscores to separate words. You're strongly encouraged to use proper descriptive names for your variables.

## Constants

Python doesn't have constants as such. By convention we use CAPTIALS_LETTERS to denote constants, but they're not true constants as the language won't stop you from changing them.

## Garbage collection

Variables are garbage collected automatically. You don't need to do any explicit memory management.
