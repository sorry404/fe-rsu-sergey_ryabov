function Appliance(name, power) {
    this.name = name;
    this.power = power;
}

Appliance.prototype.getName = function () {
    return this.name;
};

Appliance.prototype.getPower = function () {
    return this.power;
};

Appliance.prototype.checkIfHas = function (what) {
    if (this.getName().toLowerCase().indexOf(what.toLowerCase()) >= 0) {
        console.info('"' + what + '" has been found in "' + this.getName() + '"');
    }
};