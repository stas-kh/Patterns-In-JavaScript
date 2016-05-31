import {HeroFactory} from "./heroFactory";
import {Axe} from "./../heroes/axe";

export class AxeFactory extends HeroFactory {
	factoryMethod(name) {
		return new Axe(name);
	}
}