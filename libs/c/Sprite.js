function Sprite(img){
	this.img = img;
	
	if (img){
		this.oWidth = this.img.width;
		this.oHeight = this.img.height;
		this.aspectRatio = (Math.max(this.oWidth, this.oHeight) == this.oWidth) ? (this.oHeight / this.oWidth) : (this.oWidth / this.oHeight);
	}
	this.width = this.oWidth;
	this.height = this.oHeight;
	this.position = new Point();
	
	this.draw = function(ctx){
		ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
	};
	
	this.getPosition = function(){
		return this.position;
	};
	
	this.scale = function(x){
		var sW, sH;
		sW = sH = 0;		
		
		if (this.oWidth && this.oHeight){
			if (Math.max(this.oWidth, this.oHeight) == this.oWidth){
				sW = x;
				sH = x * this.aspectRatio;
			}else{
				sW = x * this.aspectRatio;
				sH = x;
			}
		}		
		
		this.width += sW;
		this.height += sH;
		this.position.x += -sW / 2;
		this.position.y += -sH / 2;
	};
	
	this.rotate = function(ctx, angle){
		ctx.save();
		ctx.rotate(angle);
		this.draw(ctx);
		ctx.restore();
	};
	
	this.translate = function(x, y, speed){
		this.position.x = x;
		this.position.y = y;
	};	
	
	this.sineOut = function(amplitude, frequency){
			var p = amplitude * (Math.sin(frequency * new Date().getTime()));
			this.scale(p);
	};
}

function Point(){
	this.x = 0;
	this.y = 0;
}