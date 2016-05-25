function Burners(name) {
    var grill = new grill(50);
    var button = new button(0);
    Complex.call(this, name, [grill,button]);
}

Burners.prototype = Object.create(Complex.prototype);  