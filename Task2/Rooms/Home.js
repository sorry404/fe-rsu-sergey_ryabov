function Home() {
    kitchen.call(this);
	livingRoom.call(this);
	
    this.name = 'Home';
}

Home.prototype = Object.create(kitchen.prototype);
Home.prototype = Object.create(livingRoom.prototype);