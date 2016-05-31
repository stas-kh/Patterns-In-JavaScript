import {DecoratedBird} from "./DecoratedBird";

export class BluesBird extends DecoratedBird {
	constructor (bird) {
		super(bird);

		this._extraBirdType = "bird-blues";
	}
	_sayHello () {
		return "Hi! I'm blues bird";
	}
}