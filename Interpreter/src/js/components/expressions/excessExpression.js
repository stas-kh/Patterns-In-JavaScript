import {Expression} from "./expression";

export class ExcessExpression extends Expression {
	constructor(excessExprs) {
		super();

		this._excessExpressions = excessExprs;
		this.REPLACER = "";
	}

	interpret(context) {
		let regEx,
			result;
		super.interpret(context);
		this._excessExpressions.forEach((expr) => {
			regEx = new RegExp(expr, this._exprFlag);
			context.output = context.output.replace(regEx, this.REPLACER);
		});
	}
}