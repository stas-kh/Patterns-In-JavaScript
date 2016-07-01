import {Expression} from "./expression";

export class LoggerExpression extends Expression {
	constructor(printExpr) {
		super();

		this._printFunction = printExpr;
		this.REPLACER = "console.log";
	}

	interpret(context) {
		let regEx = new RegExp(this._printFunction, this._exprFlag);
		super.interpret(context);
		context.output = context.output.replace(regEx, this.REPLACER);
	}
}