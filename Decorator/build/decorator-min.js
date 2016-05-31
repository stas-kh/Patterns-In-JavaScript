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
	
	var _Bird = __webpack_require__(1);
	
	var _DecoratedBird = __webpack_require__(3);
	
	var _BluesBird = __webpack_require__(4);
	
	var _ChuckBird = __webpack_require__(5);
	
	var birdToBeDecorated = new _Bird.Bird(),
	    playerBalance = 1500,
	    birdPrices = {
		default: 30,
		decorated: 50,
		blues: 100,
		chuck: 200
	};
	
	window.addEventListener("load", function () {
		var birdsContainer = document.querySelector(".birds-container");
	
		document.querySelector(".buy-default-bird").addEventListener("click", function () {
			var bird = new _Bird.Bird();
	
			updateBalance(birdPrices.default, function () {
				appendBird(bird.render());
			});
		});
	
		document.querySelector(".buy-decorated-bird").addEventListener("click", function () {
			var birdType = document.querySelector(".bird-type").value,
			    bird = null;
			switch (birdType) {
				case "decorated":
					bird = new _DecoratedBird.DecoratedBird(birdToBeDecorated);
					break;
				case "blues":
					bird = new _BluesBird.BluesBird(birdToBeDecorated);
					break;
				case "chuck":
					bird = new _ChuckBird.ChuckBird(birdToBeDecorated);
					break;
			}
	
			updateBalance(birdPrices[birdType], function () {
				appendBird(bird.render());
			});
		});
	
		var appendBird = function appendBird(bird) {
			birdsContainer.appendChild(bird);
		};
	
		var updateBalance = function updateBalance(price, successCallback) {
			var result = playerBalance - price;
			if (result < 0) {
				alert("You don't have enough money to buy more birds.");
			} else {
				playerBalance = result;
				updateBalanceOnView();
	
				if (successCallback !== null && successCallback !== undefined && typeof successCallback === "function") {
					successCallback.call();
				}
			}
		};
	
		var updateBalanceOnView = function updateBalanceOnView() {
			document.querySelector(".player-balance").innerHTML = playerBalance;
		};
	
		updateBalanceOnView();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Bird = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IBird2 = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bird = exports.Bird = function (_IBird) {
		_inherits(Bird, _IBird);
	
		function Bird() {
			_classCallCheck(this, Bird);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bird).call(this));
	
			_this._birdClass = "bird";
			_this._birdType = "bird-red";
			return _this;
		}
	
		_createClass(Bird, [{
			key: "render",
			value: function render() {
				var birdContainer = document.createElement("div");
				birdContainer.classList.add(this._birdClass);
				birdContainer.classList.add(this._birdType);
	
				return birdContainer;
			}
		}]);

		return Bird;
	}(_IBird2.IBird);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IBird = exports.IBird = function () {
		function IBird() {
			_classCallCheck(this, IBird);
		}
	
		_createClass(IBird, [{
			key: "render",
			value: function render() {}
		}]);

		return IBird;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DecoratedBird = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IBird2 = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DecoratedBird = exports.DecoratedBird = function (_IBird) {
		_inherits(DecoratedBird, _IBird);
	
		function DecoratedBird(bird) {
			_classCallCheck(this, DecoratedBird);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DecoratedBird).call(this));
	
			_this._bird = bird;
			_this._extraBirdType = "bird-red-with-bonus";
			return _this;
		}
	
		_createClass(DecoratedBird, [{
			key: "_sayHello",
			value: function _sayHello() {
				return "Hi! I'm decorated bird";
			}
		}, {
			key: "_addBonusBirdTitle",
			value: function _addBonusBirdTitle() {
				var result = document.createElement("h1"),
				    text = document.createTextNode(this._sayHello());
				result.appendChild(text);
	
				return result;
			}
		}, {
			key: "render",
			value: function render() {
				var result = this._bird.render();
				result.classList.add(this._extraBirdType);
				result.appendChild(this._addBonusBirdTitle());
	
				return result;
			}
		}]);

		return DecoratedBird;
	}(_IBird2.IBird);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.BluesBird = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DecoratedBird2 = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BluesBird = exports.BluesBird = function (_DecoratedBird) {
		_inherits(BluesBird, _DecoratedBird);
	
		function BluesBird(bird) {
			_classCallCheck(this, BluesBird);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BluesBird).call(this, bird));
	
			_this._extraBirdType = "bird-blues";
			return _this;
		}
	
		_createClass(BluesBird, [{
			key: "_sayHello",
			value: function _sayHello() {
				return "Hi! I'm blues bird";
			}
		}]);

		return BluesBird;
	}(_DecoratedBird2.DecoratedBird);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ChuckBird = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DecoratedBird2 = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ChuckBird = exports.ChuckBird = function (_DecoratedBird) {
		_inherits(ChuckBird, _DecoratedBird);
	
		function ChuckBird(bird) {
			_classCallCheck(this, ChuckBird);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChuckBird).call(this, bird));
	
			_this._extraBirdType = "bird-chuck";
			return _this;
		}
	
		_createClass(ChuckBird, [{
			key: "_sayHello",
			value: function _sayHello() {
				return "Hi! I'm chuck bird";
			}
		}]);

		return ChuckBird;
	}(_DecoratedBird2.DecoratedBird);

/***/ }
/******/ ]);
//# sourceMappingURL=decorator-min.js.map