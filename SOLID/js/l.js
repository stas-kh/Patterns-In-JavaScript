'use strict';

class DucksCollection {
	constructor() {
		this.ducks = [];
	}

	addDuck(duck = new Duck()) {
		this.ducks.push(duck);
	}

	removeDuck(index) {
		this.ducks.splice(index, 1);
	}

	resetDucks() {
		this.ducks = [];
	}

	getQuackingDucksCount() {
		var count = 0;

		this.ducks.forEach(function (duck) {
			if (duck.isQuacking) count++;
		});

		return count;
	}
}

class Duck {
	constructor() {
		this.isQuacking = false;
	}

	changeState() {
		this.isQuacking = !this.isQuacking;
	}
}

class SimpleDuck extends Duck {
	constructor() {
		super();
	}

	giveFood() {
		/* do something */
		this.changeState();
	}

	dance() {
		/* do something */
	}
}

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