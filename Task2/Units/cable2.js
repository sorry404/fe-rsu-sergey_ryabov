function cable2(name, power) {
    Appliance.call(this, power);
}

cable2.prototype = Object.create(Appliance.prototype);