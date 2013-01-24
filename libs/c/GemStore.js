function GemStore(){
	
	// Properties ===============================
	this.store = new Array();
	
	
	// Methods ==================================
	this.Init = function(){
		var red =  new Image();		
		var green = new Image();		
		var yellow = new Image();		
		var pink = new Image();		
		var blue = new Image();		
		
		red.src = 'images/red1.png';
		green.src = 'images/green1.png';
		yellow.src = 'images/yellow1.png';
		pink.src = 'images/pink1.png';
		blue.src = 'images/blue1.png';
	
		// Define resources.
		Resources.images.add('red', red);
		Resources.images.add('green', green);
		Resources.images.add('yellow', yellow);
		Resources.images.add('pink', pink);
		Resources.images.add('blue', blue);
		
	};	
	
	this.PopulateStore = function(){
		var gemSeed = {0 : "red", 1 : "green", 2 : "yellow", 3 : "pink", 4 : "blue"};
		
		for (var i = 0; i < 50; i++){
			this.store.push(gemSeed[Math.floor(Math.random() * 5)]);
		}
	};
	
}