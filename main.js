/**
 * @author Joseph Deak III
 */
var GemDrop = { 
	
	Init : function(argv){
		
		
		//**********************************
		// Game Loop
		
		var gameLoop = function(){
			
			// Get the player input.
			// Update the game logic.
			// Draw the screen.
			
			var timerID = setTimeout(gameLoop, 1000 / 33.34);
		};
		gameLoop();
		
		//**********************************
	
	}
};

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
