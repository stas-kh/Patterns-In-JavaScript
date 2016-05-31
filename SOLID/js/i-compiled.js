'use strict';

/* bad example */
/* 
 class IWorldGenerator {
 drawMap () {};
 drawCatapult () {};
 drawBirds () {};
 drawBlocks () {};
 }
 */

/* good example */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IWorldGenerator = function () {
	function IWorldGenerator() {
		_classCallCheck(this, IWorldGenerator);
	}

	_createClass(IWorldGenerator, [{
		key: 'init',
		value: function init() {}
	}]);

	return IWorldGenerator;
}();

var IMap = function () {
	function IMap() {
		_classCallCheck(this, IMap);
	}

	_createClass(IMap, [{
		key: 'render',
		value: function render() {}
	}]);

	return IMap;
}();

var IBird = function () {
	function IBird() {
		_classCallCheck(this, IBird);
	}

	_createClass(IBird, [{
		key: 'init',
		value: function init() {}
	}, {
		key: 'draw',
		value: function draw() {}
	}]);

	return IBird;
}();

var IBlock = function () {
	function IBlock() {
		_classCallCheck(this, IBlock);
	}

	_createClass(IBlock, [{
		key: 'draw',
		value: function draw() {}
	}]);

	return IBlock;
}();

var ICatapult = function () {
	function ICatapult() {
		_classCallCheck(this, ICatapult);
	}

	_createClass(ICatapult, [{
		key: 'draw',
		value: function draw() {}
	}]);

	return ICatapult;
}();

var AngryBirdsWorld = function (_IWorldGenerator) {
	_inherits(AngryBirdsWorld, _IWorldGenerator);

	function AngryBirdsWorld(block, bird, map) {
		_classCallCheck(this, AngryBirdsWorld);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AngryBirdsWorld).call(this));

		_this.block = block;
		_this.bird = bird;
		_this.map = map;
		return _this;
	}

	_createClass(AngryBirdsWorld, [{
		key: 'init',
		value: function init() {
			this.block.draw();
			this.bird.init().draw();
			this.map.render();
		}
	}]);

	return AngryBirdsWorld;
}(IWorldGenerator);

var KazakyWorld = function (_IWorldGenerator2) {
	_inherits(KazakyWorld, _IWorldGenerator2);

	function KazakyWorld(map, catapult) {
		_classCallCheck(this, KazakyWorld);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(KazakyWorld).call(this));

		_this2.map = map;
		_this2.catapult = catapult;
		return _this2;
	}

	_createClass(KazakyWorld, [{
		key: 'init',
		value: function init() {
			this.map.render();
			this.catapult.draw();
		}
	}]);

	return KazakyWorld;
}(IWorldGenerator);

//# sourceMappingURL=i-compiled.js.map