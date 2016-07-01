import {IPlayerService} from "./iPlayerService";

export class PlayerIdentification extends IPlayerService {
	constructor(hero) {
		super();

		this._hero = hero;
	}

	execute() {
		this._hero.identify();
	}
}