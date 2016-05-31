import {IBird} from "./IBird";

export class DecoratedBird extends IBird {
	constructor (bird) {
		super();
		
		this._bird = bird;
		this._extraBirdType = "bird-red-with-bonus";
	}
	_sayHello () {
		return "Hi! I'm decorated bird";
	}
	_addBonusBirdTitle () {
		var result = document.createElement("h1"),
			text = document.createTextNode(this._sayHello());
		result.appendChild(text);
		
		return result;
	}
	render () {
		var result = this._bird.render();
		result.classList.add(this._extraBirdType);
		result.appendChild(this._addBonusBirdTitle());
		
		return result;
	}
}