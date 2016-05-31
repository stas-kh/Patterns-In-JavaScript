import { Luna } from "../heroes/luna";
import { HeroFactory } from "./heroFactory";

class LunaFactory extends HeroFactory {
	factoryMethod (name) {
		return new Luna(name);
	}
}

export { LunaFactory };