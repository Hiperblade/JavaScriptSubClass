//----------------------------------------------
// Sub Class
//
// Giorgio Amadei
// https://github.com/Hiperblade/JavaScriptSubClass
//----------------------------------------------
Function.prototype.subClass = function (obj, baseClass, parameters)
{
	var base = {};
	if(baseClass == undefined)
	{
		var protected = {};
		base.Protected = function() { return protected; };
		obj.Protected = base.Protected;
	}
	else
	{
		// constructor
		baseClass.apply(obj, parameters);

		// duplicate public methods
		for(var propertyName in obj) {
			base[propertyName] = obj[propertyName];
		}
	}
	return base;
}