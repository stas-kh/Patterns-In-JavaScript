import {IPlayerService} from "./../interfaces/IPlayerService";

export class PlayerBanning extends IPlayerService {
	constructor(hero) {
		super();
		
		this._hero = hero;
	}
	execute() {
		this._hero.banPlayer();
	}
}