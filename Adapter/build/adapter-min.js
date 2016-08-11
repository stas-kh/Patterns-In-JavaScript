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
	
	var _itemsStore = __webpack_require__(1);
	
	var _rucksackAdapter = __webpack_require__(3);
	
	var _hero = __webpack_require__(6);
	
	window.addEventListener("load", function () {
		/* HERO WITH ADAPTER */
		var hero = new _hero.Hero(new _rucksackAdapter.RucksackAdapter());
	
		hero.items.addItem("Antidote");
		hero.items.addItem("SP Potion");
		hero.items.addItem("Eyedrop");
	
		console.log(hero.items.getItems());
	
		/* HERO WITHOUT ADAPTER */
		var heroTest = new _hero.Hero(new _itemsStore.ItemsStore());
	
		heroTest.items.addItem("Toncture");
		heroTest.items.addItem("HP Potion");
	
		console.log(heroTest.items.getItems());
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ItemsStore = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IItemsStore2 = __webpack_require__(2);
	
	var _IItemsStore3 = _interopRequireDefault(_IItemsStore2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ItemsStore = exports.ItemsStore = function (_IItemsStore) {
		_inherits(ItemsStore, _IItemsStore);
	
		function ItemsStore() {
			_classCallCheck(this, ItemsStore);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ItemsStore).call(this));
	
			_this._items = [];
			return _this;
		}
	
		_createClass(ItemsStore, [{
			key: "addItem",
			value: function addItem(item) {
				this._items.push(item);
				console.log(item + " is added to default items store");
	
				return this.getItems();
			}
		}, {
			key: "clear",
			value: function clear() {
				this._items.length = 0;
	
				return this._items;
			}
		}, {
			key: "getItems",
			value: function getItems() {
				return this._items;
			}
		}]);

		return ItemsStore;
	}(_IItemsStore3.default);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IItemsStore = function () {
		function IItemsStore() {
			_classCallCheck(this, IItemsStore);
		}
	
		_createClass(IItemsStore, [{
			key: "addItem",
			value: function addItem(item) {}
		}, {
			key: "getItems",
			value: function getItems() {}
		}, {
			key: "clear",
			value: function clear() {}
		}]);
	
		return IItemsStore;
	}();
	
	exports.default = IItemsStore;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RucksackAdapter = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rucksack = __webpack_require__(4);
	
	var _password = __webpack_require__(5);
	
	var _IItemsStore2 = __webpack_require__(2);
	
	var _IItemsStore3 = _interopRequireDefault(_IItemsStore2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RucksackAdapter = exports.RucksackAdapter = function (_IItemsStore) {
		_inherits(RucksackAdapter, _IItemsStore);
	
		function RucksackAdapter() {
			_classCallCheck(this, RucksackAdapter);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RucksackAdapter).call(this));
	
			_this._pswd = new _password.Password("23e-ur-31-p");
			_this._rucksack = null;
			return _this;
		}
	
		_createClass(RucksackAdapter, [{
			key: "initRucksack",
			value: function initRucksack() {
				if (this._rucksack === null) {
					this._rucksack = new _rucksack.Rucksack(this._pswd.password);
				}
				return this._rucksack;
			}
		}, {
			key: "addItem",
			value: function addItem(item) {
				return this.initRucksack().addToInventory(item, this._pswd.password);
			}
		}, {
			key: "getItems",
			value: function getItems() {
				return this._rucksack.inventory;
			}
		}, {
			key: "clean",
			value: function clean() {
				return this._rucksack.removeAllItemsFromInventory();
			}
		}]);

		return RucksackAdapter;
	}(_IItemsStore3.default);

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rucksack = exports.Rucksack = function () {
		function Rucksack(password) {
			_classCallCheck(this, Rucksack);
	
			this._inventory = [];
			this._size = 30;
			this._password = password;
		}
	
		_createClass(Rucksack, [{
			key: "hasEmptyCell",
			value: function hasEmptyCell() {
				var result = false;
				if (this._inventory.length < this._size - 1) {
					result = true;
				}
				return result;
			}
		}, {
			key: "addToInventory",
			value: function addToInventory(item, password) {
				if (this.hasEmptyCell() === true && password === this._password) {
					this._inventory.push(item);
					console.log(item + " is added to security rucksack");
				}
				return this._inventory;
			}
		}, {
			key: "removeAllItemsFromInventory",
			value: function removeAllItemsFromInventory() {
				this._inventory = [];
			}
		}, {
			key: "inventory",
			get: function get() {
				return this._inventory;
			}
		}]);

		return Rucksack;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Password = exports.Password = function () {
		function Password(pswd) {
			_classCallCheck(this, Password);
	
			this._password = pswd;
		}
	
		_createClass(Password, [{
			key: "password",
			get: function get() {
				return this._password;
			}
		}]);

		return Password;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Hero = exports.Hero = function () {
		function Hero(itemsStore) {
			_classCallCheck(this, Hero);
	
			this._itemsStore = itemsStore;
			/* some other implementation */
		}
	
		_createClass(Hero, [{
			key: "items",
			get: function get() {
				return this._itemsStore;
			}
		}]);

		return Hero;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=adapter-min.js.map