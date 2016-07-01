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
	
	var _JQLoader = __webpack_require__(1);
	
	window.addEventListener("load", function () {
		document.querySelector(".send-feedback").addEventListener("click", function () {
			_JQLoader.JQLoader.getLib(function (jQ) {
				var text = jQ(".feedback").val();
				jQ("body").append("<div>" + text + "</div>");
				jQ(".feedback").val("");
			});
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.JQLoader = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _scriptLoader = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var JQLoader = function () {
		function JQLoader() {
			_classCallCheck(this, JQLoader);
		}
	
		_createClass(JQLoader, null, [{
			key: "getLib",
			value: function getLib(callback) {
				var LIBRARY_URL = "https://code.jquery.com/jquery-3.0.0.min.js";
	
				if (window.$ === null || window.$ === undefined) {
					_scriptLoader.ScriptLoader.loadScript(LIBRARY_URL, function () {
						callback.call(window, $);
					});
				} else {
					callback.call(window, $);
				}
			}
		}]);
	
		return JQLoader;
	}();
	
	exports.JQLoader = JQLoader;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScriptLoader = function () {
		function ScriptLoader() {
			_classCallCheck(this, ScriptLoader);
		}
	
		_createClass(ScriptLoader, null, [{
			key: "loadScript",
			value: function loadScript(url, callback) {
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.addEventListener("load", function () {
					script.addEventListener("load", null);
					callback.call();
				});
				script.src = url;
				document.querySelectorAll("head")[0].appendChild(script);
			}
		}]);
	
		return ScriptLoader;
	}();
	
	exports.ScriptLoader = ScriptLoader;

/***/ }
/******/ ]);
//# sourceMappingURL=lazy-min.js.map