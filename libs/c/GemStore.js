function GemStore(){
	
	// Define resources.
	Resources.images.add('red', '../../images/red1.png');
	Resources.images.add('green', '../../images/green1.png');
	Resources.images.add('yellow', '../../images/yellow1.png');
	Resources.images.add('pink', '../../images/pink1.png');
	Resources.images.add('blue', '../../images/blue1.png');
	
	this.store = new Array();
	
	this.populateStore = function(){
		var gemSeed = {0 : "red", 1 : "green", 2 : "yellow", 3 : "pink", 4 : "blue"};
		
		for (var i = 0; i < 20; i++){
			this.store.push(gemSeed[Math.floor(Math.random() * 5)]);
		}
	};
	
}