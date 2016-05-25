function laser(name, power) {
    Appliance.call(this, power);
}

laser.prototype = Object.create(Appliance.prototype);