import {Utils} from "../utils";
import {IPlayerService} from "../commands/iPlayerService";

export class GameAdministrator {
	constructor() {
		this._commands = [];
	}

	addCommand(command) {
		if (command instanceof IPlayerService !== true) {
			command = Utils.generateNullObject(IPlayerService).method("execute", () => {
				Utils.log("Command is not supported yet");
			});
		}
		this._commands.push(command);
		this._commands.shift().execute();
	}
}