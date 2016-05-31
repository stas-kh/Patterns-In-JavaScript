import {HeroFactory} from "./heroFactory";
import {Luna} from "./../heroes/luna";

export class LunaFactory extends HeroFactory {
	factoryMethod(name) {
		return new Luna(name);
	}
}