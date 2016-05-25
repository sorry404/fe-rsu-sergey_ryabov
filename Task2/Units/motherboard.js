function motherboard(name, power) {
    Appliance.call(this, power);
}

motherboard.prototype = Object.create(Appliance.prototype);