import {Hero} from "./hero";
import {HERO_TYPES} from "./hero-types";

export class Rhasta extends Hero {
	constructor() {
		super(5, 12, 40, HERO_TYPES.rhasta.ultimate.time, HERO_TYPES.rhasta.ultimate.id, HERO_TYPES.rhasta.name);
	}

	preUltimate() {
		super.preUltimate();
		this.heroProperties.intelligence++;
		this.heroProperties.agility++;
		this.heroProperties.strength++;
	}
}