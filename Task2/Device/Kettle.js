function Kettle(name) {
    var BigJug = new jug('Tefal');
    var buttons = new button(0);
    var cable = new cable2(100);
    
	Complex.call(this, name, [
		BigJug,
		button,
		cable2
	]);
}

Kettle.prototype = Object.create(Complex.prototype);  