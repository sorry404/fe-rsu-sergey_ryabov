function cable(name, power) {
    Appliance.call(this, power);
}

cable.prototype = Object.create(Appliance.prototype);