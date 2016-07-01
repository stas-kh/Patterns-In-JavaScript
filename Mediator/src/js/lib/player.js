import {IColleague} from "./IColleague";

export class Player extends IColleague {
	constructor(name) {
		super();
		this._name = name;
	}
	receive(message) {
		console.log(`Player ${this.name} received the message`);
	}
	set mediator(mediator) {
		this._mediator = mediator;
	}
	get mediator() {
		return this._mediator;
	}
	get name() {
		return this._name;
	}
	send(radioCommand) {
		this._mediator.handleCommand(radioCommand, this._name, this.TYPE);
	}
}