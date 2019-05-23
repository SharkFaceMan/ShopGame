

function updateUI()
{
	
	//update town resouce buildings
	var html = '';
	var arrLength = mainGameObject.town.resouceBuildings.length;
	for (var i = 0; i < arrLength; i++) {
		var resouceBuilding = mainGameObject.town.resouceBuildings[i];
		html += resouceBuilding.name + ":" +resouceBuilding.pctForNext() +  "%<br>";
		
	}	
	$("#resourceBuildingDiv").html(html);

	//update town buildings
	html = '';
	arrLength = mainGameObject.town.buildings.length;
	for (var i = 0; i < arrLength; i++) {
		var NPCBuilding = mainGameObject.town.buildings[i];
		html += NPCBuilding.name + "<br>";
		
	}	
	$("#buildingDiv").html(html);	

	//update shop gold
	html = 'Gold: ';
	html += mainGameObject.town.shop.gold;
	$("#goldDiv").html(html);	
	

	//update town NPC
	html = '';
	arrLength = mainGameObject.town.NPCs.length;
	for (var i = 0; i < arrLength; i++) {
		var NPC = mainGameObject.town.NPCs[i];
		html += NPC.name + " : ";
		if(NPC.status == null)
			html += "idle";

		html +="<br>";
		
	}	
	$("#NPCDiv").html(html);


	//update shopping customers
	html = '';
	arrLength = mainGameObject.town.NPCs.length;
	for (var i = 0; i < arrLength; i++) {
		var NPC = mainGameObject.town.NPCs[i];
		if(NPC.status == "shopping")
		{	
			html += NPC.name + " : " + NPC.buyItem.name;
			html += "<button type='button' onmouseup='mainGameObject.town.shop.SellItem(\"" + NPC.name + "\")'>sell</button>";
			html +="<br>";
		}	
	}	
	$("#shoppingNPCDiv").html(html);
	
	
	//update the shop resources
	html = '';
	arrLength = mainGameObject.town.shop.resourceBins.length;
	for (var i = 0; i < arrLength; i++) {
		var resourceBin = mainGameObject.town.shop.resourceBins[i];
		html += resourceBin.name + ":" + resourceBin.quantity +  "<br>";
		
	}	
	$("#shopResourcesDiv").html(html);



	html = '';
	var employee;
	var employeeCount = mainGameObject.town.shop.employees.length;
	for (var j = 0; j < employeeCount; j++) {
		employee = mainGameObject.town.shop.employees[j];
		html += employee.name;
		if(employee.currentItem == null)
		{
			html += ": idle";

			html += '<br>';

			if(employee.currentItem == null)
			{
				arrLength = employee.items.length;
				for (var i = 0; i < arrLength; i++) {
					var item = employee.items[i]
					html += "<button type='button' onmouseup='mainGameObject.town.shop.employees[" + j + "].items[" + i  + "].craft();'>" + item.name + "</button>";
				}
			}	
		}
		html += "<br>";
	}
	$("#employeesDiv").html(html);
	
	
	//update benches
	html = "";
	var arrLength = mainGameObject.town.shop.workBenches.length;
	for (var i = 0; i < arrLength; i++) {
		workBench = mainGameObject.town.shop.workBenches[i];
		html += workBench.name + " : " ;
		if(workBench.assignedEmployee != null)
			html += workBench.assignedEmployee.name;
			html += "<br>";
	}
	$("#workBenchesDiv").html(html);

	//update inventory
	html = "";
	var arrLength = mainGameObject.town.shop.inventory.length;
	for (var i = 0; i < arrLength; i++) {
		resource = mainGameObject.town.shop.inventory[i];
		html += resource.name + " : " + resource.quantity + "<br>";
	}
	$("#inventoryDiv").html(html);
	
}