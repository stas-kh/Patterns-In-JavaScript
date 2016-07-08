import {Rucksack} from "./rucksack";
import {Password} from "./password";

export class RucksackAdapter {
	constructor() {
		this._pswd = new Password("23e-ur-31-p");
		this._rucksack = null;
	}

	initRucksack() {
		if (this._rucksack === null) {
			this._rucksack = new Rucksack(this._pswd.password);
		}
		return this._rucksack;
	}

	addItem(item) {
		return this.initRucksack().addToInventory(item, this._pswd.password);
	}

	get rucksack() {
		return this._rucksack.inventory;
	}
}