function display(name, power) {
    Appliance.call(this, power);
}

display.prototype = Object.create(Appliance.prototype);