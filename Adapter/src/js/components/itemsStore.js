import IItemsStore from "./IItemsStore";

export class ItemsStore extends IItemsStore {
	constructor() {
		super();

		this._items = [];
	}

	addItem(item) {
		this._items.push(item);
		console.log(`${item} is added to default items store`);

		return this.getItems();
	}

	clear() {
		this._items.length = 0;

		return this._items;
	}

	getItems() {
		return this._items;
	}
}