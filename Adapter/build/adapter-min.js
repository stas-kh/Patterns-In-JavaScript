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
	
	var _rucksackAdapter = __webpack_require__(2);
	
	var _hero = __webpack_require__(5);
	
	window.addEventListener("load", function () {
		/* HERO WITH ADAPTER */
		var itemStore = new _itemsStore.ItemsStore();
		itemStore.adapter = new _rucksackAdapter.RucksackAdapter();
	
		var hero = new _hero.Hero(itemStore);
	
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
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ItemsStore = exports.ItemsStore = function () {
		function ItemsStore() {
			_classCallCheck(this, ItemsStore);
	
			this._items = [];
			this._itemsAdapter = null;
		}
	
		_createClass(ItemsStore, [{
			key: "addItem",
			value: function addItem(item) {
				var result = null;
				if (this._itemsAdapter === null) {
					this._items.push(item);
					console.log(item + " is added to default rucksack");
					result = this._items;
				} else {
					result = this._itemsAdapter.addItem(item);
				}
				return result;
			}
		}, {
			key: "getItems",
			value: function getItems() {
				var result = this._items;
				if (this._itemsAdapter !== null) {
					result = this._itemsAdapter.rucksack;
				}
				return result;
			}
		}, {
			key: "adapter",
			set: function set(adapter) {
				this._itemsAdapter = adapter;
			}
		}]);

		return ItemsStore;
	}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.RucksackAdapter = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rucksack = __webpack_require__(3);
	
	var _password = __webpack_require__(4);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RucksackAdapter = exports.RucksackAdapter = function () {
		function RucksackAdapter() {
			_classCallCheck(this, RucksackAdapter);
	
			this._pswd = new _password.Password("23e-ur-31-p");
			this._rucksack = null;
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
			key: "rucksack",
			get: function get() {
				return this._rucksack.inventory;
			}
		}]);

		return RucksackAdapter;
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
			key: "inventory",
			get: function get() {
				return this._inventory;
			}
		}]);

		return Rucksack;
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
/* 5 */
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