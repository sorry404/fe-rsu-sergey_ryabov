function TV(name) {
    var Monitor = new Monitor('Sony');
	var Audio = new Audio('Defender');
	var cable2 = new cable2 (100);

    Complex.call(this, name, [
        Monitor,
        Audio,
		cable2
    ]);
}

TV.prototype = Object.create(Complex.prototype);