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
class IWorldGenerator {
	init() {
	};
}

class IMap {
	render() {
	};
}
class IBird {
	init() {
	};

	draw() {
	};
}
class IBlock {
	draw() {
	};
}
class ICatapult {
	draw() {
	};
}

class AngryBirdsWorld extends IWorldGenerator {
	constructor(block, bird, map) {
		super();

		this.block = block;
		this.bird = bird;
		this.map = map;
	}

	init() {
		this.block.draw();
		this.bird.init().draw();
		this.map.render();
	}
}

class KazakyWorld extends IWorldGenerator {
	constructor(map, catapult) {
		super();

		this.map = map;
		this.catapult = catapult;
	}

	init() {
		this.map.render();
		this.catapult.draw();
	}
}