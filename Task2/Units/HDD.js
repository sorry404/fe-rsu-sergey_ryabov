function HDD(name, power) {
    Appliance.call(this, power);
}

HDD.prototype = Object.create(Appliance.prototype);