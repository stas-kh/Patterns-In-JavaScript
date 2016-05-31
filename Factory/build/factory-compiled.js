/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _factory = __webpack_require__(1);

	var _heroTypes = __webpack_require__(2);

	window.onload = function () {
		var randomNames = ["Dee Pinedo", "Saran Vallarta", "Alonzo Stalzer", "Nadene Dorsey", "Talia Pough", "Graham Vallance", "Eugenia Aston", "Carmel Lawless", "Emanuel Townsley", "Pearle Roepke", "Natividad Solan", "Princess Lenard", "Odell Gamboa", "Scarlett Subia", "Mao Rippe", "Ngan Grennan", "Maybell Hensel", "Stephan Opie", "Hsiu Dones", "Mckinley Laurin"];

		var heroTypes = Object.keys(_heroTypes.HERO_TYPES).map(function (el) {
			return _heroTypes.HERO_TYPES[el];
		});

		var heroes = [];

		var tempRandomNumber = 0,
		    currentPlayer = "",
		    tempHero = null,
		    currentIndex = 0;

		var generate = function generate() {
			tempRandomNumber = Math.floor(Math.random() * 3);
			currentPlayer = randomNames[currentIndex];

			if (currentPlayer !== null && currentPlayer !== undefined) {
				tempHero = _factory.HeroesFactory.createHero(heroTypes[tempRandomNumber], currentPlayer);
				tempHero.generateHero();

				heroes.push(tempHero);

				currentIndex++;
			} else {
				alert("Each player has own hero");
			}
		};

		document.querySelector("button").addEventListener("click", generate);
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HeroesFactory = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _heroTypes = __webpack_require__(2);

	var _heroes = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HeroesFactory = function () {
		function HeroesFactory() {
			_classCallCheck(this, HeroesFactory);
		}

		_createClass(HeroesFactory, null, [{
			key: "createHero",
			value: function createHero(type, name) {
				switch (type) {
					case _heroTypes.HERO_TYPES.axe:
						return new _heroes.Axe(name);
						break;
					case _heroTypes.HERO_TYPES.rhasta:
						return new _heroes.Rhasta(name);
						break;
					case _heroTypes.HERO_TYPES.luna:
						return new _heroes.Luna(name);
						break;
					default:
						throw new Error("This type of hero is wrong");
				}
			}
		}]);

		return HeroesFactory;
	}();

	exports.HeroesFactory = HeroesFactory;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var HERO_TYPES = {
		axe: "AXE THE WARRIOR",
		luna: "CLERIC OF THE CHAOS",
		rhasta: "SHADOW SHAMAN"
	};

	exports.HERO_TYPES = HERO_TYPES;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rhasta = exports.Axe = exports.Luna = undefined;

	var _luna = __webpack_require__(4);

	var _axe = __webpack_require__(6);

	var _rhasta = __webpack_require__(7);

	exports.Luna = _luna.Luna;
	exports.Axe = _axe.Axe;
	exports.Rhasta = _rhasta.Rhasta;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Luna = undefined;

	var _hero = __webpack_require__(5);

	var _hero2 = _interopRequireDefault(_hero);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Luna = function (_Hero) {
		_inherits(Luna, _Hero);

		function Luna(playerName) {
			_classCallCheck(this, Luna);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Luna).call(this));

			_this.playerName = playerName;
			_this.imagePath = "assets/img/luna.jpg";
			return _this;
		}

		return Luna;
	}(_hero2.default);

	exports.Luna = Luna;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _class = function () {
			function _class() {
					_classCallCheck(this, _class);
			}

			_createClass(_class, [{
					key: "generateHero",
					value: function generateHero() {
							var result = document.createElement("div"),
							    title = document.createElement("h1"),
							    img = document.createElement("img");

							img.src = this.imagePath;
							title.innerText = this.playerName;

							result.appendChild(img);
							result.appendChild(title);

							document.body.appendChild(result);
					}
			}]);

			return _class;
	}();

	exports.default = _class;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Axe = undefined;

	var _hero = __webpack_require__(5);

	var _hero2 = _interopRequireDefault(_hero);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Axe = function (_Hero) {
		_inherits(Axe, _Hero);

		function Axe(playerName) {
			_classCallCheck(this, Axe);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Axe).call(this));

			_this.playerName = playerName;
			_this.imagePath = "assets/img/axe.png";
			return _this;
		}

		return Axe;
	}(_hero2.default);

	exports.Axe = Axe;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Rhasta = undefined;

	var _hero = __webpack_require__(5);

	var _hero2 = _interopRequireDefault(_hero);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rhasta = function (_Hero) {
		_inherits(Rhasta, _Hero);

		function Rhasta(playerName) {
			_classCallCheck(this, Rhasta);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rhasta).call(this));

			_this.playerName = playerName;
			_this.imagePath = "assets/img/rhasta.jpg";
			return _this;
		}

		return Rhasta;
	}(_hero2.default);

	exports.Rhasta = Rhasta;

/***/ }
/******/ ]);