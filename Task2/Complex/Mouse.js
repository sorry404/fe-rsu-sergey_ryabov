function Mouse(name) {
    var cable = new cable(5);
    var button = new button(0);
    var laser = new laser(3);
    Complex.call(this, name, [cable, button, laser]);
}

Mouse.prototype = Object.create(Complex.prototype); 