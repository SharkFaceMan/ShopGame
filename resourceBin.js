function createResourceBin(_name, _maxQty)
{
	var resourceBin =
	{
		gameObjectType: "resourceBin",
		name: _name,
		quantity: 0,
		maxQty: _maxQty,

		AddResource: function(_qty)
		{
			this.quantity = this.quantity + _qty;
			
			if(this.quantity > this.maxQty)
			{
				var returnVal = this.quantity - this.maxQty;
				this.quantity = this.maxQty;
				return returnVal;
			}
			return 0;
		}
	};
	
	return resourceBin;
}