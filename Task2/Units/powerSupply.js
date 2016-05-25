function powerSupply(name, power) {
    Appliance.call(this, power);
}

powerSupply.prototype = Object.create(Appliance.prototype);