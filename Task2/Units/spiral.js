function spiral(name, power) {
    Appliance.call(this, power);
}

spiral.prototype = Object.create(Appliance.prototype);