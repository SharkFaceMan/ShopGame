function createNPC(_name)
{
	var NPC =
	{
		gameObjectType: "NPC",
		name: _name,
		leftOverTicks: 0,
		status: null,
		buyList: new Array(),
		buyItem: null,

		tick : function(_ticks)
		{
			var ticks = _ticks + this.leftOverTicks;
			
			
			if(ticks > 10000 && this.status == null)
			{
				if(Math.floor(Math.random() * 10) == 1)
				{
					this.status = 'shopping';
					this.buyItem = this.buyList[Math.floor(Math.random()*this.buyList.length) ];
				}

				this.leftOverTicks = 0;
				return;
			}
			
			this.leftOverTicks = ticks;
		},

		GoIdle()
		{
			this.status = null;
			this.butItem = null;
			this.leftOverTicks = 0;
		}

	};
	
	return NPC;
}