function createItem(_name, _employee, _resources,_benchType,_benchLevel,_ticksToCraft,_value)
{
	var item =
	{
		gameObjectType: "item",
		name: _name,
		employee: _employee,
		resources: _resources,
		benchType: _benchType,
		benchLevel: _benchLevel,
		ticksToCraft: _ticksToCraft,
		value: _value,
		quantity: 0,

		craft : function()
		{
			if(this.canCraft())
			{
				//remove resources from the shop
				var arrLength = this.resources.length;
	        	for (var i = 0; i < arrLength; i++) {
					var resources = this.resources[i];
					this.employee.shop.AddResource(resources.name,resources.quantity * -1);
            	}

				//set employee current item to this
				this.employee.setCurrentItem(this);
			}
		},

		canCraft : function()
		{
			//check if we have enough resources
			var arrLength = this.resources.length;
			for (var i = 0; i < arrLength; i++) {
				var neededResource = this.resources[i];
				var availableResources = this.employee.shop.GetResourceQuantity(neededResource.name);
				if(availableResources < neededResource.quantity) return false;
			}
			
			
			//check if a work bench is available
			return this.employee.shop.isWorkBenchAvailable(this.benchType,this.benchLevel);
		}
		
	};
	
	return item;
	

}