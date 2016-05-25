function Room(name, units) {
    Complex.call(this, name, units);
}

Room.prototype = Object.create(Complex.prototype);

