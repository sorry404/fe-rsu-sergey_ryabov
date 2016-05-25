function Computer(name) {
    var SystemBlock = new SystemBlock('ASUS');
    var Mouse = new Mouse('Genius');
    var Monitor = new Monitor('ViewSonic');
	var Keyboard = new Keyboard('Genius');
	var cable2 = new cable2 (100);

    Complex.call(this, name, [
        SystemBlock,
        Mouse,
        Monitor,
		Keyboard,
		cable2
    ]);
}

Computer.prototype = Object.create(Complex.prototype);