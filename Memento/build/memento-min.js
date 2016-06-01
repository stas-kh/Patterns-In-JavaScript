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
	
	var _ticTacToe = __webpack_require__(1);
	
	var _careTaker = __webpack_require__(2);
	
	window.addEventListener("load", function () {
		var autogameInterval = null;
		var autogameInvervalTimeMS = 500;
	
		var ticTac = new _ticTacToe.TicTacToe(function (message) {
			clearInterval(autogameInterval);
			alert(message);
		});
		ticTac.startGame();
	
		var careTaker = new _careTaker.CareTaker();
	
		var handleListeners = function handleListeners() {
			var cells = document.querySelectorAll(".cell");
			for (var i = 0; i < cells.length; i++) {
				cells[i].addEventListener("click", function (event) {
					ticTac.move(false, event.target.getAttribute("data-index"));
				});
			}
		};
		handleListeners();
	
		document.querySelector(".autogame").addEventListener("change", function (event) {
			if (event.target.checked === true) {
				autogameInterval = setInterval(function () {
					ticTac.move(true);
				}, autogameInvervalTimeMS);
			} else {
				clearInterval(autogameInterval);
			}
		});
	
		document.querySelector(".reset-game").addEventListener("click", function () {
			ticTac.resetGame();
		});
	
		document.querySelector(".save-state").addEventListener("click", function () {
			careTaker.saveState(ticTac);
		});
	
		document.querySelector(".restore-state").addEventListener("click", function () {
			careTaker.restoreState(ticTac);
			ticTac.reRender();
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TicTacToe = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _memento = __webpack_require__(4);
	
	var _IOriginator2 = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TicTacToe = exports.TicTacToe = function (_IOriginator) {
		_inherits(TicTacToe, _IOriginator);
	
		function TicTacToe(callback) {
			_classCallCheck(this, TicTacToe);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TicTacToe).call(this));
	
			_this._CROSS = "x";
			_this._NULL = "o";
			_this._FIELD_SELECTOR = ".tic-tac";
			_this._CELL_SELECTOR = ".cell";
			_this._CELL = "cell";
			_this._LOCALES = {
				NO_WINNERS_MSG: "No winners in current game! Play again to have more fun",
				CRUBS: "Crubs",
				DUCKS: "Ducks",
				WINNING_MSG: " win!!!"
			};
			_this._ICONS = {
				CRABBY: "crabby-icon",
				DUCK: "duck-icon"
			};
	
			_this._field = [0, 0, 0, 0, 0, 0, 0, 0, 0];
			_this._lastMove = null;
			_this._gameOverCallback = callback;
			return _this;
		}
	
		_createClass(TicTacToe, [{
			key: "move",
			value: function move(isAutoMove, index) {
				var move = this._checkMoveType(),
				    emptyCells = this._getEmptyIndexes();
	
				if (isAutoMove === true) {
					if (emptyCells.length !== 0) {
						index = emptyCells[this._generateRandomIndex(emptyCells)];
						this._updateField(move, index);
						this.checkVictory();
					} else {
						// stop the algorithm in case when no more empty fields
						this._callGameOver(this._LOCALES.NO_WINNERS_MSG);
					}
				} else {
					if (this._field[index] === 0) {
						this._updateField(move, index);
						// last cell was changed, but there is no winners, we show game over message
						if (this.checkVictory() === false && emptyCells.length === 1) {
							this._callGameOver(this._LOCALES.NO_WINNERS_MSG);
						}
					}
				}
			}
		}, {
			key: "_getEmptyIndexes",
			value: function _getEmptyIndexes() {
				var result = [];
				this._field.forEach(function (element, index) {
					if (element === 0) {
						result.push(index);
					}
				});
				return result;
			}
		}, {
			key: "_updateField",
			value: function _updateField(move, index) {
				this._field[index] = move;
				this._lastMove = move;
				this.reRender();
			}
		}, {
			key: "_generateRandomIndex",
			value: function _generateRandomIndex(array) {
				return Math.floor(Math.random() * (array.length - 1));
			}
		}, {
			key: "checkVictory",
			value: function checkVictory() {
				var result = false,
				    winningMessage = "";
				if (this._field[0] == this._field[1] && this._field[1] == this._field[2] && this._field[2] !== 0) {
					result = true;
				}
				if (this._field[3] == this._field[4] && this._field[4] == this._field[5] && this._field[5] !== 0) {
					result = true;
				}
				if (this._field[6] == this._field[7] && this._field[7] == this._field[8] && this._field[8] !== 0) {
					result = true;
				}
				if (this._field[6] == this._field[3] && this._field[3] == this._field[0] && this._field[0] !== 0) {
					result = true;
				}
				if (this._field[7] == this._field[4] && this._field[4] == this._field[1] && this._field[1] !== 0) {
					result = true;
				}
				if (this._field[8] == this._field[5] && this._field[5] == this._field[2] && this._field[2] !== 0) {
					result = true;
				}
				if (this._field[6] == this._field[4] && this._field[4] == this._field[2] && this._field[2] !== 0) {
					result = true;
				}
				if (this._field[0] == this._field[4] && this._field[4] == this._field[8] && this._field[8] !== 0) {
					result = true;
				}
				if (result === true) {
					if (this._lastMove === this._CROSS) {
						winningMessage += this._LOCALES.CRUBS;
					} else if (this._lastMove === this._NULL) {
						winningMessage += this._LOCALES.DUCKS;
					}
					winningMessage += this._LOCALES.WINNING_MSG;
					this._callGameOver(winningMessage);
				}
				return result;
			}
		}, {
			key: "_callGameOver",
			value: function _callGameOver(message) {
				if (this._gameOverCallback !== null && this._gameOverCallback !== undefined && typeof this._gameOverCallback === "function") {
					this._gameOverCallback.call(window, message);
				}
			}
		}, {
			key: "_render",
			value: function _render() {
				var renderedHTML = "",
				    cssClass = this._CELL,
				    index = 0;
				this._field.forEach(function () {
					renderedHTML += "<p class='" + cssClass + "' data-index='" + index + "'></p>";
					index++;
				});
				document.querySelector(this._FIELD_SELECTOR).innerHTML = renderedHTML;
			}
		}, {
			key: "reRender",
			value: function reRender() {
				var cells = document.querySelectorAll(this._CELL_SELECTOR);
				for (var i = 0; i < cells.length; i++) {
					var additionalClass = "";
					if (this._field[i] === this._CROSS) {
						additionalClass += this._ICONS.CRABBY;
					} else if (this._field[i] === this._NULL) {
						additionalClass += this._ICONS.DUCK;
					} else {
						cells[i].className = this._CELL;
					}
					if (additionalClass !== null && additionalClass !== undefined && additionalClass !== "") {
						cells[i].classList.add(additionalClass);
					}
				}
			}
		}, {
			key: "_resetField",
			value: function _resetField() {
				this._field = [0, 0, 0, 0, 0, 0, 0, 0, 0];
			}
		}, {
			key: "startGame",
			value: function startGame() {
				this._resetField();
				this._render();
			}
		}, {
			key: "resetGame",
			value: function resetGame() {
				this._resetField();
				this.reRender();
			}
		}, {
			key: "_checkMoveType",
			value: function _checkMoveType() {
				var type = "";
				if (this._lastMove === null) {
					type = this._CROSS;
				} else {
					type = this._lastMove === this._CROSS ? this._NULL : this._CROSS;
				}
				return type;
			}
		}, {
			key: "createMemento",
			value: function createMemento() {
				return new _memento.Memento(this._field.slice());
			}
		}, {
			key: "memento",
			set: function set(memento) {
				if (memento instanceof _memento.Memento) {
					this._field = memento.state;
				}
			}
		}]);

		return TicTacToe;
	}(_IOriginator2.IOriginator);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.CareTaker = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IOriginator = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CareTaker = exports.CareTaker = function () {
		function CareTaker() {
			_classCallCheck(this, CareTaker);
	
			this._mementos = [];
		}
	
		_createClass(CareTaker, [{
			key: "saveState",
			value: function saveState(originator) {
				if (originator instanceof _IOriginator.IOriginator) {
					this._mementos.push(originator.createMemento());
				}
			}
		}, {
			key: "restoreState",
			value: function restoreState(originator) {
				if (originator instanceof _IOriginator.IOriginator) {
					if (this._mementos.length > 0) {
						originator.memento = this._mementos.pop();
					} else {
						alert("There is no more stored states");
					}
				}
			}
		}]);

		return CareTaker;
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
	
	var IOriginator = exports.IOriginator = function () {
		function IOriginator() {
			_classCallCheck(this, IOriginator);
		}
	
		_createClass(IOriginator, [{
			key: "createMemento",
			value: function createMemento() {}
		}, {
			key: "memento",
			set: function set(state) {}
		}]);

		return IOriginator;
	}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Memento = exports.Memento = function () {
		function Memento(state) {
			_classCallCheck(this, Memento);
	
			this._state = state;
		}
	
		_createClass(Memento, [{
			key: "state",
			get: function get() {
				return this._state;
			}
		}]);

		return Memento;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=memento-min.js.map