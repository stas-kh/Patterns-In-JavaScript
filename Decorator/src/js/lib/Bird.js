import {IBird} from "./IBird";

export class Bird extends IBird {
	constructor () {
		super();

		this._birdClass = "bird";
		this._birdType = "bird-red";
	}
	render () {
		let birdContainer = document.createElement("div");
		birdContainer.classList.add(this._birdClass);
		birdContainer.classList.add(this._birdType);
		
		return birdContainer;
	}
}