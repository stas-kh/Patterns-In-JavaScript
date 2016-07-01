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
	
	var _variableExpression = __webpack_require__(1);
	
	var _loggerExpression = __webpack_require__(3);
	
	var _excessExpression = __webpack_require__(4);
	
	var _context = __webpack_require__(5);
	
	window.addEventListener("load", function () {
		var varExp = new _variableExpression.VariableExpression(["int", "double", "string"]),
		    loggerExp = new _loggerExpression.LoggerExpression("Console.WriteLine"),
		    excessExp = new _excessExpression.ExcessExpression(["public ", "void "]);
	
		document.querySelector(".transpile").addEventListener("click", function () {
			var source = document.querySelector(".source").value,
			    context = new _context.Context(source),
			    expressions = [varExp, loggerExp, excessExp];
	
			expressions.forEach(function (expr) {
				expr.interpret(context);
			});
	
			loadScript("js-output", context.output);
		});
	
		function loadScript(id, scriptCode) {
			var scriptEl = document.querySelector("#" + id),
			    code = document.createTextNode(scriptCode);
			if (scriptEl !== null && scriptEl !== undefined) {
				scriptEl.parentNode.removeChild(scriptEl);
			}
			scriptEl = document.createElement("script");
			scriptEl.type = "text/javascript";
			scriptEl.appendChild(code);
			scriptEl.id = id;
			document.querySelector("head").appendChild(scriptEl);
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.VariableExpression = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _expression = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var VariableExpression = exports.VariableExpression = function (_Expression) {
		_inherits(VariableExpression, _Expression);
	
		function VariableExpression(varExprs) {
			_classCallCheck(this, VariableExpression);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VariableExpression).call(this));
	
			_this._variableExpressions = varExprs;
			_this.REPLACER = "var";
			return _this;
		}
	
		_createClass(VariableExpression, [{
			key: "interpret",
			value: function interpret(context) {
				var _this2 = this;
	
				var regEx = void 0,
				    result = void 0;
				_get(Object.getPrototypeOf(VariableExpression.prototype), "interpret", this).call(this, context);
				this._variableExpressions.forEach(function (expr) {
					regEx = new RegExp(expr, _this2._exprFlag);
					context.output = context.output.replace(regEx, _this2.REPLACER);
				});
			}
		}]);

		return VariableExpression;
	}(_expression.Expression);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Expression = exports.Expression = function () {
		function Expression() {
			_classCallCheck(this, Expression);
	
			this._exprFlag = "g";
		}
	
		_createClass(Expression, [{
			key: "interpret",
			value: function interpret(context) {
				if (context.output === null) {
					context.output = context.input;
				}
			}
		}]);

		return Expression;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LoggerExpression = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _expression = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoggerExpression = exports.LoggerExpression = function (_Expression) {
		_inherits(LoggerExpression, _Expression);
	
		function LoggerExpression(printExpr) {
			_classCallCheck(this, LoggerExpression);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoggerExpression).call(this));
	
			_this._printFunction = printExpr;
			_this.REPLACER = "console.log";
			return _this;
		}
	
		_createClass(LoggerExpression, [{
			key: "interpret",
			value: function interpret(context) {
				var regEx = new RegExp(this._printFunction, this._exprFlag);
				_get(Object.getPrototypeOf(LoggerExpression.prototype), "interpret", this).call(this, context);
				context.output = context.output.replace(regEx, this.REPLACER);
			}
		}]);

		return LoggerExpression;
	}(_expression.Expression);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ExcessExpression = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _expression = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ExcessExpression = exports.ExcessExpression = function (_Expression) {
		_inherits(ExcessExpression, _Expression);
	
		function ExcessExpression(excessExprs) {
			_classCallCheck(this, ExcessExpression);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExcessExpression).call(this));
	
			_this._excessExpressions = excessExprs;
			_this.REPLACER = "";
			return _this;
		}
	
		_createClass(ExcessExpression, [{
			key: "interpret",
			value: function interpret(context) {
				var _this2 = this;
	
				var regEx = void 0,
				    result = void 0;
				_get(Object.getPrototypeOf(ExcessExpression.prototype), "interpret", this).call(this, context);
				this._excessExpressions.forEach(function (expr) {
					regEx = new RegExp(expr, _this2._exprFlag);
					context.output = context.output.replace(regEx, _this2.REPLACER);
				});
			}
		}]);

		return ExcessExpression;
	}(_expression.Expression);

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Context = exports.Context = function () {
		function Context(input) {
			_classCallCheck(this, Context);
	
			this._input = input;
			this._output = null;
		}
	
		_createClass(Context, [{
			key: "input",
			set: function set(input) {
				this._input = input;
			},
			get: function get() {
				return this._input;
			}
		}, {
			key: "output",
			set: function set(output) {
				this._output = output;
			},
			get: function get() {
				return this._output;
			}
		}]);

		return Context;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=interpreter-min.js.map