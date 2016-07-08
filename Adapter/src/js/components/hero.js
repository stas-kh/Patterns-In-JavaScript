export class Hero {
	constructor(itemsStore) {
		this._itemsStore = itemsStore;
		/* some other implementation */
	}

	get items() {
		return this._itemsStore;
	}
}