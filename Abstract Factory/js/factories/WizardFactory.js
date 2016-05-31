class WizardFactory extends IHeroFactory {
	createAbilities() {
		return new WizardAbilitiy();
	}

	createEquipment() {
		return new WizardEquipment();
	}

	createSkills() {
		return new WizardSkill();
	}
}