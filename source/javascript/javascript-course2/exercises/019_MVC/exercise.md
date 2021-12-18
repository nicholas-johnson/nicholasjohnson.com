# MVC

MVC (or MV*) is an excellent pattern for front end development once we move past a certain level of functionality.



## View

A view is an object which is responsible for managing a part of the DOM. It usually holds a link to a DOM node. It might also set up event listeners, and render itself.

A view listens to the DOM and calls methods to update the model. For example, it might listen to an input.keyup event and update the value in the model from the input.val().

A view might also listen to the model. When the model updates, the view renders itself to reflect the change.

We refer to this as data binding.



## Model

A model holds information about an object in the system. For example, a user, or a shoppingCart.

The model generally has methods to update itself. calling these methods generally triggers an event when a field is updated which the view can listen out for.



## Exercise - create an MVC powered form.

We're going to create a form which allows us to manipulate data about a thing. We're going to store that data in a JSON object, and when that object is changed, we're going to render the values to the screen, so that as you type in the form, the record is updated.

First choose a domain. For example, a user, an order, a space laser, a cat, etc.



### 1. Create a model

Use my barebones code as a template if you feel you need to. Create a model to represent your object. It should have setter methods to set the attributes. The setter methods should trigger a 'change' event.



#### Optional extra

For bonus points write a single generic setter method which accepts a string as the attribute name, a value for the value , and which triggers an event.



### 2. Create a formView

Create an HTML form. Now create a view which listens to the input elements in it. On keyup, call your model setter methods to update the model.



### 3. Create a catView (or userView, etc)

Create a view which listens to the model, and renders itself whenever the model change event occurs.

We now have a form, typing in the form should update the model, which should in turn update the catView.



## Bonus Exercise

If you have time, add a metaDataView, which shows when the model was last updated.

You can see how we can just add additional views without worrying about our code turning to spaghetti.



### Extra bonus exercise

Create a catList and catListView. Submitting the form creates a catModel and adds it to the catList
