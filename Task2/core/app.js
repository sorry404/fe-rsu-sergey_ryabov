function Application() {

}

Application.prototype.start = function () {
    var kitchen = new Kitchen();
    kitchen.showPower();
    kitchen.search('Gorenje');

    var livingRoom = new LivingRoom();
    livingRoom.showPower();
    livingRoom.search('ASUS');
	
	var home = new Home();
    home.showPower();
    home.search('Computer');
};