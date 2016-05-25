function speaker(name, power) {
    Appliance.call(this, power);
}

speaker.prototype = Object.create(Appliance.prototype);