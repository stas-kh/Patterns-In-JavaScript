import {IPlayerService} from "./../interfaces/IPlayerService";

export class BonusHoursActivation extends IPlayerService {
	constructor(hero) {
		super();
		
		this._hero = hero;
	}
	execute() {
		this._hero.activateBonusHours();
	}
}