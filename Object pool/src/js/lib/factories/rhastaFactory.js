import {HeroFactory} from "./heroFactory";
import {Rhasta} from "./../heroes/rhasta";

export class RhastaFactory extends HeroFactory {
	factoryMethod(name) {
		return new Rhasta(name);
	}
}