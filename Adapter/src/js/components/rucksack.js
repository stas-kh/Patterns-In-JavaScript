export class Rucksack {
	constructor(password) {
		this._inventory = [];
		this._size = 30;
		this._password = password;
	}

	hasEmptyCell() {
		var result = false;
		if (this._inventory.length < (this._size - 1)) {
			result = true;
		}
		return result;
	}

	addToInventory(item, password) {
		if (this.hasEmptyCell() === true && password === this._password) {
			this._inventory.push(item);
			console.log(`${item} is added to security rucksack`);
		}
		return this._inventory;
	}

	get inventory() {
		return this._inventory;
	}
}