"use strict";

var jsonTestExample = {
	styles: [{
		selector: "*",
		properties: {
			"font-family": "Calibri",
			"box-sizing": "border-box"
		}
	}, {
		selector: "div",
		properties: {
			"background": "#2e2e2e",
			"width": "50%",
			"color": "white",
			"padding": "20px",
			"margin": "10px"
		}
	}, {
		selector: "span",
		properties: {
			"display": "inline-block",
			"color": "blue",
			"font-size": "30px"
		}
	}]
};

var jsonTestExample2 = {
	styles: [{
		selector: ".example",
		properties: {
			"color": "red"
		}
	}, {
		selector: ".material-button",
		properties: {
			"box-shadow": "0 0 5px #2e2e2e",
			"background-color": "#3d88ec",
			"color": "white",
			"display": "block",
			"float": "left",
			"padding": "5px 30px",
			"text-transform": "uppercase",
			"width": "auto",
			"cursor": "pointer"
		}
	}]
};

var parser = new RuntimeCSSParser();
var converter = new JSONConverter(parser);

converter.parseJSON(jsonTestExample);
converter.parseJSON(jsonTestExample2);

//# sourceMappingURL=main-compiled.js.map