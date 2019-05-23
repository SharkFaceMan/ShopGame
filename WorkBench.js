
function CreateWorkBench(_name, _level)
{
    var workBench =
    {
		gameObjectType: "workBench",
        name: _name,
        level: _level,
        assignedEmployee: null,

        
    };

    return workBench;
}
