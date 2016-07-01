import {Player} from "./player";
import {playerTypes} from "./playerTypes";

export class CounterTerrorist extends Player {
	constructor(name) {
		super(name);
		this.TYPE = playerTypes.CT;
	}
	receive(senderName, message) {
		console.log(`Counter-terrorist ${this.name} received the message [${message}] from ${senderName}`);
	}
}