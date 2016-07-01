import {VariableExpression} from "./components/expressions/variableExpression";
import {LoggerExpression} from "./components/expressions/loggerExpression";
import {ExcessExpression} from "./components/expressions/excessExpression";
import {Context} from "./components/context";

window.addEventListener("load", () => {
	let varExp = new VariableExpression(["int", "double", "string"]),
		loggerExp = new LoggerExpression("Console.WriteLine"),
		excessExp = new ExcessExpression(["public ", "void "]);

	document.querySelector(".transpile").addEventListener("click", () => {
		let source = document.querySelector(".source").value,
			context = new Context(source),
			expressions = [varExp, loggerExp, excessExp];

		expressions.forEach(expr => {
			expr.interpret(context);
		});

		loadScript("js-output", context.output);
	});

	function loadScript(id, scriptCode) {
		let scriptEl = document.querySelector("#" + id),
			code = document.createTextNode(scriptCode);
		if (scriptEl !== null && scriptEl !== undefined) {
			scriptEl.parentNode.removeChild(scriptEl);
		}
		scriptEl = document.createElement("script");
		scriptEl.type = "text/javascript";
		scriptEl.appendChild(code);
		scriptEl.id = id;
		document.querySelector("head").appendChild(scriptEl);
	}

});