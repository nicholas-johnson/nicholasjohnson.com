---
title: What is Conda? What Can It Do?
tags: python, ai
layout: "../../layouts/BlogPost.astro"
date: "2023-09-25"
preview: "Anaconda gives you three things:


1. It's a Python dependency management tool, like NPM. 

2. It's a environment namagement tool like NVM or RVM. 

3. It's a curated repository of a few thousand hand-verified libraries that you can rely on.


In this short article we look at Conda, how to use it, how it works with Pip, how to work with environments, and how to load, save, and share environments in a requirements.txt.
"
---

Anaconda is a Python dependency managemnt tool. It gives you three things:

1. Dependency Management. It lets you install and remove packages.
2. Environment isolation. It's a environment management tool like NVM or RVM that lets you create isolated environments with their own dependencies, versions, and Python versions.
3. Repository of curated libraries. Conda has a few thousand hand-verified libraries that you can rely on.

As you can see, it combines several very useful tools into one helpful package.

## Installing Conda

Installation is easy. A simple double click install on On Windows and OSX, or a shell script on Linux. Instructions here:

<a target="_blank" href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html">Installing Anaconda</a>

## Conda Environments

Typing:

```sh
conda info
```

at the command line will list some details about your current conda environment. You should notice something like this:

```sh
active environment : base
```

This means we are in the base environment, a general environment for all our projects. Ideally we want to create a specific environment for our project. We can do this with conda create:

```sh
conda create -n my-project
```

This creates the environemt, but doesn't start using it. To activate the env, type:

```sh
conda activate my-project
```

If you have something like Oh My ZSH running you should see the command prompt change to let you know where you are. Nice.

## Installing packages

We can now install a package from the Anaconda repo with Conda install, thus:

```sh
conda install jellyfish
```

Having sone this, we can import it from any python script, and expect it to work:

```python
import jellyfish
```

Magic.

Note that Conda environments do not stack. You can't install a library in Base and expect it to be installed everywhere. Conda environments are all isolated one from the other.

## Listing packages

To see all the packages you have installed type:

```sh
conda list
```

## Listing environments

To see a list all the environments you have created, type:

```sh
conda env list
```

## Deleting en environment

To destroy an environment, type:

```sh
conda deactivate
```

Note that this is quite a common thing to do. Destroying and recreating an environment is not a big deal in with Anaconda, especially if you have a requirements.txt.

## Usage with Pip

Conda is fully compatible with Pip. Libraries installed with Pip are local to the package you are currently working inside, and, provided you're using Conda's version of Pip, are not global.

Pip using PyPy, which has a LOT more packages, but some of them might be broken or dangerous. Conda has a select few packages, but all of them work and will not infect your computer with herpes.

```sh
pip install nose
```

...makes `nose` available in this environment and no other.

<aside class="box">

## Help, I'm getting ModuleNotFoundErrors after a conda install

This likely means you're using a global version of python rather than Conda's local environment specific version. Try:

```sh
which python
```

If you see something like this:

```sh
which python
/usr/local/bin/python3
```

you have a global python, and probably need to hit stack overflow for instructions specific to your OS.

If you see something like:

```sh
which python
/Users/nicholas/anaconda3/envs/test-env-1/bin/python
```

You're all good.

Same deal with Pip.

A common mistage (especially with OSX) is to type `python3` or `pip3` to get Python 3 rather than the system default. You don't have to do this with Conda, it has already taken over the `python` command, and typing `python` will get you the version of Python active in the current environment.

</aside>

## Setting an environment specific version of Python

To use a specific version of Python, you have to create the environment with the python flag:

```sh
conda create --name test-env-2 python=3.8
```

You can't change the version of Python in a running environment, you have to make a new one, so you may want to `conda deactivate` first. This won't be painful if you have a requirements.txt file.

## Loading packages from a requirements.txt

If you want to share an environment, you can put all your requirements in a file. By convention this is called requirements.txt, but you can call it anything. It's a simple, newline separated list of all your requirements.

To install from a requirements.txt, first create your environment with conda create, then install from the file, like so:

```sh
conda install --file requirements.txt
```

## Saving packages to requirements.txt

You can save your current environment to a requirements.txt file, just by piping `conda list -e` into the file:

```sh
conda list -e > requirements.txt
```

You can then recreate this environment easily with:

```sh
conda install --file requirements.txt
```

## To sum up

So there we have it. A dependency tool, an environment manager, and a list of curated packages, all in one tidy bundle. Conda is pretty great, and you should probably know about it if you're using Python.
