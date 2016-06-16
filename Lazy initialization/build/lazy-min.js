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
	
	/*
	 * For example we have a landing page with ability to leave user's feedback
	 * but we aren't sure that every user does it
	 * we use native JS to handle all events in our application.
	 * For example, we need to use AJAX to work with our backend.
	 * And we load JQuery ajax methods only in case when user click send feedback
	 * ---------- Lazy initialization ----------
	 */
	
	window.addEventListener("load", function () {
		document.querySelector(".send-feedback").addEventListener("click", function () {
			var feedbackNode = document.querySelector(".feedback"),
			    feedbackText = feedbackNode.value,
			    node = document.createElement("li"),
			    textNode = document.createTextNode(feedbackText),
			    parent = document.querySelector(".previous-feedbacks");
	
			_JQLoader.JQLoader.getLib(function (jQ) {
				var root = "./test.php",
				    data = {
					url: root,
					method: "POST",
					data: feedbackText,
					dataType: "text",
					success: function success(data) {
						alert(data);
					}
				};
	
				jQ.ajax(data);
			});
	
			node.appendChild(textNode);
			parent.appendChild(node);
			feedbackNode.value = "";
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
					new _scriptLoader.ScriptLoader().loadScript(LIBRARY_URL, function () {
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
	
			this._SCRIPT_TYPE = "text/javascript";
			this._LOAD_EVENT_NAME = "load";
			this._HEAD_TAG = "head";
			this._SCRIPT_ELEMENT = "script";
		}
	
		_createClass(ScriptLoader, [{
			key: "loadScript",
			value: function loadScript(url, callback) {
				var _this = this;
	
				var script = document.createElement(this._SCRIPT_ELEMENT);
				script.type = this._SCRIPT_TYPE;
				script.addEventListener(this._LOAD_EVENT_NAME, function () {
					script.addEventListener(_this._LOAD_EVENT_NAME, null);
					callback.call();
				});
				script.src = url;
				document.querySelectorAll(this._HEAD_TAG)[0].appendChild(script);
			}
		}]);
	
		return ScriptLoader;
	}();
	
	exports.ScriptLoader = ScriptLoader;

/***/ }
/******/ ]);
//# sourceMappingURL=lazy-min.js.map