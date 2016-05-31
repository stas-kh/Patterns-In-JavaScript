"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DigitGenerator = function () {
	function DigitGenerator() {
		_classCallCheck(this, DigitGenerator);
	}

	_createClass(DigitGenerator, null, [{
		key: "generate",
		value: function generate(from, to) {
			return Math.floor(Math.random() * (to - from + 1)) + from;
		}
	}]);

	return DigitGenerator;
}();

var IDigitHandler = function () {
	function IDigitHandler() {
		_classCallCheck(this, IDigitHandler);
	}

	_createClass(IDigitHandler, [{
		key: "handle",
		value: function handle() {}
	}]);

	return IDigitHandler;
}();

var DigitHandler = function () {
	function DigitHandler() {
		var container = arguments.length <= 0 || arguments[0] === undefined ? "body" : arguments[0];

		_classCallCheck(this, DigitHandler);

		this._successor = null;
		this._container = container;

		this._SEPARATOR = ", ";
	}

	_createClass(DigitHandler, [{
		key: "setSuccessor",
		value: function setSuccessor(func) {
			this._successor = func;

			return this;
		}
	}, {
		key: "addToView",
		value: function addToView(digit) {
			var node = document.querySelector(this._container);
			if (node.innerText === "") {
				node.innerText += digit;
			} else {
				node.innerText += this._SEPARATOR + digit;
			}
			return node;
		}
	}, {
		key: "handle",
		value: function handle(digit) {
			if (this._successor !== null) {
				this._successor.handle.call(this._successor, digit);
			}
		}
	}]);

	return DigitHandler;
}();

var NegativeDigitHandler = function (_DigitHandler) {
	_inherits(NegativeDigitHandler, _DigitHandler);

	function NegativeDigitHandler(contaner) {
		_classCallCheck(this, NegativeDigitHandler);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NegativeDigitHandler).call(this, contaner));

		_this._DIGIT_REGEX = /^-?[0-9]\d*(\.\d+)?$/;
		return _this;
	}

	_createClass(NegativeDigitHandler, [{
		key: "handle",
		value: function handle(digit) {
			if (this._DIGIT_REGEX.test(digit)) {
				if (digit < 0) {
					this.addToView(digit);
				} else {
					_get(Object.getPrototypeOf(NegativeDigitHandler.prototype), "handle", this).call(this, digit);
				}
			} else {
				console.log("Something is going wrong", digit);
			}
		}
	}]);

	return NegativeDigitHandler;
}(DigitHandler);

var PositiveDigitHandler = function (_DigitHandler2) {
	_inherits(PositiveDigitHandler, _DigitHandler2);

	function PositiveDigitHandler(contaner) {
		_classCallCheck(this, PositiveDigitHandler);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PositiveDigitHandler).call(this, contaner));
	}

	_createClass(PositiveDigitHandler, [{
		key: "handle",
		value: function handle(digit) {
			if (digit > 0) {
				this.addToView(digit);
			} else {
				_get(Object.getPrototypeOf(PositiveDigitHandler.prototype), "handle", this).call(this, digit);
			}
		}
	}]);

	return PositiveDigitHandler;
}(DigitHandler);

var ZeroDigitHandler = function (_DigitHandler3) {
	_inherits(ZeroDigitHandler, _DigitHandler3);

	function ZeroDigitHandler(contaner) {
		_classCallCheck(this, ZeroDigitHandler);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ZeroDigitHandler).call(this, contaner));
	}

	_createClass(ZeroDigitHandler, [{
		key: "addToView",
		value: function addToView(digit) {
			var node = document.querySelector(this._container);
			node.innerText = parseInt(node.innerText) + 1;
			return node;
		}
	}, {
		key: "handle",
		value: function handle(digit) {
			if (digit === 0) {
				this.addToView(digit);
			} else {
				_get(Object.getPrototypeOf(ZeroDigitHandler.prototype), "handle", this).call(this, digit);
			}
		}
	}]);

	return ZeroDigitHandler;
}(DigitHandler);

var h = new DigitHandler(),
    h1 = new NegativeDigitHandler(".negative-digits"),
    h2 = new PositiveDigitHandler(".positive-digits"),
    h3 = new ZeroDigitHandler(".zero-digit");

h.setSuccessor(h1.setSuccessor(h2.setSuccessor(h3.setSuccessor({
	handle: function handle() {
		alert("Something is going wrong");
	} }))));

// TEST
var randomNumber = 0;
var upperInterval = 10;
var lowerInterval = -10;

var nextDigitContainer = ".next-digit";
var lowerLimitContainer = ".lower-limit";
var upperLimitContainer = ".upper-limit";
var timeToRefresh = 1000;

setInterval(function () {
	lowerInterval = parseInt(document.querySelector(lowerLimitContainer).value);
	upperInterval = parseInt(document.querySelector(upperLimitContainer).value);

	randomNumber = DigitGenerator.generate(lowerInterval, upperInterval);

	h.handle(randomNumber);

	document.querySelector(nextDigitContainer).innerText = randomNumber;
}, timeToRefresh);

//# sourceMappingURL=main-compiled.js.map