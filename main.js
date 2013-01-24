/**
 * @author Joseph Deak III
 */
var GemDrop = { 
	
	Init : function(argv){	
		
	if (!isCanvasSupported()){
		var elem = document.createElement('p');
		
		elem.text = 'The canvas object is not supported on your browser.';
		body.appendChild(elem);
	}
	
	var body = document.getElementsByTagName('body')[0];
	var errorMsg = document.createElement('div');
	errorMsg.class = 'errorMsg';
	
	var canvas = document.createElement('canvas');
	canvas.id = 'mainCanvas';
	canvas.width = '800';
	canvas.height = '600';
	body.appendChild(canvas);
	
	// Get the context to draw on.
	context = canvas.getContext('2d');
	
	if (typeof context === 'undefined'){
		errorMsg.text = 'The canvas context could not be obtained.';
		body.appendChild(errorMsg);
		return;
	}
	
	//**********************************
	// Game Loop
		
	Game.Init(context);
	
	
	var gameLoop = function(){		
		
		// Clear the canvas.
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		Game.Run(canvas, context);
		
		var timerID = setTimeout(gameLoop, 1000 / 33.34);
	};
	gameLoop();
	
	//**********************************
	
	}
};

function isCanvasSupported(){
	var canvas = document.createElement('canvas');
	
	return !!(canvas.getContext && canvas.getContext('2d'));
}

// USE ANON FUNCTIONS AS callback
//
//function loadScript(url, callback){		
//	var head = document.getElementsByTagName('head')[0];
//	var title = document.getElementsByTagName('title')[0];
//	
//	var js = document.createElement('script');
//	js.type = 'text/javascript';
//	js.src = url;
//	
//	if (js.onreadystatechange)
//		js.onreadystatechange = callback;
//	else
//		js.onload = callback;
//	
//	head.insertBefore(js, title.nextSibling);
//}
