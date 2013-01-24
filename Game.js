

var Game = {
	
	gems : new Array(),
	
	Init : function(ctx){
		var gemstore = new GemStore();
		gemstore.Init();
		gemstore.PopulateStore();
		
		for (var i = 0; i < gemstore.store.length; i++){
			this.gems.push(new Sprite(Resources.images.get(gemstore.store[i])));
		}
		
		var offset = 75;
		var col = 0;
		var row = 0;
		for (var i = 0; i < this.gems.length; i++){
			this.gems[i].setPosition(col, row);
			
			col += offset;
			
			if ((i+1) % 10 == 0){
				row += offset;
				col = 0;
			}
			
			this.gems[i].update(ctx);
		}
	},
	
	Run : function(canvas, ctx){
		var reverse = false;
		var speed = 20;
		
		for (var i = 0; i < this.gems.length; i++){			
			if (!reverse){
				this.gems[i].translate(speed, 0);
				if (this.gems[i].position.x > canvas.width)
					this.gems[i].position.x = -this.gems[i].width;
			}
			else{
				this.gems[i].translate(-speed, 0);
				if (this.gems[i].position.x + this.gems[i].width < 0)
					this.gems[i].position.x = canvas.width;
			}
			
			this.gems[i].update(ctx);
			
			if ((i + 1) % 10 == 0)
				reverse = !reverse;
		}
		
	}
	
};