

var Game = {
	
	gems : new Array(),
	
	Init : function(){
		var gemstore = new GemStore();
		gemstore.populateStore();
		
		for (var i = 0; i < gemstore.store.length; i++){
			this.gems.push(new Sprite(Resources.images.get(gemstore.store[i])));
		}
		
		var offset = 75;
		var col = 0;
		var row = 0;
		for (var i = 0; i < this.gems.length; i++){
			this.gems[i].translate(col += offset, row)
			
			if (row % 6 == 0){
				row += offset;
				col = 0;
			}
			
			this.gems[i].update();
		}
	},
	
	Run : function(){
		
	}
	
};