function CreateTown()
{
	var town =
	{
		gameObjectType: "Town",
        resouceBuildings: new Array(),
        buildings: new Array(),
        NPCs: new Array(),
        //questLocations: new Array(),
        //events: new Array(),
        shop: new Object(),
        
        tick : function(_ticks)
		{
            this.shop.tick(_ticks);

            var arrLength = this.resouceBuildings.length;
            for (var i = 0; i < arrLength; i++) {
                this.resouceBuildings[i].tick(_ticks);
            }
            
            arrLength = this.NPCs.length;
            for (var i = 0; i < arrLength; i++) {
                this.NPCs[i].tick(_ticks);
            }
            
        },
	};
	
	return town;
}
