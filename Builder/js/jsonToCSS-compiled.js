"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSONToCSS = function () {
	function JSONToCSS() {
		_classCallCheck(this, JSONToCSS);
	}

	_createClass(JSONToCSS, [{
		key: "parse",
		value: function parse(json) {
			var result = "";

			if (json.hasOwnProperty("styles") === true) {
				json.styles.forEach(function (el, arr) {
					result += "\n";
					result += el.selector;
					result += " { ";

					if (el.hasOwnProperty("properties") === true) {
						for (var prop in el.properties) {
							if (el.properties.hasOwnProperty(prop) === true) {
								result += "\n";
								result += "\t";
								result += prop;
								result += ": ";
								result += el.properties[prop];
								result += ";";
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
	}, {
		key: "appendRuntimeStyles",
		value: function appendRuntimeStyles(styles, id) {
			var stylesIdentifier = "runtimeStyle";

			var head = document.querySelector("head"),
			    style = document.createElement("style"),
			    runtimeCss = document.createTextNode(styles);

			style.type = 'text/css';

			style.setAttribute("id", stylesIdentifier + id.toString());
			style.appendChild(runtimeCss);

			head.appendChild(style);
		}
	}]);

	return JSONToCSS;
}();

//# sourceMappingURL=jsonToCSS-compiled.js.map