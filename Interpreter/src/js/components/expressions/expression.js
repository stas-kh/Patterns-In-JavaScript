export class Expression {
	constructor() {
		this._exprFlag = "g";
	}

	interpret(context) {
		if (context.output === null) {
			context.output = context.input;
		}
	}
}