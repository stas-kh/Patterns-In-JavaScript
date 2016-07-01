/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _axe = __webpack_require__(1);
	
	var _luna = __webpack_require__(4);
	
	var _rhasta = __webpack_require__(5);
	
	var axe = new _axe.Axe(),
	    luna = new _luna.Luna(),
	    rhasta = new _rhasta.Rhasta();
	
	axe.doUltimate();
	luna.doUltimate();
	rhasta.doUltimate();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Axe = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _hero = __webpack_require__(2);
	
	var _heroTypes = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Axe = exports.Axe = function (_Hero) {
		_inherits(Axe, _Hero);
	
		function Axe() {
			_classCallCheck(this, Axe);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Axe).call(this, 20, 5, 10, _heroTypes.HERO_TYPES.axe.ultimate.time, _heroTypes.HERO_TYPES.axe.ultimate.id, _heroTypes.HERO_TYPES.axe.name));
		}
	
		_createClass(Axe, [{
			key: "preUltimate",
			value: function preUltimate() {
				_get(Object.getPrototypeOf(Axe.prototype), "preUltimate", this).call(this);
				this.heroProperties.health /= 2;
			}
		}, {
			key: "postUltimate",
			value: function postUltimate() {
				_get(Object.getPrototypeOf(Axe.prototype), "postUltimate", this).call(this);
				this.heroProperties.health += this.heroProperties * 0.3;
			}
		}]);

		return Axe;
	}(_hero.Hero);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Hero = exports.Hero = function () {
		function Hero(str, agl, int, ultTime, ultType, name) {
			_classCallCheck(this, Hero);
	
			this.heroProperties = {
				strength: str,
				agility: agl,
				intelligence: int
			};
			this.ultimate = {
				time: ultTime,
				type: ultType
			};
			this.name = name;
			this.health = 100;
		}
	
		_createClass(Hero, [{
			key: "doUltimate",
			value: function doUltimate() {
				var _this = this;
	
				this.preUltimate();
				this.useSkill(this.ultimate.type);
				setTimeout(function () {
					return _this.postUltimate();
				}, this.ultimate.time);
			}
		}, {
			key: "preUltimate",
			value: function preUltimate() {
				console.log(this.name + " is ready to use " + this.ultimate.type);
			}
		}, {
			key: "postUltimate",
			value: function postUltimate() {
				console.log("---" + this.name + " has already finished using " + this.ultimate.type + "---");
			}
		}, {
			key: "useSkill",
			value: function useSkill(type) {
				/* some implementantion */
			}
		}]);

		return Hero;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var HERO_TYPES = exports.HERO_TYPES = {
		axe: {
			name: "AXE THE WARRIOR",
			ultimate: {
				id: "roar",
				time: 2000
			}
		},
		luna: {
			name: "CLERIC OF THE CHAOS",
			ultimate: {
				id: "shadow battle",
				time: 5000
			}
		},
		rhasta: {
			name: "SHADOW SHAMAN",
			ultimate: {
				id: "polarity bear",
				time: 3000
			}
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Luna = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _hero = __webpack_require__(2);
	
	var _heroTypes = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Luna = exports.Luna = function (_Hero) {
		_inherits(Luna, _Hero);
	
		function Luna() {
			_classCallCheck(this, Luna);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Luna).call(this, 10, 35, 5, _heroTypes.HERO_TYPES.luna.ultimate.time, _heroTypes.HERO_TYPES.luna.ultimate.id, _heroTypes.HERO_TYPES.luna.name));
	
			_this.isBonusAuraActive = false;
			return _this;
		}
	
		_createClass(Luna, [{
			key: "preUltimate",
			value: function preUltimate() {
				_get(Object.getPrototypeOf(Luna.prototype), "preUltimate", this).call(this);
				this.heroProperties.agility *= 2.75;
				this.isBonusAuraActive = true;
			}
		}, {
			key: "postUltimate",
			value: function postUltimate() {
				_get(Object.getPrototypeOf(Luna.prototype), "postUltimate", this).call(this);
				this.heroProperties.agility /= 2.75;
				this.isBonusAuraActive = false;
			}
		}]);

		return Luna;
	}(_hero.Hero);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Rhasta = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _hero = __webpack_require__(2);
	
	var _heroTypes = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Rhasta = exports.Rhasta = function (_Hero) {
		_inherits(Rhasta, _Hero);
	
		function Rhasta() {
			_classCallCheck(this, Rhasta);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Rhasta).call(this, 5, 12, 40, _heroTypes.HERO_TYPES.rhasta.ultimate.time, _heroTypes.HERO_TYPES.rhasta.ultimate.id, _heroTypes.HERO_TYPES.rhasta.name));
		}
	
		_createClass(Rhasta, [{
			key: "preUltimate",
			value: function preUltimate() {
				_get(Object.getPrototypeOf(Rhasta.prototype), "preUltimate", this).call(this);
				this.heroProperties.intelligence++;
				this.heroProperties.agility++;
				this.heroProperties.strength++;
			}
		}]);

		return Rhasta;
	}(_hero.Hero);

/***/ }
/******/ ]);
//# sourceMappingURL=template-method-min.js.map