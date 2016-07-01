import {IMediator} from "./IMediator";
import {playerTypes} from "./playerTypes";

export class RadioMessageHandler extends IMediator {
	constructor() {
		super();
		this._players = [];
	}
	add(player) {
		this._players.push(player);
		player.mediator = this;
	}
	handleCommand(command, name, type) {
		let playersWithRequiredType = this._players.filter(player => player.TYPE === type);
		playersWithRequiredType.forEach(player => player.receive(name, command));
		
		return playersWithRequiredType;
	}
}