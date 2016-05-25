function Monitor(name) {
    var display = new display(100);
    var cable = new cable(5);
    var button = new button(0);
    Complex.call(this, name, [display, cable, button]);
}

Monitor.prototype = Object.create(Complex.prototype); 