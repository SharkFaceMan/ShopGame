function getGameDataXML()
{
return `
<GameData>
    <Town>
        <Shop>
            <ResourceBins>
                <ResourceBin name='Iron' maxQty='10'></ResourceBin>
                <ResourceBin name='Herbs' maxQty='10'></ResourceBin>
            </ResourceBins>
            <WorkBenchs>
                <WorkBench name='Table' level='1'></WorkBench>
                <WorkBench name='Anvil' level='1'></WorkBench>
            </WorkBenchs>
            <Employees>
                <Employee name ='ShopKeep'>
                    <Item name='testRecipe'></Item>
                    <Item name='testRecipe2'></Item>
                </Employee>
                <Employee name ='testEmployee1'>
                    <Item name='testRecipe'></Item>
                </Employee>
                <Employee name ='testEmployee2'>
                    <Item name='testRecipe2'></Item>
                </Employee>
            </Employees>
        </Shop>
        <Buildings>
            <ResourceGenerators>
                <ResourceGenerator name='Iron' qtyPerMinute='60'></ResourceGenerator>
                <ResourceGenerator name='Herbs' qtyPerMinute='30'></ResourceGenerator>
            </ResourceGenerators>
            <NPCBuildings>
                <NPCBuilding name='Inn'>
                    <NPC name='JoeBob'>
                            <buyItem name='testRecipe'></buyItem>
                            <buyItem name='testRecipe'></buyItem>
                            <buyItem name='testRecipe'></buyItem>
                    </NPC>
                    <NPC name='BobJoe'>
                            <buyItem name='testRecipe'></buyItem>
                            <buyItem name='testRecipe'></buyItem>
                            <buyItem name='testRecipe'></buyItem>
                    </NPC>
                </NPCBuilding>
                <NPCBuilding name='Barracks'>
                    <NPC name='Bill'>
                            <buyItem name='testRecipe'></buyItem>
                            <buyItem name='testRecipe2'></buyItem>
                    </NPC>
                    <NPC name='Angus'>
                            <buyItem name='testRecipe'></buyItem>
                              <buyItem name='testRecipe2'></buyItem>
                    </NPC>
                    <NPC name='Karen'>
                            <buyItem name='testRecipe'></buyItem>
                            <buyItem name='testRecipe2'></buyItem>
                    </NPC>
                </NPCBuilding>
            </NPCBuildings>
        </Buildings>
    </Town>
    <Items>
        <Item name='testRecipe' bench='Table' benchLevel='1' craftTime ='5000' value='2'>
            <Resource name='Iron' quantity='3'></Resource>
            <Resource name='Herbs' quantity='3'></Resource>
        </Item>
        <Item name='testRecipe2' bench='Anvil' benchLevel='1' craftTime ='5000' value='2'>
            <Resource name='testRecipe' quantity='1'></Resource>
        </Item>
    </Items>
</GameData>
`;
}