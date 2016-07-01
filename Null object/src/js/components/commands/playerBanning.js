import {IPlayerService} from "./iPlayerService";

export class PlayerBanning extends IPlayerService {
	constructor(hero) {
		super();

		this._hero = hero;
	}

	execute() {
		this._hero.banPlayer();
	}
}