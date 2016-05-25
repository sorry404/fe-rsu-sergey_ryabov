function Audio(name) {
    var speaker = new speaker(90);
    var cable = new cable(5);
    var button = new button(0);
    Complex.call(this, name, [speaker, cable, button]);
}

Audio.prototype = Object.create(Complex.prototype); 