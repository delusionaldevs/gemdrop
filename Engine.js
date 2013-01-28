/**
 * 
 */

function Engine(){
	
	// collection of layers
	// make new layers
	// check for user input
	// draw all existing layers (if draw flag is on)
	// switch between canvases to allow for double buffering.
	
	if (!isCanvasSupported()){
		var elem = document.createElement('p');
		
		elem.text = 'The canvas object is not supported on your browser.';
		body.appendChild(elem);
	}
	
	var body = document.getElementsByTagName('body')[0];
	var errorMsg = document.createElement('div');
	errorMsg.class = 'errorMsg';
	
	var canvas1 = document.createElement('canvas');
	var canvas2 = document.createElement('canvas');
	canvas1.id = 'canvas1';
	canvas2.id = 'canvas2';
	canvas1.width = '800';
	canvas1.height = '600';
	canvas2.width = canvas1.width;
	canvas2.height = canvas1.height;
	body.appendChild(canvas1);
	
	// Get the context to draw on.
	context = canvas1.getContext('2d');
	
	if (typeof context === 'undefined'){
		errorMsg.text = 'The canvas context could not be obtained.';
		body.appendChild(errorMsg);
		return;
	}
	
	this.layers = new Array();
	
	this.layer = function(){
		var c = document.createElement('canvas');
		
		this.layers.push(c);
	};
	
	this.draw = function(canvas){
		var ctx = canvas.getContext('2d');
		
		for (var i = 0; i < this.layers.length; i++){
			
		}
	};
	
}

function isCanvasSupported(){
	var canvas = document.createElement('canvas');
	
	return !!(canvas.getContext && canvas.getContext('2d'));
}