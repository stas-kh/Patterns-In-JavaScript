export class ItemsStore {
	constructor() {
		this._items = [];
		this._itemsAdapter = null;
	}

	addItem(item) {
		var result = null;
		if (this._itemsAdapter === null) {
			this._items.push(item);
			console.log(`${item} is added to default rucksack`);
			result = this._items;
		} else {
			result = this._itemsAdapter.addItem(item);
		}
		return result;
	}

	getItems() {
		var result = this._items;
		if (this._itemsAdapter !== null) {
			result = this._itemsAdapter.rucksack;
		}
		return result;
	}

	set adapter(adapter) {
		this._itemsAdapter = adapter;
	}
}