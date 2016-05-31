'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DucksCollection = function () {
	function DucksCollection() {
		_classCallCheck(this, DucksCollection);

		this.ducks = [];
	}

	_createClass(DucksCollection, [{
		key: "addDuck",
		value: function addDuck() {
			var duck = arguments.length <= 0 || arguments[0] === undefined ? new Duck() : arguments[0];

			this.ducks.push(duck);
		}
	}, {
		key: "removeDuck",
		value: function removeDuck(index) {
			this.ducks.splice(index, 1);
		}
	}, {
		key: "resetDucks",
		value: function resetDucks() {
			this.ducks = [];
		}
	}, {
		key: "getQuackingDucksCount",
		value: function getQuackingDucksCount() {
			var count = 0;

			this.ducks.forEach(function (duck) {
				if (duck.isQuacking) count++;
			});

			return count;
		}
	}]);

	return DucksCollection;
}();

var Duck = function () {
	function Duck() {
		_classCallCheck(this, Duck);

		this.isQuacking = false;
	}

	_createClass(Duck, [{
		key: "changeState",
		value: function changeState() {
			this.isQuacking = !this.isQuacking;
		}
	}]);

	return Duck;
}();

var SimpleDuck = function (_Duck) {
	_inherits(SimpleDuck, _Duck);

	function SimpleDuck() {
		_classCallCheck(this, SimpleDuck);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleDuck).call(this));
	}

	_createClass(SimpleDuck, [{
		key: "giveFood",
		value: function giveFood() {
			/* do something */
			this.changeState();
		}
	}, {
		key: "dance",
		value: function dance() {
			/* do something */
		}
	}]);

	return SimpleDuck;
}(Duck);

var dc = new DucksCollection(),
    simpleDuck1 = new SimpleDuck(),
    simpleDuck2 = new SimpleDuck();

simpleDuck1.giveFood();
simpleDuck2.changeState();

dc.addDuck();
dc.addDuck(new SimpleDuck());
dc.addDuck(simpleDuck1);
dc.addDuck(simpleDuck2);
dc.addDuck();

console.log("Count of quacking ducks: [", dc.getQuackingDucksCount(), "]");

//# sourceMappingURL=l-compiled.js.map