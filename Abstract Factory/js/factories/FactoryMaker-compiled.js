"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FactoryMaker = function () {
	function FactoryMaker() {
		_classCallCheck(this, FactoryMaker);
	}

	_createClass(FactoryMaker, null, [{
		key: "getHeroFactory",
		value: function getHeroFactory(type) {
			var factory = null;
			switch (type) {
				case factoryType.wizard:
					factory = new WizardFactory();
					break;
				case factoryType.swordsman:
					factory = new SwordsmanFactory();
					break;
			}
			return factory;
		}
	}]);

	return FactoryMaker;
}();

//# sourceMappingURL=FactoryMaker-compiled.js.map