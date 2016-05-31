"use strict";

window.onload = function () {
	var wizardFactory = FactoryMaker.getHeroFactory(factoryType.wizard),
	    swordsmanFactory = FactoryMaker.getHeroFactory(factoryType.swordsman);

	var wiz = {
		abilities: wizardFactory.createAbilities(),
		equipment: wizardFactory.createEquipment(),
		skills: wizardFactory.createSkills()
	};

	var swrd = {
		abilities: swordsmanFactory.createAbilities(),
		equipment: swordsmanFactory.createEquipment(),
		skills: swordsmanFactory.createSkills()
	};

	var testHero = {
		abilities: wizardFactory.createAbilities(),
		equipment: wizardFactory.createEquipment(),
		skills: swordsmanFactory.createSkills()
	};

	console.log(wiz, swrd, testHero);
};

//# sourceMappingURL=init-compiled.js.map