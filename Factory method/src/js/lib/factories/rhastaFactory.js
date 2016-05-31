import { Rhasta } from "../heroes/rhasta";
import { HeroFactory } from "./heroFactory";

class RhastaFactory extends HeroFactory {
	factoryMethod (name) {
		return new Rhasta(name);
	}
}

export { RhastaFactory };