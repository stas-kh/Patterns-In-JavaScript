'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Area = function () {
	function Area() {
		var width = arguments.length <= 0 || arguments[0] === undefined ? 100 : arguments[0];
		var height = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

		_classCallCheck(this, Area);

		this.width = width;
		this.height = height;

		this.resetHeroes();
	}

	_createClass(Area, [{
		key: "increaseHeroesCount",
		value: function increaseHeroesCount() {
			this.heroesInGame++;
		}
	}, {
		key: "resetHeroes",
		value: function resetHeroes() {
			this.heroesInGame = 0;
		}
	}]);

	return Area;
}();

var HeroesGenerator = function () {
	function HeroesGenerator() {
		var defaultArea = arguments.length <= 0 || arguments[0] === undefined ? new Area() : arguments[0];

		_classCallCheck(this, HeroesGenerator);

		this.area = defaultArea;
		this.heroesOnMap = [];
	}

	_createClass(HeroesGenerator, [{
		key: "addHero",
		value: function addHero(hero) {
			hero.initialize();

			this.heroesOnMap.push(hero);
			area.increaseHeroesCount();
		}
	}]);

	return HeroesGenerator;
}();

var IHero = function () {
	function IHero() {
		_classCallCheck(this, IHero);
	}

	_createClass(IHero, [{
		key: "initialize",
		value: function initialize() {}
	}]);

	return IHero;
}();

var Lucantrope = function (_IHero) {
	_inherits(Lucantrope, _IHero);

	function Lucantrope() {
		_classCallCheck(this, Lucantrope);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Lucantrope).call(this));

		_this.strength = 20;
		_this.intelligence = 5;
		_this.agility = 10;

		_this.wings = {
			size: 0,
			color: "#fff"
		};
		return _this;
	}

	_createClass(Lucantrope, [{
		key: "initialize",
		value: function initialize() {
			this.generateRendomWingsSize();
			this.generateRandomWingsColor();
		}
	}, {
		key: "generateRendomWingsSize",
		value: function generateRendomWingsSize() {/* */
		}
	}, {
		key: "generateRandomWingsColor",
		value: function generateRandomWingsColor() {/* */
		}
	}]);

	return Lucantrope;
}(IHero);

var DrowRanger = function (_IHero2) {
	_inherits(DrowRanger, _IHero2);

	function DrowRanger() {
		_classCallCheck(this, DrowRanger);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DrowRanger).call(this));

		_this2.DEFAULT_ARROWS_COUNT = 30;

		_this2.availableArrowsCount = 0;

		_this2.strength = 5;
		_this2.intelligence = 20;
		_this2.agility = 15;

		return _this2;
	}

	_createClass(DrowRanger, [{
		key: "initialize",
		value: function initialize() {
			this.buyArrows();
		}
	}, {
		key: "buyArrows",
		value: function buyArrows() {
			var count = arguments.length <= 0 || arguments[0] === undefined ? this.DEFAULT_ARROWS_COUNT : arguments[0];

			this.availableArrowsCount += count;
		}
	}]);

	return DrowRanger;
}(IHero);

var area = new Area(550, 450),
    hg = new HeroesGenerator(area),
    drRanger = new DrowRanger(),
    luc = new Lucantrope();

hg.addHero(drRanger);
hg.addHero(luc);
console.log(hg);

//# sourceMappingURL=o-compiled.js.map