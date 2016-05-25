function SystemBlock(name) {
    var CPU = new CPU(50);
    var motherboard = new motherboard(30);
    var HDD = new HDD(60);
    var PowerSupply = new PowerSupply(400);
    Complex.call(this, name, [CPU, motherboard,HDD,PowerSupply]);
}

SystemBlock.prototype = Object.create(Complex.prototype);  