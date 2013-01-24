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
	
	// Setup the initial game state.
	Game.Init(context);
	
	//**********************************
	// Game Loop
	
	var gameLoop = function(){
		
		// Get the player input.
		// Update the game logic.
		// Draw the screen.		
		
		Game.Run(canvas1, context);
		
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
