function jug(name, power) {
    Appliance.call(this, power);
}

jug.prototype = Object.create(Appliance.prototype);