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
	
	var _axeFactory = __webpack_require__(1);
	
	var _lunaFactory = __webpack_require__(5);
	
	var _rhastaFactory = __webpack_require__(7);
	
	window.onload = function () {
		var randomNames = ["Dee Pinedo", "Saran Vallarta", "Alonzo Stalzer", "Nadene Dorsey", "Talia Pough", "Graham Vallance", "Eugenia Aston", "Carmel Lawless", "Emanuel Townsley", "Pearle Roepke", "Natividad Solan", "Princess Lenard", "Odell Gamboa", "Scarlett Subia", "Mao Rippe", "Ngan Grennan", "Maybell Hensel", "Stephan Opie", "Hsiu Dones", "Mckinley Laurin"];
	
		var heroFactories = [new _axeFactory.AxeFactory(), new _lunaFactory.LunaFactory(), new _rhastaFactory.RhastaFactory()];
		var heroes = [];
	
		var tempRandomNumber = 0,
		    currentPlayer = "",
		    tempHero = null,
		    currentIndex = 0;
	
		var generate = function generate() {
			tempRandomNumber = Math.floor(Math.random() * 3);
			currentPlayer = randomNames[currentIndex];
	
			if (currentPlayer !== null && currentPlayer !== undefined) {
				heroFactories[tempRandomNumber].generateHero(currentPlayer);
	
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
	exports.AxeFactory = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _axe = __webpack_require__(2);
	
	var _heroFactory = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AxeFactory = function (_HeroFactory) {
		_inherits(AxeFactory, _HeroFactory);
	
		function AxeFactory() {
			_classCallCheck(this, AxeFactory);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(AxeFactory).apply(this, arguments));
		}
	
		_createClass(AxeFactory, [{
			key: "factoryMethod",
			value: function factoryMethod(name) {
				return new _axe.Axe(name);
			}
		}]);
	
		return AxeFactory;
	}(_heroFactory.HeroFactory);
	
	exports.AxeFactory = AxeFactory;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Axe = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Ihero2 = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Axe = function (_Ihero) {
		_inherits(Axe, _Ihero);
	
		function Axe(playerName) {
			_classCallCheck(this, Axe);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Axe).call(this));
	
			_this.playerName = playerName;
			_this.imagePath = "assets/img/axe.png";
			return _this;
		}
	
		_createClass(Axe, [{
			key: "generateHeroInfo",
			value: function generateHeroInfo() {
				console.log(this.playerName + " selected Axe. As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General. In battle after battle he proved his worth through gory deed.");
			}
		}]);
	
		return Axe;
	}(_Ihero2.Ihero);
	
	exports.Axe = Axe;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ihero = function () {
		function Ihero() {
			_classCallCheck(this, Ihero);
		}
	
		_createClass(Ihero, [{
			key: "generateHeroInfo",
			value: function generateHeroInfo() {/* */}
		}]);
	
		return Ihero;
	}();
	
	exports.Ihero = Ihero;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HeroFactory = function () {
			function HeroFactory() {
					_classCallCheck(this, HeroFactory);
			}
	
			_createClass(HeroFactory, [{
					key: "generateHero",
					value: function generateHero(name) {
							var result = document.createElement("div"),
							    title = document.createElement("h1"),
							    img = document.createElement("img"),
							    hero = this.factoryMethod(name);
	
							img.src = hero.imagePath;
							title.innerText = hero.playerName;
	
							result.appendChild(img);
							result.appendChild(title);
	
							document.body.appendChild(result);
	
							hero.generateHeroInfo();
					}
			}]);
	
			return HeroFactory;
	}();
	
	exports.HeroFactory = HeroFactory;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LunaFactory = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _luna = __webpack_require__(6);
	
	var _heroFactory = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LunaFactory = function (_HeroFactory) {
		_inherits(LunaFactory, _HeroFactory);
	
		function LunaFactory() {
			_classCallCheck(this, LunaFactory);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(LunaFactory).apply(this, arguments));
		}
	
		_createClass(LunaFactory, [{
			key: "factoryMethod",
			value: function factoryMethod(name) {
				return new _luna.Luna(name);
			}
		}]);
	
		return LunaFactory;
	}(_heroFactory.HeroFactory);
	
	exports.LunaFactory = LunaFactory;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Luna = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Ihero2 = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Luna = function (_Ihero) {
		_inherits(Luna, _Ihero);
	
		function Luna(playerName) {
			_classCallCheck(this, Luna);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Luna).call(this));
	
			_this.playerName = playerName;
			_this.imagePath = "assets/img/luna.jpg";
			return _this;
		}
	
		_createClass(Luna, [{
			key: "generateHeroInfo",
			value: function generateHeroInfo() {
				console.log(this.playerName + " selected Luna. How had she been reduced to this? She was once the Scourge of the Plains, a merciless leader of men and beasts, and able to sow terror wherever she dared. Now she was far from her homeland, driven half mad from starvation and months of wandering, her army long dead or worse.");
			}
		}]);
	
		return Luna;
	}(_Ihero2.Ihero);
	
	exports.Luna = Luna;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RhastaFactory = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rhasta = __webpack_require__(8);
	
	var _heroFactory = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RhastaFactory = function (_HeroFactory) {
		_inherits(RhastaFactory, _HeroFactory);
	
		function RhastaFactory() {
			_classCallCheck(this, RhastaFactory);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(RhastaFactory).apply(this, arguments));
		}
	
		_createClass(RhastaFactory, [{
			key: "factoryMethod",
			value: function factoryMethod(name) {
				return new _rhasta.Rhasta(name);
			}
		}]);
	
		return RhastaFactory;
	}(_heroFactory.HeroFactory);
	
	exports.RhastaFactory = RhastaFactory;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Rhasta = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Ihero2 = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Rhasta = function (_Ihero) {
		_inherits(Rhasta, _Ihero);
	
		function Rhasta(playerName) {
			_classCallCheck(this, Rhasta);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rhasta).call(this));
	
			_this.playerName = playerName;
			_this.imagePath = "assets/img/rhasta.jpg";
			return _this;
		}
	
		_createClass(Rhasta, [{
			key: "generateHeroInfo",
			value: function generateHeroInfo() {
				console.log(this.playerName + " selected Rhasta. Born in the Bleeding Hills, Rhasta was just a starving youngling when picked up by a travelling con-man. For two pins of copper, the old con-man would tell your fortune.");
			}
		}]);
	
		return Rhasta;
	}(_Ihero2.Ihero);
	
	exports.Rhasta = Rhasta;

/***/ }
/******/ ]);
//# sourceMappingURL=factory-compiled.js.map