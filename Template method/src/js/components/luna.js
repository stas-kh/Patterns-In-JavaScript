import {Hero} from "./hero";
import {HERO_TYPES} from "./hero-types";

export class Luna extends Hero {
	constructor() {
		super(10, 35, 5, HERO_TYPES.luna.ultimate.time, HERO_TYPES.luna.ultimate.id, HERO_TYPES.luna.name);
		this.isBonusAuraActive = false;
	}

	preUltimate() {
		super.preUltimate();
		this.heroProperties.agility *= 2.75;
		this.isBonusAuraActive = true;
	}

	postUltimate() {
		super.postUltimate();
		this.heroProperties.agility /= 2.75;
		this.isBonusAuraActive = false;
	}
}