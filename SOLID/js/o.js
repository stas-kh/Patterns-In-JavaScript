'use strict';

class Area {
	constructor(width = 100, height = 100) {
		this.width = width;
		this.height = height;

		this.resetHeroes();
	}

	increaseHeroesCount() {
		this.heroesInGame++;
	}

	resetHeroes() {
		this.heroesInGame = 0;
	}
}

class HeroesGenerator {
	constructor(defaultArea = new Area()) {
		this.area = defaultArea;
		this.heroesOnMap = [];
	}

	addHero(hero) {
		hero.initialize();

		this.heroesOnMap.push(hero);
		area.increaseHeroesCount();
	}
}

class IHero {
	initialize() {
	}
}

class Lucantrope extends IHero {
	constructor() {
		super();

		this.strength = 20;
		this.intelligence = 5;
		this.agility = 10;

		this.wings = {
			size: 0,
			color: "#fff"
		};
	}

	initialize() {
		this.generateRendomWingsSize();
		this.generateRandomWingsColor();
	}

	generateRendomWingsSize() { /* */
	}

	generateRandomWingsColor() { /* */
	}
}

class DrowRanger extends IHero {
	constructor() {
		super();

		this.DEFAULT_ARROWS_COUNT = 30;

		this.availableArrowsCount = 0;

		this.strength = 5;
		this.intelligence = 20;
		this.agility = 15;

	}

	initialize() {
		this.buyArrows();
	}

	buyArrows(count = this.DEFAULT_ARROWS_COUNT) {
		this.availableArrowsCount += count;
	}
}

var area = new Area(550, 450),
	hg = new HeroesGenerator(area),
	drRanger = new DrowRanger(),
	luc = new Lucantrope();

hg.addHero(drRanger);
hg.addHero(luc);
console.log(hg);