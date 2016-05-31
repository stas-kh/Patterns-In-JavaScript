"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSONConverter = function () {
	function JSONConverter(parser) {
		_classCallCheck(this, JSONConverter);

		this.parser = null;

		if (parser instanceof IJSONParser === true) {
			this.parser = parser;
		}
	}

	_createClass(JSONConverter, [{
		key: "parseJSON",
		value: function parseJSON(jsonObj) {
			if (this.parser !== null) {
				this.parser.parseJSON(jsonObj);
			} else {
				throw new Error("Parser is not defined. It seems that it has wrong type");
			}
		}
	}]);

	return JSONConverter;
}();

//# sourceMappingURL=jsonConverter-compiled.js.map