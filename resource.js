function createResource(_name, _qty)
{
	var resource =
	{
		gameObjectType: "resource",
		name: _name,
		quantity: _qty
	};

	return resource;
}