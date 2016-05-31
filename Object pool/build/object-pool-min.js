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
	
	var _lunaFactory = __webpack_require__(6);
	
	var _rhastaFactory = __webpack_require__(8);
	
	var _heroesPool = __webpack_require__(3);
	
	window.addEventListener("load", function () {
		var randomNames = ["Dee Pinedo", "Saran Vallarta", "Alonzo Stalzer", "Nadene Dorsey", "Talia Pough", "Graham Vallance", "Eugenia Aston", "Carmel Lawless", "Emanuel Townsley", "Pearle Roepke", "Natividad Solan", "Princess Lenard", "Odell Gamboa", "Scarlett Subia", "Mao Rippe", "Ngan Grennan", "Maybell Hensel", "Stephan Opie", "Hsiu Dones", "Mckinley Laurin"],
		    currentIndex = 0,
		    heroFactories = [_axeFactory.AxeFactory, _lunaFactory.LunaFactory, _rhastaFactory.RhastaFactory],
		    hero = null;
	
		_heroesPool.HeroesPool.getInstance().create(heroFactories);
	
		var generate = function generate() {
			hero = _heroesPool.HeroesPool.getInstance().acquireHero();
	
			if (hero !== null && hero !== undefined) {
				hero.generate(randomNames[currentIndex++], function () {
					currentIndex--;
				});
			}
		};
	
		document.querySelector(".create").addEventListener("click", generate);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.AxeFactory = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _heroFactory = __webpack_require__(2);
	
	var _axe = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AxeFactory = exports.AxeFactory = function (_HeroFactory) {
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HeroFactory = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _heroesPool = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HeroFactory = exports.HeroFactory = function () {
		function HeroFactory() {
			_classCallCheck(this, HeroFactory);
		}
	
		_createClass(HeroFactory, [{
			key: "generate",
			value: function generate(name, onCloseCallback) {
				var _this = this;
	
				var result = document.createElement("div"),
				    title = document.createElement("h1"),
				    img = document.createElement("img"),
				    btn = document.createElement("button"),
				    hero = this.factoryMethod(name);
	
				img.src = hero.imagePath;
				title.innerText = hero.playerName;
	
				result.appendChild(img);
				result.appendChild(title);
				result.appendChild(btn);
	
				btn.addEventListener("click", function () {
					_heroesPool.HeroesPool.getInstance().releaseHero(_this);
					document.body.removeChild(result);
					if (onCloseCallback !== undefined && onCloseCallback !== null && typeof onCloseCallback === "function") {
						onCloseCallback.call();
					}
				});
	
				document.body.appendChild(result);
	
				hero.generateHeroInfo();
			}
		}]);
	
		return HeroFactory;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HeroesPool = exports.HeroesPool = function () {
		var _instance = null;
	
		var ObjectPool = function () {
			function ObjectPool() {
				_classCallCheck(this, ObjectPool);
	
				this._reusableHeroes = [];
				this._maxPoolSize = 20;
			}
	
			_createClass(ObjectPool, [{
				key: "acquireHero",
				value: function acquireHero() {
					var hero = null;
					for (var i = 0; i < this._reusableHeroes.length; i++) {
						hero = this._reusableHeroes[i];
						if (hero.isInUse === false) {
							hero.isInUse = true;
							return hero;
						}
					}
					throw new Error("Count of heroes exceeds max pool limit");
				}
			}, {
				key: "releaseHero",
				value: function releaseHero(hero) {
					hero.isInUse = false;
				}
			}, {
				key: "create",
				value: function create(heroFactories) {
					var upperLimit = heroFactories.length,
					    randomNum = 0,
					    hero = null;
					this.clearHeroes();
					for (var i = 0; i < this._maxPoolSize; i++) {
						randomNum = Math.floor(Math.random() * upperLimit);
						hero = new heroFactories[randomNum]();
						hero.isInUse = false;
						this._reusableHeroes.push(hero);
					}
				}
			}, {
				key: "clearHeroes",
				value: function clearHeroes() {
					this._reusableHeroes.length = 0;
				}
			}, {
				key: "maxPoolSize",
				get: function get() {
					return this._maxPoolSize;
				},
				set: function set(size) {
					this._maxPoolSize = size;
				}
			}]);
	
			return ObjectPool;
		}();
	
		return {
			getInstance: function getInstance() {
				if (_instance === null) {
					_instance = new ObjectPool();
				}
				return _instance;
			}
		};
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Axe = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _iHero = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Axe = exports.Axe = function (_Ihero) {
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
	}(_iHero.Ihero);

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Ihero = exports.Ihero = function () {
		function Ihero() {
			_classCallCheck(this, Ihero);
		}
	
		_createClass(Ihero, [{
			key: "generateHeroInfo",
			value: function generateHeroInfo() {/* */
			}
		}]);
	
		return Ihero;
	}();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LunaFactory = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _heroFactory = __webpack_require__(2);
	
	var _luna = __webpack_require__(7);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LunaFactory = exports.LunaFactory = function (_HeroFactory) {
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Luna = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _iHero = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Luna = exports.Luna = function (_Ihero) {
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
	}(_iHero.Ihero);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RhastaFactory = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _heroFactory = __webpack_require__(2);
	
	var _rhasta = __webpack_require__(9);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RhastaFactory = exports.RhastaFactory = function (_HeroFactory) {
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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Rhasta = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _iHero = __webpack_require__(5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Rhasta = exports.Rhasta = function (_Ihero) {
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
	}(_iHero.Ihero);

/***/ }
/******/ ]);
//# sourceMappingURL=object-pool-min.js.map