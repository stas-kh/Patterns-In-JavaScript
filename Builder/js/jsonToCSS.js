class JSONToCSS {
	parse (json) {
		let result = "";

		if (json.hasOwnProperty("styles") === true) {
			json.styles.forEach((el, arr) => {
				result += "\n";
				result += el.selector;
				result += " { ";

				if (el.hasOwnProperty("properties") === true) {
					for (let prop in el.properties) {
						if (el.properties.hasOwnProperty(prop) === true) {
							result += "\n";
							result += "\t";
							result += prop;
							result += ": ";
							result += el.properties[prop];
							result += ";"
						}
					}
				}

				result += "\n";
				result += "}";
				result += "\n";
			});
		}
		
		return result;
	}
	appendRuntimeStyles (styles, id) {
		const stylesIdentifier= "runtimeStyle";

		let head = document.querySelector("head"),
			style = document.createElement("style"),
			runtimeCss = document.createTextNode(styles);

		style.type = 'text/css';

		style.setAttribute("id", stylesIdentifier + id.toString());
		style.appendChild(runtimeCss);

		head.appendChild(style);
	}
}