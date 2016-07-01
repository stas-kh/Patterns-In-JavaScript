import {Expression} from "./expression";

export class VariableExpression extends Expression {
	constructor(varExprs) {
		super();

		this._variableExpressions = varExprs;
		this.REPLACER = "var";
	}

	interpret(context) {
		let regEx,
			result;
		super.interpret(context);
		this._variableExpressions.forEach((expr) => {
			regEx = new RegExp(expr, this._exprFlag);
			context.output = context.output.replace(regEx, this.REPLACER);
		});
	}
}