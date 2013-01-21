function Sprite(img){
	this.img = img;
	
	if (img){
		this.oWidth = this.img.width;
		this.oHeight = this.img.height;
		this.aspectRatio = (Math.max(this.oWidth, this.oHeight) == this.oWidth) ? (this.oWidth / this.oHeight) : (this.oHeight / this.oWidth);
	}
	this.width = 0;
	this.height = 0;
	this.position = new Point();
	
	this.draw = function(ctx){
		ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
	};
	
	this.setPosition = function(x, y){
		this.position.x = x;
		this.position.y = y;
	};
	
	this.getPosition = function(){
		return this.position;
	};
	
	this.scale = function(factor){
		var sW, sH;
		sW = sH = 0;		
		
		if (this.oWidth && this.oHeight){
			if (max(this.oWidth, this.oHeight) == this.oWidth){
				sW = factor * this.aspectRatio;
				sH = factor;
			}else{
				sW = factor;
				sH = factor * this.aspectRatio;
			}
		}		
		
		this.width += this.width * sW;
		this.height += this.height * sH;
		this.position.x += this.width - this.width * sW;
		this.position.y += this.height - this.height * sH;
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
	
	this.Animation = {	
		sineOut : function(ctx, amplitude, frequency){
			var factor = (img.height * amplitude) * (Math.sin(frequency * new Date().getTime()));
			this.scale(factor);
		}
	};
}

function Point(){
	this.x = 0;
	this.y = 0;
}