import {IPlayerService} from "./../interfaces/IPlayerService";

export class PlayerIdentification extends IPlayerService {
	constructor(hero) {
		super();

		this._hero = hero;
	}
	execute() {
		this._hero.identify();
	}
}