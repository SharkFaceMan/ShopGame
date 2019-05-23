function onLoadFunction()
{
	console.log("Creating main game objects");
	
	var xml = getGameDataXML();
  	xmlDoc = $.parseXML( xml );
	$gameDataXML = $( xmlDoc );

	mainGameObject.$gameDataXML = $gameDataXML;
	  

	//create  town
	var $town = $gameDataXML.children("GameData").children('Town')
	var town = CreateTown();
	mainGameObject.town = town;

	//create the shop
	var $shop = $town.children("Shop"); 
	var shop = CreateShop(mainGameObject.town);
	mainGameObject.town.shop = shop;

	//create shop resource bins
	var $resourceBins = $shop.children("ResourceBins");
	arLength = $resourceBins.children().length;
	for(var i = 0; i < arLength; i++)
	{
		$resourceBin = $($resourceBins.children()[i]);

		name = $resourceBin.attr("name");
		maxQty = parseInt($resourceBin.attr("maxQty"));

		resourceBin = createResourceBin(name,maxQty);
		mainGameObject.town.shop.resourceBins.push(resourceBin);
	}


	//create shop work benches
	var $workBenchs = $shop.children("WorkBenchs");
	arLength = $workBenchs.children().length;
	for(var i = 0; i < arLength; i++)
	{
		$workBench = $($workBenchs.children()[i]);

		name = $workBench.attr("name");
		level = parseInt($workBench.attr("level"));
		
		workBench = CreateWorkBench(name,level);
		mainGameObject.town.shop.workBenches.push(workBench);
	}


	//create employees
	var $employees = $shop.children("employees");
	arLength = $employees.children().length;
	for(var i = 0; i < arLength; i++)
	{
		$employee = $($employees.children()[i]);

		name = $employee.attr("name");
		employee = CreateEmployee(name,shop);
		shop.employees.push(employee);

		$items = $employee.children("Item");
		for(var j = 0; j < $items.length; j++)
		{
			$item = $($items[j]);
			name = $item.attr("name");

			item = loadItem(name);
			item.employee = employee;
			employee.items.push(item);
		}
	}

	//create town buildings
	var $buildings = $town.children("Buildings");

	//create town buildings - resouce generators
	var $resourceGenerators = $buildings.children("ResourceGenerators");
	arLength = $resourceGenerators.children().length;
	for(var i = 0; i < arLength; i++)
	{
		$resourceGenerator = $($resourceGenerators.children()[i]);
		
		name = $resourceGenerator.attr("name");
		qtyPerMinute = parseInt($resourceGenerator.attr("qtyPerMinute"));
		
		resourceBuilding = createResourceBuilding(name,qtyPerMinute,mainGameObject.town.shop);
		mainGameObject.town.resouceBuildings.push(resourceBuilding);
	}

	

	//create town buildings - NPC buildings
	var $NPCBuildings = $buildings.children("NPCBuildings");
	arLength = $NPCBuildings.children().length;
	for(var i = 0; i < arLength; i++)
	{
		$NPCBuilding = $($NPCBuildings.children()[i]);
		
		name = $NPCBuilding.attr("name");
		
		NPCBuilding = createNPCBuilding(name);
		mainGameObject.town.buildings.push(NPCBuilding);


		$NPCs = $NPCBuilding.children("NPC");
		for(var j = 0; j < $NPCs.length; j++)
		{
			$NPC = $($NPCs[j]);

			name = $NPC.attr("name");
			npc = createNPC(name);
			mainGameObject.town.NPCs.push(npc);

			$buyList = $NPC.children("buyItem");
			for(var k = 0; k < $buyList.length; k++)
			{
				$item = $($buyList[k]);
				item = loadItem($item.attr("name"));
				npc.buyList.push(item);
			}
		}
	}


	console.log("Main game objects have been created");
	
	
	setTimeout(MainLoop, 1000);
}

function loadItem(itemName)
{
	$item = $gameDataXML.find('Items').find("Item[name=" + itemName + "]");
	name = $item.attr('name');
	bench = $item.attr('bench');
	benchLevel = parseInt($item.attr('benchLevel'));
	craftTime = parseInt($item.attr('craftTime'));
	value = parseInt($item.attr('value'));

	item = createItem(name, null, new Array(),bench,benchLevel,craftTime,value);

	$resources = $item.children("resource");
	for(var i = 0; i < $resources.length; i++)
	{
		var $resouce = $($resources[i]);
		name = $resouce.attr('name');
		quantity = parseInt($resouce.attr('quantity'));
		item.resources.push(createResource(name,quantity));
	}

	return item;
}