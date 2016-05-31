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
	
	var _JsonLoaderModern = __webpack_require__(1);
	
	var _JsonLoaderJQuery = __webpack_require__(3);
	
	var _JsonLoaderXMLHttp = __webpack_require__(4);
	
	var _JsonPrinter = __webpack_require__(5);
	
	var jsonFetch = new _JsonLoaderModern.JsonLoaderModern(),
	    jsonJQuery = new _JsonLoaderJQuery.JsonLoaderJQuery(),
	    jsonXMLHttp = new _JsonLoaderXMLHttp.JsonLoaderXMLHttp(),
	    printer = new _JsonPrinter.JsonPrinter("test", document.body);
	
	printer.loader = jsonFetch;
	printer.container = ".fetch";
	printer.printJson("./src/assets/phones.json");
	
	printer.loader = jsonJQuery;
	printer.container = ".ajax";
	printer.printJson("./src/assets/phones.json");
	
	printer.loader = jsonXMLHttp;
	printer.container = ".xml-http";
	printer.printJson("./src/assets/phones.json");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.JsonLoaderModern = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IJsonLoader2 = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var JsonLoaderModern = exports.JsonLoaderModern = function (_IJsonLoader) {
		_inherits(JsonLoaderModern, _IJsonLoader);
	
		function JsonLoaderModern() {
			_classCallCheck(this, JsonLoaderModern);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(JsonLoaderModern).apply(this, arguments));
		}
	
		_createClass(JsonLoaderModern, [{
			key: "load",
			value: function load(filename, callback) {
				console.time("Modern loader");
	
				window.fetch(filename).then(function (response) {
					if (response.status === 200) {
						response.json().then(function (data) {
							if (callback !== null && callback !== undefined && typeof callback === "function") {
								callback(data);
	
								console.timeEnd("Modern loader");
							}
						});
					}
				});
			}
		}]);

		return JsonLoaderModern;
	}(_IJsonLoader2.IJsonLoader);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IJsonLoader = exports.IJsonLoader = function () {
		function IJsonLoader() {
			_classCallCheck(this, IJsonLoader);
		}
	
		_createClass(IJsonLoader, [{
			key: "load",
			value: function load(filename, callback) {}
		}]);

		return IJsonLoader;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.JsonLoaderJQuery = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IJsonLoader2 = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var JsonLoaderJQuery = exports.JsonLoaderJQuery = function (_IJsonLoader) {
		_inherits(JsonLoaderJQuery, _IJsonLoader);
	
		function JsonLoaderJQuery() {
			_classCallCheck(this, JsonLoaderJQuery);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(JsonLoaderJQuery).apply(this, arguments));
		}
	
		_createClass(JsonLoaderJQuery, [{
			key: "load",
			value: function load(filename, callback) {
				console.time("JQuery loader");
	
				$.getJSON(filename, function (response) {
					if (callback !== null && callback !== undefined && typeof callback === "function") {
						callback(response);
	
						console.timeEnd("JQuery loader");
					}
				});
			}
		}]);

		return JsonLoaderJQuery;
	}(_IJsonLoader2.IJsonLoader);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.JsonLoaderXMLHttp = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IJsonLoader2 = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var JsonLoaderXMLHttp = exports.JsonLoaderXMLHttp = function (_IJsonLoader) {
		_inherits(JsonLoaderXMLHttp, _IJsonLoader);
	
		function JsonLoaderXMLHttp() {
			_classCallCheck(this, JsonLoaderXMLHttp);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(JsonLoaderXMLHttp).apply(this, arguments));
		}
	
		_createClass(JsonLoaderXMLHttp, [{
			key: "load",
			value: function load(filename, callback) {
				console.time("XMLHttp loader");
	
				var xhr = new XMLHttpRequest();
				xhr.open("GET", filename);
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4 && xhr.status === 200) {
						if (callback !== null && callback !== undefined && typeof callback === "function") {
							callback(JSON.parse(xhr.responseText));
	
							console.timeEnd("XMLHttp loader");
						}
					}
				};
	
				xhr.send(null);
			}
		}]);

		return JsonLoaderXMLHttp;
	}(_IJsonLoader2.IJsonLoader);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.JsonPrinter = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _IJsonLoader = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var JsonPrinter = exports.JsonPrinter = function () {
		function JsonPrinter(id) {
			_classCallCheck(this, JsonPrinter);
	
			this.printerId = id;
	
			this.nodeContainer = null;
			this.jsonLoader = null;
	
			this.parsedJsonFiles = 0;
		}
	
		_createClass(JsonPrinter, [{
			key: "printJson",
			value: function printJson(pathToFile) {
				var _this = this;
	
				var textToPrint = "",
				    textNode = {},
				    parent = document.querySelector(this.container);
	
				this.jsonLoader.load(pathToFile, function (response) {
					textToPrint = JSON.stringify(response, {}, 4), textNode = document.createTextNode(textToPrint);
	
					parent.appendChild(textNode);
	
					_this.parsedJsonFiles++;
				});
			}
		}, {
			key: "ID",
			get: function get() {
				return this.printerId;
			}
		}, {
			key: "loader",
			set: function set(jsonLoader) {
				if (jsonLoader instanceof _IJsonLoader.IJsonLoader === true) {
					this.jsonLoader = jsonLoader;
				}
			},
			get: function get() {
				return this.jsonLoader;
			}
		}, {
			key: "container",
			set: function set(node) {
				this.nodeContainer = node;
			},
			get: function get() {
				return this.nodeContainer;
			}
		}]);

		return JsonPrinter;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=strategy-min.js.map