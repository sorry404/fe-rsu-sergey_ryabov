function button(power) {
    Appliance.call(this, power);
}

button.prototype = Object.create(Appliance.prototype);