function HomeTheater(name) {
    var Monitor = new Monitor('Philips');
	var Audio = new Audio('Defender');
	var cable2 = new cable2 (100);
	
    Complex.call(this, name, [
        Monitor,
        Audio,
		cable2
	]);
}

HomeTheater.prototype = Object.create(Complex.prototype);