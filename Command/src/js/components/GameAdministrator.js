import {IPlayerService} from "./interfaces/IPlayerService";

export class GameAdministrator {
	constructor() {
		this._commands = [];
	}
	addCommand(command) {
		if(command instanceof IPlayerService) {
			this._commands.push(command);
			this._commands.shift().execute();
		}
	}
}