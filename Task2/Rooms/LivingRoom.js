function LivingRoom() {
    Kitchen.call(this);
	
    var computer = new Computer('ASUS');
    var homeTheater = new HomeTheater('Sony');
    
 //   this.name = 'LivingRoom';
 //   this.Appliances= this.Appliances.concat([computer, homeTheater]);
   Room.call(this, 'LivingRoom', [computer, homeTheater]);
}

LivingRoom.prototype = Object.create(Room.prototype);