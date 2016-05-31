"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IVisitor = function () {
	function IVisitor() {
		_classCallCheck(this, IVisitor);
	}

	_createClass(IVisitor, [{
		key: "visit",
		value: function visit(obj) {}
	}]);

	return IVisitor;
}();

;

var BonusBalanceVisitor = function (_IVisitor) {
	_inherits(BonusBalanceVisitor, _IVisitor);

	function BonusBalanceVisitor() {
		_classCallCheck(this, BonusBalanceVisitor);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(BonusBalanceVisitor).apply(this, arguments));
	}

	_createClass(BonusBalanceVisitor, [{
		key: "visit",
		value: function visit(hero) {
			var BONUS_POINTS = 50;
			var BONUS_INTERVAL_MS = 1000;
			var BONUS_TIME_MS = 10000;

			$(".bonus-time").toggleClass("active");
			$(".extra-points").text("(+" + hero.bonusPoints + ")");

			var bonusInterval = setInterval(function () {
				hero.addBonusPoints(BONUS_POINTS);
				$(".extra-points").text("(+" + hero.bonusPoints + ")");
			}, BONUS_INTERVAL_MS);

			setTimeout(function () {
				clearInterval(bonusInterval);
				$(".bonus-time").toggleClass("active");
			}, BONUS_TIME_MS);
		}
	}]);

	return BonusBalanceVisitor;
}(IVisitor);

;

var IVisitable = function () {
	function IVisitable() {
		_classCallCheck(this, IVisitable);
	}

	_createClass(IVisitable, [{
		key: "accept",
		value: function accept(visitor) {}
	}]);

	return IVisitable;
}();

;

var Hero = function (_IVisitable) {
	_inherits(Hero, _IVisitable);

	function Hero() {
		_classCallCheck(this, Hero);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Hero).call(this));

		_this2.points = 0;
		_this2.bonusPoints = 0;
		return _this2;
	}

	_createClass(Hero, [{
		key: "accept",
		value: function accept(visitor) {
			visitor.visit(this);
		}
	}, {
		key: "addPoints",
		value: function addPoints(points) {
			this.points += points;
		}
	}, {
		key: "addBonusPoints",
		value: function addBonusPoints(points) {
			this.bonusPoints += points;
		}
	}]);

	return Hero;
}(IVisitable);

;

var Slark = function (_Hero) {
	_inherits(Slark, _Hero);

	function Slark() {
		_classCallCheck(this, Slark);

		var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Slark).call(this));

		_this3.heroProperties = {
			strength: 20,
			agility: 5,
			intelligence: 10
		};
		return _this3;
	}

	return Slark;
}(Hero);

;

var init = function init() {
	var hero = new Slark(),
	    visitor = new BonusBalanceVisitor();

	var PONTS_PER_SEC = 30;

	setInterval(function () {
		hero.addPoints(PONTS_PER_SEC);

		$(".points").text(hero.points);
		console.log(hero);
	}, 1000);

	setTimeout(function () {
		hero.accept(visitor);
	}, 4000);
};

$("#page-type").change(function () {
	if (this.value === "example") {
		$(".code-example").hide();
		$(".game-example").show();
	} else {
		$(".code-example").show();
		$(".game-example").hide();
	}
});

$("#initialize").click(function () {
	init();
	$(this).hide();
});

//# sourceMappingURL=main-compiled.js.map