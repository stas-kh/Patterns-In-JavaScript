export class Memento {
	constructor(state) {
		this._state = state;
	}
	get state() {
		return this._state;
	}
}