function CreateEmployee(_name,_shop)
{
	var employee =
	{
		gameObjectType: "employee",
        leftOverTicks: 0,
        name: _name,
        shop: _shop,
        items: new Array(),
        currentItem : null,

        tick : function(_ticks)
		{
            if  (this.currentItem != null)
            {
                var ticks = _ticks + this.leftOverTicks;
                
                if(ticks > this.currentItem.ticksToCraft)
                {
                    
                    //clear the work bench
                    var arrLength = this.shop.workBenches.length;
                    for (var i = 0; i < arrLength; i++) {
                        var workBench = this.shop.workBenches[i];
                        if(workBench.assignedEmployee == this)
                        {
                            workBench.assignedEmployee = null;
                        }
                    } 
                    
                    //add item to inventory
                    this.shop.AddResource(this.currentItem.name,1);


                    this.currentItem = null;
                    ticks = 0;
                }
                
                this.leftOverTicks = ticks;
                
            }
        },

        addItem : function(_name, _resources,_benchType,_benchLevel,_ticksToCraft)
        {
            var item = createItem(_name,this,_resources,_benchType,_benchLevel,_ticksToCraft);
            this.items.push(item);
        },

        setCurrentItem  : function(item)
        {
            this.currentItem = item;
            this.leftOverTicks = 0;

            

            var arrLength = this.shop.workBenches.length;
            for (var i = 0; i < arrLength; i++) {
                var workBench = this.shop.workBenches[i];
                if(workBench.name == item.benchType && workBench.level >= item.benchLevel && workBench.assignedEmployee == null)
                {
                    workBench.assignedEmployee = this;
                    break;
                }
            }
                



            //set using work bench here
        },

	};
	
	return employee;
}


