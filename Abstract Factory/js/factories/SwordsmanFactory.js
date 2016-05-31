class SwordsmanFactory extends IHeroFactory {
	createAbilities() {
		return new SwordsmanAbility();
	}

	createEquipment() {
		return new SwordsmanEquipment();
	}

	createSkills() {
		return new SwordsmanSkill();
	}
}