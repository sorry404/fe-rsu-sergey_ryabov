function CPU(name, power) {
    Appliance.call(this, power);
}

CPU.prototype = Object.create(Appliance.prototype);