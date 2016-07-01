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
	
	var _playerTypes = __webpack_require__(1);
	
	var _terrorist = __webpack_require__(2);
	
	var _counterTerrorist = __webpack_require__(5);
	
	var _radioMessageHandler = __webpack_require__(6);
	
	var generateRandomHero = function generateRandomHero(name) {
		var TYPES = [_playerTypes.playerTypes.CT, _playerTypes.playerTypes.T];
	
		var randomNum = Math.round(Math.random()),
		    result = null;
	
		if (TYPES[randomNum] === _playerTypes.playerTypes.CT) {
			result = new _counterTerrorist.CounterTerrorist(name);
		} else if (TYPES[randomNum] === _playerTypes.playerTypes.T) {
			result = new _terrorist.Terrorist(name);
		}
	
		return result;
	};
	
	var randomNames = ["Janice Stiger", "Loreta Wills", "Ji Leo", "Devora Noell", "Eugenia Haworth", "Darline Wohl", "Luella Varnum", "Ludie Nokes", "Chuck Stampley", "Jaimie Yarnall", "Jazmin Nordeen", "Jamie Burgdorf", "Jutta Willson", "Vanessa Rowlett", "Eda Meggs", "Mora Tomberlin", "Willis Shawver", "Cyrstal Montenegro", "Pok Rudie", "Teressa Lamphear"],
	    mediator = new _radioMessageHandler.RadioMessageHandler(),
	    player = null,
	    tempPlayers = [];
	
	randomNames.forEach(function (name) {
		player = generateRandomHero(name);
		mediator.add(player);
		tempPlayers.push(player);
	});
	
	window.addEventListener("load", function () {
		var closeAllRadioDialogs = function closeAllRadioDialogs() {
			document.querySelectorAll(".keys").forEach(function (el) {
				el.style.display = "none";
			});
		};
	
		var renderHeroes = function renderHeroes() {
			tempPlayers.forEach(function (player, index) {
				document.querySelector(".players").innerHTML += "<br /><input type=\"radio\" name=\"currentPlayer\" value=\"" + index + "\"><label for=\"" + player.name + "\">" + player.name + " [" + player.TYPE + "]</label>";
				document.querySelectorAll(".players input[type='radio']")[0].checked = true;
			});
		};
		renderHeroes();
	
		var lastKnownCommandBlock = null;
	
		window.addEventListener("keyup", function (event) {
			if (event.key === "x" || event.key === "z" || event.key === "c") {
				closeAllRadioDialogs();
				lastKnownCommandBlock = "." + event.key + "-keys";
				document.querySelector(lastKnownCommandBlock).style.display = "block";
			}
			if (event.key > 0 && event.key <= 7) {
				var currentPlayerIndex = document.querySelector("input[name='currentPlayer']:checked").value,
				    parentBox = document.querySelector(lastKnownCommandBlock),
				    childElement = parentBox.querySelectorAll("li")[event.key - 1];
	
				tempPlayers[currentPlayerIndex].send(childElement.innerHTML);
				closeAllRadioDialogs();
			}
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var playerTypes = exports.playerTypes = {
		CT: "counter-terrorist",
		T: "terrorist"
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Terrorist = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _player = __webpack_require__(3);
	
	var _playerTypes = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Terrorist = exports.Terrorist = function (_Player) {
		_inherits(Terrorist, _Player);
	
		function Terrorist(name) {
			_classCallCheck(this, Terrorist);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Terrorist).call(this, name));
	
			_this.TYPE = _playerTypes.playerTypes.T;
			return _this;
		}
	
		_createClass(Terrorist, [{
			key: "receive",
			value: function receive(senderName, message) {
				console.log("Terrorist " + this.name + " received the message [" + message + "] from " + senderName);
			}
		}]);

		return Terrorist;
	}(_player.Player);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Player = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IColleague2 = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Player = exports.Player = function (_IColleague) {
		_inherits(Player, _IColleague);
	
		function Player(name) {
			_classCallCheck(this, Player);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this));
	
			_this._name = name;
			return _this;
		}
	
		_createClass(Player, [{
			key: "receive",
			value: function receive(message) {
				console.log("Player " + this.name + " received the message");
			}
		}, {
			key: "send",
			value: function send(radioCommand) {
				this._mediator.handleCommand(radioCommand, this._name, this.TYPE);
			}
		}, {
			key: "mediator",
			set: function set(mediator) {
				this._mediator = mediator;
			},
			get: function get() {
				return this._mediator;
			}
		}, {
			key: "name",
			get: function get() {
				return this._name;
			}
		}]);

		return Player;
	}(_IColleague2.IColleague);

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IColleague = exports.IColleague = function () {
		function IColleague() {
			_classCallCheck(this, IColleague);
		}
	
		_createClass(IColleague, [{
			key: "send",
			value: function send(radioCommand) {}
		}, {
			key: "receive",
			value: function receive(message) {}
		}]);

		return IColleague;
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CounterTerrorist = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _player = __webpack_require__(3);
	
	var _playerTypes = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CounterTerrorist = exports.CounterTerrorist = function (_Player) {
		_inherits(CounterTerrorist, _Player);
	
		function CounterTerrorist(name) {
			_classCallCheck(this, CounterTerrorist);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CounterTerrorist).call(this, name));
	
			_this.TYPE = _playerTypes.playerTypes.CT;
			return _this;
		}
	
		_createClass(CounterTerrorist, [{
			key: "receive",
			value: function receive(senderName, message) {
				console.log("Counter-terrorist " + this.name + " received the message [" + message + "] from " + senderName);
			}
		}]);

		return CounterTerrorist;
	}(_player.Player);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RadioMessageHandler = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IMediator2 = __webpack_require__(7);
	
	var _playerTypes = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RadioMessageHandler = exports.RadioMessageHandler = function (_IMediator) {
		_inherits(RadioMessageHandler, _IMediator);
	
		function RadioMessageHandler() {
			_classCallCheck(this, RadioMessageHandler);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RadioMessageHandler).call(this));
	
			_this._players = [];
			return _this;
		}
	
		_createClass(RadioMessageHandler, [{
			key: "add",
			value: function add(player) {
				this._players.push(player);
				player.mediator = this;
			}
		}, {
			key: "handleCommand",
			value: function handleCommand(command, name, type) {
				var playersWithRequiredType = this._players.filter(function (player) {
					return player.TYPE === type;
				});
				playersWithRequiredType.forEach(function (player) {
					return player.receive(name, command);
				});
	
				return playersWithRequiredType;
			}
		}]);

		return RadioMessageHandler;
	}(_IMediator2.IMediator);

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IMediator = exports.IMediator = function () {
		function IMediator() {
			_classCallCheck(this, IMediator);
		}
	
		_createClass(IMediator, [{
			key: "handleCommand",
			value: function handleCommand(command, name, type) {}
		}]);

		return IMediator;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=mediator-min.js.map