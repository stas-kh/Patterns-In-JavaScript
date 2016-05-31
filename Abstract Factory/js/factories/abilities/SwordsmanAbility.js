class SwordsmanAbility extends IAbstractAbility {
	constructor() {
		super();
		this._heroProperties = {
			strength: 10,
			agility: 5,
			extraPower: true,
			extraPowerLevel: 1
		}
	}
	getAbilities() {
		return this._heroProperties;
	}
}