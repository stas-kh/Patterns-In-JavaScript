window.onload = () => {
	let wizardFactory = FactoryMaker.getHeroFactory(factoryType.wizard),
		swordsmanFactory = FactoryMaker.getHeroFactory(factoryType.swordsman);

	let wiz = {
		abilities: wizardFactory.createAbilities(),
		equipment: wizardFactory.createEquipment(),
		skills: wizardFactory.createSkills()
	};

	let swrd = {
		abilities: swordsmanFactory.createAbilities(),
		equipment: swordsmanFactory.createEquipment(),
		skills: swordsmanFactory.createSkills()
	};

	let testHero = {
		abilities: wizardFactory.createAbilities(),
		equipment: wizardFactory.createEquipment(),
		skills: swordsmanFactory.createSkills()
	};

	console.log(wiz, swrd, testHero);
};