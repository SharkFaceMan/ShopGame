var mainGameObject = 
{
	town: new Object(),
	lastTickTime: milliseconds = (new Date).getTime(),
	$gameDataXML: null
}


function MainLoop()
{
	//console.log("MainLoop ->");
	
	tickTime = (new Date).getTime();
	ticks = tickTime - mainGameObject.lastTickTime;
	mainGameObject.lastTickTime = tickTime;
	
	
	mainGameObject.town.tick(ticks);
	
	setTimeout(MainLoop, 100);

	updateUI();
	//console.log("MainLoop <-");
}

