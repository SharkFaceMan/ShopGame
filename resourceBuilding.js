function createResourceBuilding(_name, _respawnPerMin,_shop)
{
	var resourceBuilding =
	{
		gameObjectType: "resourceBuilding",
		name: _name,
		ticksPerRespawn: ((60.0 / _respawnPerMin) * 1000),
		leftOverTicks: 0,
		shop: _shop,
		tick : function(_ticks)
		{
			//console.log("_ticks:" + _ticks + " leftOverTicks:" + this.leftOverTicks);
			//console.log(this.name + ":" + this.ticksPerRespawn);
			var ticks = _ticks + this.leftOverTicks;
			n = Math.floor(ticks / this.ticksPerRespawn);
			
			//var remaining =  this.resourceBin.AddResource(n);

			var remaining = 0;
			if(n > 0)
			{
				remaining =  this.shop.AddResource(this.name,n);
			}

			if(remaining > 0)
			{
				this.leftOverTicks = this.ticksPerRespawn;
			}
			else
			{
				this.leftOverTicks = ticks - (n * this.ticksPerRespawn);
			}
		},

		pctForNext : function()
		{
			return Math.floor((this.leftOverTicks / this.ticksPerRespawn) * 100);
		}
		
	};
	
	return resourceBuilding;
}