function Kitchen() {
    var kettle = new Kettle('Bosch');
	var gasCooker = new GasCooker('Gorenje');
	var tv = new TV('Lenovo');
	
    this.name = 'Kitchen';
	Room.call(this, 'LivingRoom', [kettle,gasCooker,tv]);
}

Kitchen.prototype = Object.create(Room.prototype);