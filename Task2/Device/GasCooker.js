function GasCooker(name) {
    var Burners = new Burners('Gefest');
	var Oven = new Oven('Gefest');
	var cable2 = new cable2 (100);

    Complex.call(this, name, [
        Burners,
        Oven,
        cable2
    ]);
}

GasCooker.prototype = Object.create(Complex.prototype);  