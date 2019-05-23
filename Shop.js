function CreateShop(_town)
{
	var shop =
	{
		gameObjectType: "Shop",
        workBenches: new Array(),
        resourceBins: new Array(),
        inventory: new Array(),
        employees: new Array(),
        town: _town,
        gold: 0,

        tick : function(_ticks)
		{
            
            arrLength = this.employees.length;
	        for (var i = 0; i < arrLength; i++) {
                var employee = this.employees[i];
                employee.tick(_ticks);
            }
        },

        SellItem(_NPCName)
        {
            arrLength = this.town.NPCs.length;
	        for (var i = 0; i < arrLength; i++) {
                var NPC = this.town.NPCs[i];
                if(NPC.name == _NPCName)
                {
                    qty = this.GetResourceQuantity(NPC.buyItem.name);
                    if(qty < 1)
                    {
                        alert('all out');
                    }
                    else
                    {
                        this.AddResource(NPC.buyItem.name,-1);
                        this.gold += NPC.buyItem.value;
                        NPC.buyItem = null;
                    }
                    NPC.GoIdle();
                }
            }
        },


        AddResource(resourceName,quantity)
        {
            var arrLength = this.resourceBins.length;
	        for (var i = 0; i < arrLength; i++) {
                var resourceBin = this.resourceBins[i];
                if(resourceBin.name == resourceName)
                {
                    return resourceBin.AddResource(quantity);
                }
            }

            arrLength = this.inventory.length;
	        for (var i = 0; i < arrLength; i++) {
                var item = this.inventory[i];
                if(item.name == resourceName)
                {
                    item.quantity += quantity;

                    if(item.quantity <= 0)
                    {
                        this.inventory.splice(i);
                    }

                    return 0;
                }
            }

            var item = loadItem(resourceName);
            item.quantity = quantity;

            this.inventory.push(item);
            return 0;
        },

        GetResourceQuantity(resourceName)
        {
            var arrLength = this.resourceBins.length;
	        for (var i = 0; i < arrLength; i++) {
                var resourceBin = this.resourceBins[i];
                if(resourceBin.name == resourceName)
                {
                    return resourceBin.quantity;
                }
            }
            
            arrLength = this.inventory.length;
	        for (var i = 0; i < arrLength; i++) {
                var resouce = this.inventory[i];
                if(resouce.name == resourceName)
                {
                    return resouce.quantity;
                }
            }

            //resource not found
            return 0;
        },

        isWorkBenchAvailable(workBenchName,level)
        {
            var arrLength = this.workBenches.length;
	        for (var i = 0; i < arrLength; i++) {
                var workBench = this.workBenches[i];
                if(workBench.name == workBenchName && workBench.level >= level && workBench.assignedEmployee == null)
                {
                    return true;
                }
            }
            
            //available bench not found
            return false;
        }
	};
	
	return shop;
}
