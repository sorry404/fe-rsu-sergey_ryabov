function Complex(name, Appliances) {
    this.Appliances = Appliances;
    Appliance.call(this, name, this.getPower());
}

Complex.prototype = Object.create(Appliance.prototype);

Complex.prototype.getPower = function () {
    var totalPower = 0;

    for (var i = 0; i < this.Appliances.length; i++) {
        totalPower += this.Appliances[i].getPower();
    }

    return totalPower;
};

Complex.prototype.showPower = function () {
    console.info('Power of ' + this.getName() + ' is ' + this.getPower());
};

Complex.prototype.search = function (what) {
    this.checkIfHas(what);

    this.Appliances.forEach(function (Appliance) {
        Appliance.checkIfHas(what);
    })
};