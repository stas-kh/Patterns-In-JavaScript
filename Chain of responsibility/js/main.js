class DigitGenerator {
	static generate (from, to) {
		return Math.floor(Math.random() * (to - from + 1)) + from;
	}
}

class IDigitHandler {
	handle () {};
}

class DigitHandler {
	constructor (container = "body") {
		this._successor = null;
		this._container = container;

		this._SEPARATOR = ", ";
	}

	setSuccessor (func) {
		this._successor = func;

		return this;
	}

	addToView (digit) {
		var node = document.querySelector(this._container);
		if(node.innerText === "") {
			node.innerText += digit;
		} else {
			node.innerText += (this._SEPARATOR + digit);
		}
		return node;
	}

	handle (digit) {
		if(this._successor !== null) {
			this._successor.handle.call(this._successor, digit);
		}
	}
}

class NegativeDigitHandler extends DigitHandler {
	constructor (contaner) {
		super(contaner);

		this._DIGIT_REGEX = /^-?[0-9]\d*(\.\d+)?$/;
	}

	handle (digit) {
		if(this._DIGIT_REGEX.test(digit)) {
			if(digit < 0) {
				this.addToView(digit);
			} else {
				super.handle(digit);
			}
		} else {
			console.log("Something is going wrong", digit)
		}
	}
}

class PositiveDigitHandler extends DigitHandler {
	constructor (contaner) {
		super(contaner);
	}

	handle (digit) {
		if(digit > 0) {
			this.addToView(digit);
		} else {
			super.handle(digit);
		}
	}
}

class ZeroDigitHandler extends DigitHandler {
	constructor (contaner) {
		super(contaner);
	}

	addToView (digit) {
		var node = document.querySelector(this._container);
		node.innerText = parseInt(node.innerText) + 1;
		return node;
	}

	handle (digit) {
		if(digit === 0) {
			this.addToView(digit);
		} else {
			super.handle(digit);
		}
	}
}


var h = new DigitHandler(),
	h1 = new NegativeDigitHandler(".negative-digits"),
	h2 = new PositiveDigitHandler(".positive-digits"),
	h3 = new ZeroDigitHandler(".zero-digit");

h.setSuccessor(
	h1.setSuccessor(
		h2.setSuccessor(
			h3.setSuccessor({
				handle: function () {
					alert("Something is going wrong");
				}}))));




// TEST
let randomNumber = 0;
let upperInterval = 10;
let lowerInterval = -10;

const nextDigitContainer = ".next-digit";
const lowerLimitContainer = ".lower-limit";
const upperLimitContainer = ".upper-limit";
const timeToRefresh = 1000;

setInterval(function () {
	lowerInterval = parseInt(document.querySelector(lowerLimitContainer).value);
	upperInterval = parseInt(document.querySelector(upperLimitContainer).value);

	randomNumber = DigitGenerator.generate(lowerInterval, upperInterval);

	h.handle(randomNumber);

	document.querySelector(nextDigitContainer).innerText = randomNumber;
}, timeToRefresh);