import {DecoratedBird} from "./DecoratedBird";

export class ChuckBird extends DecoratedBird {
	constructor (bird) {
		super(bird);

		this._extraBirdType = "bird-chuck";
	}
	_sayHello () {
		return "Hi! I'm chuck bird";
	}
}