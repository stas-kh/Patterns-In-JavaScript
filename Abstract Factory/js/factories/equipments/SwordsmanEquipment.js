class SwordsmanEquipment extends IAbstractEquipment {
	constructor() {
		super();
		this._equipment = {
			type: "Robe of the Chaos",
			armor: 20,
			resistance: 100
		}
	}

	getEquipment() {
		return this._equipment;
	}
}