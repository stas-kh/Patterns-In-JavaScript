import {IPlayerService} from "./iPlayerService";

export class BonusHoursDeactivation extends IPlayerService {
	constructor(hero) {
		super();

		this._hero = hero;
	}

	execute() {
		this._hero.deactivateBonusHours();
	}
}