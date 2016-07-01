import {Hero} from "./hero";
import {HERO_TYPES} from "./hero-types";

export class Axe extends Hero {
	constructor() {
		super(20, 5, 10, HERO_TYPES.axe.ultimate.time, HERO_TYPES.axe.ultimate.id, HERO_TYPES.axe.name);
	}

	preUltimate() {
		super.preUltimate();
		this.heroProperties.health /= 2;
	}

	postUltimate() {
		super.postUltimate();
		this.heroProperties.health += this.heroProperties * 0.3;
	}
}