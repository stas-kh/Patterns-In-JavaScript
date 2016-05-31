import { Axe } from "../heroes/axe";
import { HeroFactory } from "./heroFactory";

class AxeFactory extends HeroFactory {
	factoryMethod (name) {
		return new Axe(name);
	}
}

export { AxeFactory };