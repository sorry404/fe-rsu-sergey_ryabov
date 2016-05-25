function Keyboard(name) {
    var button = new button(0);
    var cable = new cable(5);
    Complex.call(this, name, [button, cable]);
}

Keyboard.prototype = Object.create(Complex.prototype); 