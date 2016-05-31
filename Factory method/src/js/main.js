import { AxeFactory } from "./lib/factories/axeFactory";
import { LunaFactory } from "./lib/factories/lunaFactory";
import { RhastaFactory } from "./lib/factories/rhastaFactory";

window.onload = function () {
	let randomNames = ["Dee Pinedo", "Saran Vallarta", "Alonzo Stalzer", "Nadene Dorsey", "Talia Pough",
		"Graham Vallance", "Eugenia Aston", "Carmel Lawless", "Emanuel Townsley", "Pearle Roepke",
		"Natividad Solan", "Princess Lenard", "Odell Gamboa", "Scarlett Subia", "Mao Rippe",
		"Ngan Grennan", "Maybell Hensel", "Stephan Opie", "Hsiu Dones", "Mckinley Laurin"];

	let heroFactories = [new AxeFactory(), new LunaFactory(), new RhastaFactory()];
	let heroes = [];

	let tempRandomNumber = 0,
		currentPlayer = "",
		tempHero = null,
		currentIndex = 0;

	let generate = function () {
		tempRandomNumber = Math.floor(Math.random() * 3);
		currentPlayer = randomNames[currentIndex];

		if(currentPlayer !== null && currentPlayer !== undefined) {
			heroFactories[tempRandomNumber].generateHero(currentPlayer);

			heroes.push(tempHero);

			currentIndex++;
		} else {
			alert("Each player has own hero");
		}
	};

	document.querySelector("button").addEventListener("click", generate);
};