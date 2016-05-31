class WizardAbilitiy extends IAbstractAbility {
	constructor() {
		super();
		this._heroProperties = {
			strength: 10,
			intelligence: 30,
			agility: 5
		};
	}

	getAbilities() {
		return this._heroProperties;
	}
}