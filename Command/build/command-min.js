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
	
	var _Hero = __webpack_require__(1);
	
	var _GameAdministrator = __webpack_require__(2);
	
	var _BonusHoursActivation = __webpack_require__(4);
	
	var _BonusHoursDeactivation = __webpack_require__(5);
	
	var _PlayerIdentification = __webpack_require__(6);
	
	var _PlayerBanning = __webpack_require__(7);
	
	window.addEventListener("load", function () {
		var heroes = [new _Hero.Hero("StasKh"), new _Hero.Hero("Alinkin"), new _Hero.Hero("Oleksii"), new _Hero.Hero("Telman")],
		    admin = new _GameAdministrator.GameAdministrator();
	
		heroes.forEach(function (elem, index) {
			var temp = document.createElement("option");
			temp.value = index;
			temp.textContent = elem.name;
			document.querySelector(".heroes-list").appendChild(temp);
		});
	
		var getSelectedHeroIndex = function getSelectedHeroIndex() {
			return document.querySelector(".heroes-list").value;
		};
	
		document.querySelector(".ban-hero").addEventListener("click", function () {
			var ban = new _PlayerBanning.PlayerBanning(heroes[getSelectedHeroIndex()]);
			admin.addCommand(ban);
		});
	
		document.querySelector(".activate-bonus-hero").addEventListener("click", function () {
			var bonusActivation = new _BonusHoursActivation.BonusHoursActivation(heroes[getSelectedHeroIndex()]);
			admin.addCommand(bonusActivation);
		});
	
		document.querySelector(".deactivate-bonus-hero").addEventListener("click", function () {
			var bonusDeactivation = new _BonusHoursDeactivation.BonusHoursDeactivation(heroes[getSelectedHeroIndex()]);
			admin.addCommand(bonusDeactivation);
		});
	
		document.querySelector(".identify-hero").addEventListener("click", function () {
			var identifier = new _PlayerIdentification.PlayerIdentification(heroes[getSelectedHeroIndex()]);
			admin.addCommand(identifier);
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Hero = exports.Hero = function () {
		function Hero(name) {
			_classCallCheck(this, Hero);
	
			this.name = name;
	
			this.initPlayer();
		}
	
		_createClass(Hero, [{
			key: "initPlayer",
			value: function initPlayer() {
				this._level = 1;
				this._expirience = {
					score: 0,
					isBonusActive: false
				};
				this._banStatus = {
					isBanned: false,
					banToDate: null
				};
				this._heroProperties = {
					agility: 1,
					strong: 1,
					intelligence: 1
				};
			}
	
			// let me skip a little functionality
	
		}, {
			key: "move",
			value: function move() {}
		}, {
			key: "hit",
			value: function hit() {}
		}, {
			key: "gainAbility",
			value: function gainAbility(ability) {}
		}, {
			key: "addScore",
			value: function addScore(score) {}
	
			// commands
	
		}, {
			key: "banPlayer",
			value: function banPlayer() {
				var date = new Date();
				date.setMonth(date.getMonth() + 1);
	
				this._banStatus.isBanned = true;
				this._banStatus.banToDate = date;
	
				this.log("Ban to player " + this.name + "\n" + JSON.stringify(this._banStatus, null, 4));
			}
		}, {
			key: "identify",
			value: function identify() {
				var _this = this;
	
				var xhr = new XMLHttpRequest(),
				    body = "player=" + encodeURIComponent(this.name) + "&level=" + encodeURIComponent(this._level.toString()) + "&expirience=" + encodeURIComponent(this._expirience.score.toString());
	
				var xhrProps = {
					type: "POST",
					isAsync: true,
					origin: "http://httpbin.org/post",
					headerType: "Content-Type",
					header: "application/x-www-form-urlencoded"
				};
	
				xhr.open(xhrProps.type, xhrProps.origin, xhrProps.isAsync);
				xhr.setRequestHeader(xhrProps.headerType, xhrProps.header);
	
				xhr.onreadystatechange = function () {
					if (xhr.readyState == 4 && xhr.status == 200) {
						_this.log("Data is received " + xhr.responseText);
					}
				};
	
				xhr.send(body);
			}
		}, {
			key: "activateBonusHours",
			value: function activateBonusHours() {
				this.log("Activate Bonus hours " + this.name);
				this._expirience.isBonusActive = true;
			}
		}, {
			key: "deactivateBonusHours",
			value: function deactivateBonusHours() {
				this.log("Dectivate Bonus hours " + this.name);
				this._expirience.isBonusActive = false;
			}
		}, {
			key: "log",
			value: function log(message) {
				var logger = document.querySelector(".logger");
				logger.innerText = logger.innerHTML + "\n" + message;
				logger.scrollTop = logger.scrollHeight;
			}
		}]);

		return Hero;
	}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.GameAdministrator = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IPlayerService = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GameAdministrator = exports.GameAdministrator = function () {
		function GameAdministrator() {
			_classCallCheck(this, GameAdministrator);
	
			this._commands = [];
		}
	
		_createClass(GameAdministrator, [{
			key: "addCommand",
			value: function addCommand(command) {
				if (command instanceof _IPlayerService.IPlayerService) {
					this._commands.push(command);
					this._commands.shift().execute();
				}
			}
		}]);

		return GameAdministrator;
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
	
	var IPlayerService = exports.IPlayerService = function () {
		function IPlayerService() {
			_classCallCheck(this, IPlayerService);
		}
	
		_createClass(IPlayerService, [{
			key: "execute",
			value: function execute() {}
		}]);

		return IPlayerService;
	}();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.BonusHoursActivation = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IPlayerService2 = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BonusHoursActivation = exports.BonusHoursActivation = function (_IPlayerService) {
		_inherits(BonusHoursActivation, _IPlayerService);
	
		function BonusHoursActivation(hero) {
			_classCallCheck(this, BonusHoursActivation);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BonusHoursActivation).call(this));
	
			_this._hero = hero;
			return _this;
		}
	
		_createClass(BonusHoursActivation, [{
			key: "execute",
			value: function execute() {
				this._hero.activateBonusHours();
			}
		}]);

		return BonusHoursActivation;
	}(_IPlayerService2.IPlayerService);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.BonusHoursDeactivation = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IPlayerService2 = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BonusHoursDeactivation = exports.BonusHoursDeactivation = function (_IPlayerService) {
		_inherits(BonusHoursDeactivation, _IPlayerService);
	
		function BonusHoursDeactivation(hero) {
			_classCallCheck(this, BonusHoursDeactivation);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BonusHoursDeactivation).call(this));
	
			_this._hero = hero;
			return _this;
		}
	
		_createClass(BonusHoursDeactivation, [{
			key: "execute",
			value: function execute() {
				this._hero.deactivateBonusHours();
			}
		}]);

		return BonusHoursDeactivation;
	}(_IPlayerService2.IPlayerService);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.PlayerIdentification = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IPlayerService2 = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PlayerIdentification = exports.PlayerIdentification = function (_IPlayerService) {
		_inherits(PlayerIdentification, _IPlayerService);
	
		function PlayerIdentification(hero) {
			_classCallCheck(this, PlayerIdentification);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerIdentification).call(this));
	
			_this._hero = hero;
			return _this;
		}
	
		_createClass(PlayerIdentification, [{
			key: "execute",
			value: function execute() {
				this._hero.identify();
			}
		}]);

		return PlayerIdentification;
	}(_IPlayerService2.IPlayerService);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.PlayerBanning = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IPlayerService2 = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PlayerBanning = exports.PlayerBanning = function (_IPlayerService) {
		_inherits(PlayerBanning, _IPlayerService);
	
		function PlayerBanning(hero) {
			_classCallCheck(this, PlayerBanning);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerBanning).call(this));
	
			_this._hero = hero;
			return _this;
		}
	
		_createClass(PlayerBanning, [{
			key: "execute",
			value: function execute() {
				this._hero.banPlayer();
			}
		}]);

		return PlayerBanning;
	}(_IPlayerService2.IPlayerService);

/***/ }
/******/ ]);
//# sourceMappingURL=command-min.js.map