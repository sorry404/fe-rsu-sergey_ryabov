function grill(name, power) {
    Appliance.call(this, power);
}

grill.prototype = Object.create(Appliance.prototype);