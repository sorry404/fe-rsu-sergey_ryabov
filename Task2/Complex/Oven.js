function Oven(name) {
    var grill = new grill(50);
    var cable2 = new cable2(100);
    Complex.call(this, name, [grill,cable2]);
}

Oven.prototype = Object.create(Complex.prototype);  