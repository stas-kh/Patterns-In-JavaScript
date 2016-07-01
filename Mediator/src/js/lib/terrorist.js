import {Player} from "./player";
import {playerTypes} from "./playerTypes";

export class Terrorist extends Player {
	constructor(name) {
		super(name);
		this.TYPE = playerTypes.T;
	}
	receive(senderName, message) {
		console.log(`Terrorist ${this.name} received the message [${message}] from ${senderName}`);
	}
}