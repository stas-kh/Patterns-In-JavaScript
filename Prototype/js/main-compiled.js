'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IHero = function () {
	function IHero() {
		_classCallCheck(this, IHero);
	}

	_createClass(IHero, [{
		key: "clone",
		value: function clone() {}
	}]);

	return IHero;
}();

var Lucantrope = function (_IHero) {
	_inherits(Lucantrope, _IHero);

	function Lucantrope() {
		var playerName = arguments.length <= 0 || arguments[0] === undefined ? "Lucan" : arguments[0];

		_classCallCheck(this, Lucantrope);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Lucantrope).call(this));

		_this.STRENGTH = "strength";
		_this.AGL = "agility";
		_this.INTL = "intelligence";

		_this.level = 1;

		_this.heroProperties = {
			strength: 20,
			agility: 5,
			intelligence: 10
		};

		_this.setName(playerName);
		return _this;
	}

	_createClass(Lucantrope, [{
		key: "upgrade",
		value: function upgrade() {
			this.addLevel();

			if (this.level % 2 === 0) {
				this.addAbility(this.STRENGTH, 5);
				this.addAbility(this.AGL, 1);
				this.addAbility(this.INTL, 3);
			} else {
				this.addAbility(this.STRENGTH, 3);
			}
		}
	}, {
		key: "setName",
		value: function setName(newName) {
			this.name = newName;
		}
	}, {
		key: "addLevel",
		value: function addLevel() {
			var val = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

			this.level += val;
		}
	}, {
		key: "addAbility",
		value: function addAbility(ability) {
			var val = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

			this.heroProperties[ability] += val;
			return ability;
		}
	}, {
		key: "clone",
		value: function clone() {
			var clone = {},
			    currentProperty = null;
			for (var prop in this) {
				if (this.hasOwnProperty(prop)) {
					currentProperty = this[prop];
					if (currentProperty) {
						clone[prop] = this._createCopy(currentProperty);
					}
				}
			}
			clone.__proto__ = this.__proto__;
			return clone;
		}
	}, {
		key: "_createCopy",
		value: function _createCopy(obj) {
			var copy = obj;

			if (copy instanceof Array) {
				copy = obj.map(function (s) {
					return s;
				});
			} else if (obj instanceof Object && typeof obj !== "function") {
				copy = {};
				for (var attr in obj) {
					if (obj.hasOwnProperty(attr)) {
						copy[attr] = this._createCopy(obj[attr]);
					}
				}
			}
			return copy;
		}
	}]);

	return Lucantrope;
}(IHero);

var staskh = new Lucantrope("StasKh");
staskh.upgrade();
staskh.upgrade();
staskh.upgrade();
staskh.upgrade();
staskh.upgrade();

var alinkin = staskh.clone();
alinkin.setName("Alinkin");
alinkin.upgrade();
alinkin.upgrade();

var olepro = alinkin.clone();
olepro.setName("Oleksii");
olepro.upgrade();

console.log(staskh, alinkin, olepro);

// data output
document.querySelector("pre.first-obj").innerHTML += "<h1>Main object</h1>";
document.querySelector("pre.first-obj").innerHTML += JSON.stringify(staskh, {}, 4);
document.querySelector("pre.sec-obj").innerHTML += "<h1>Clone</h1>";
document.querySelector("pre.sec-obj").innerHTML += JSON.stringify(alinkin, {}, 4);
document.querySelector("pre.third-obj").innerHTML += "<h1>Clone by clone</h1>";
document.querySelector("pre.third-obj").innerHTML += JSON.stringify(olepro, {}, 4);

//# sourceMappingURL=main-compiled.js.map