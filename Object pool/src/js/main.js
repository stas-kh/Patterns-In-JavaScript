import {AxeFactory} from "./lib/factories/axeFactory";
import {LunaFactory} from "./lib/factories/lunaFactory";
import {RhastaFactory} from "./lib/factories/rhastaFactory";
import {HeroesPool} from "./lib/common/heroesPool";

window.addEventListener("load", () => {
	let randomNames = ["Dee Pinedo", "Saran Vallarta", "Alonzo Stalzer", "Nadene Dorsey", "Talia Pough",
			"Graham Vallance", "Eugenia Aston", "Carmel Lawless", "Emanuel Townsley", "Pearle Roepke",
			"Natividad Solan", "Princess Lenard", "Odell Gamboa", "Scarlett Subia", "Mao Rippe",
			"Ngan Grennan", "Maybell Hensel", "Stephan Opie", "Hsiu Dones", "Mckinley Laurin"],
		currentIndex = 0,
		heroFactories = [AxeFactory, LunaFactory, RhastaFactory],
		hero = null;

	HeroesPool.getInstance().create(heroFactories);

	let generate = () => {
		hero = HeroesPool.getInstance().acquireHero();

		if (hero !== null && hero !== undefined) {
			hero.generate(randomNames[currentIndex++], function () {
				currentIndex--;
			});
		}
	};

	document.querySelector(".create").addEventListener("click", generate);
});