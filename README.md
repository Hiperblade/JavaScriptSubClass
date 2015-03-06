JavaScriptSubClass
=================

A simple javascript implementation for inheritance (private, public and protected members)

I don't like the "prototype" approach like [this](http://philipwalton.com/articles/implementing-private-and-protected-members-in-javascript/).

I prefer use the constructor, because the code is more clear.
Of course you pay a price in terms of performance, but for me are more important the correctness and the maintainability.

In the example html I made a base class and three subclasses for explain how to create private, public and protected methods and show the polymorphism feature.


```javascript

function BASE_CLASS(startValue)
{
	var base = Function.subClass(this);

	// private
	var privateField = startValue;
	var privateMethod = function() { return this.Protected().protectedMethod(privateField); };

	// protected
	this.Protected().protectedMethod = function(value) { return value * 2; }

	// public
	this.publicMethod = privateMethod;
}

function SUB_CLASS(startValue)
{
	var base = Function.subClass(this, BASE_CLASS, [startValue]);

	// protected
	this.Protected().protectedMethod = function(value) { return value * 3; }
}


var o = new SUB_CLASS(6);
var result = o.publicMethod();
// result == 18
``` 