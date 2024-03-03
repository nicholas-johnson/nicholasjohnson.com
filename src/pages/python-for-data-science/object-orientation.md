# Classes and Object Orientation

In Python, as with most languages, all objects are made using classes. There are no object literals, you mist make a class.

define a class like this:

```py
class Cat:
    pass
```

Pass is a null keyword in Python. It is a placeholder that is syntactically necessary but which does nothing. I'm using it here to create an empty class.

## Methods

We can initialise out class using the `__init__` method. Here we can set up our class attributes:

```py
class Cat:
    __init__(self):
        self.miows = 2
```

Methods in python are just functions that belong to an object. Notice how the init method recieves self as its first parameter? All python methods recieve this parameter. The interpreter will secretly add it for us:

```py
class Cat:
    __init__(self):
        self.miows = 2

    do_miows(self, number_of_miows):
        self.miows += numbero_of_miows
```
