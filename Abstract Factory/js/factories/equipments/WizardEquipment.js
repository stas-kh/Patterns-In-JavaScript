class WizardEquipment extends IAbstractEquipment {
	constructor() {
		super();
		this._equipment = {
			type: "Wrath of the Lich King",
			armor: 3,
			extraIntelligence: 5,
			extraMP: 100
		}
	}

	getEquipment() {
		return this._equipment;
	}
}