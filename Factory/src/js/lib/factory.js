import { HERO_TYPES } from "./heroTypes";
import { Axe, Luna, Rhasta } from "./heroes/heroes";

class HeroesFactory {
	static createHero(type, name) {
		switch (type) {
			case HERO_TYPES.axe:
				return new Axe(name);
				break;
			case HERO_TYPES.rhasta:
				return new Rhasta(name);
				break;
			case HERO_TYPES.luna:
				return new Luna(name);
				break;
			default:
				throw new Error("This type of hero is wrong");
		}
	}
}

export { HeroesFactory };