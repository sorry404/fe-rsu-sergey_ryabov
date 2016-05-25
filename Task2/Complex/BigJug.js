function BigJug(name) {
    var jug = new jug(0);
	var spiral = new spiral(50);
    Complex.call(this, name, [cable, button, laser]);
}

BigJug.prototype = Object.create(Complex.prototype); 