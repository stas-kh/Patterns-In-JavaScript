import {IOriginator} from "./interfaces/IOriginator";

export class CareTaker {
	constructor() {
		this._mementos = [];
	}
	saveState(originator) {
		if(originator instanceof IOriginator) {
			this._mementos.push(originator.createMemento());
		}
	}
	restoreState(originator) {
		if(originator instanceof IOriginator) {
			if(this._mementos.length > 0) {
				originator.memento = this._mementos.pop();
			} else {
				alert("There is no more stored states");
			}
		}
	}
}