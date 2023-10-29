Prototypical inheritance is a complicated sounding name for a disarmingly simple concept. 

Most languages are classical, this means that the medium of inheritance is the class. We create a class and optionally have that class extend another class, creating a class hierarchy. Any objects we instantiate from that class will have access to the methods of that class and also its parents. 

JavaScript is one of the few languages in the world to instead implement prototypical inheritance. Prototypical inheritance is a radically simplified type of inheritance that gives the developer significantly more flexibility. 

Every object in JavaScript has a prototype pointer that points to a parent object. When we try to get an attribute of an object, JavaScript will look first in that object, and then up the prototype chain, to the parent and the parent, until the prototype is null when it will stop. 

## __prototype__

The 