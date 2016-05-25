//Create an object called shape that has the type property and a getType(), getPerimeter() and draw() method. Draw method shows in console that (*name is drawn)
var shape = {
	type: "figure",
  
	getType: function() {
		return this.type;},
  
	getPerimeter: function(){
		return this.a+this.b+this.c+this.d;
	},
  
	draw: function(){
		return shape.name;
	}
};

//Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three own properties—a, b, and c, representing the lengths of the sides of a triangle.

function Triangle(a, b, c) {
	this.type = 'triangle';
	this.a = a;
	this.b = b;
	this.c = c;
}
Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;

//Define a Square() constructor function whose prototype is shape. Objects created with Square() should have three own properties—a, b, c, and d representing the lengths of the sides of a square.
function Square(a, b, c, d) {
  this.type = 'square';
  this.a = a;
  this.b = b;
  this.c = c;
}

Square.prototype = shape;
Square.prototype.constructor = Square;

//Add one more Shape that inherits Triangle or Square or some other shape (in this case you should add it too) and has some specific method and properties
function Rhombus(a, b, c, d) {
	this.type = 'rhombus';
	this.angleOne = 80;
	this.angleTwo = 100;
}

Rhombus.prototype = Square;
Rhombus.otherAngles = function() {
	var angleThree = angleOne;
    var angleFour = angleTwo;
	return angleThree, angleFour;
};

Rhombus.prototype.constructor = Rhombus;