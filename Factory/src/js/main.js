import { HeroesFactory } from "./lib/factory.js";
import { HERO_TYPES as types } from "./lib/heroTypes";

window.onload = function () {
	let randomNames = ["Dee Pinedo", "Saran Vallarta", "Alonzo Stalzer", "Nadene Dorsey", "Talia Pough",
		"Graham Vallance", "Eugenia Aston", "Carmel Lawless", "Emanuel Townsley", "Pearle Roepke",
		"Natividad Solan", "Princess Lenard", "Odell Gamboa", "Scarlett Subia", "Mao Rippe",
		"Ngan Grennan", "Maybell Hensel", "Stephan Opie", "Hsiu Dones", "Mckinley Laurin"];

	let heroTypes = Object.keys(types).map(function (el) {
		return types[el];
	});

	let heroes = [];

	let tempRandomNumber = 0,
		currentPlayer = "",
		tempHero = null,
		currentIndex = 0;

	let generate = function () {
		tempRandomNumber = Math.floor(Math.random() * 3);
		currentPlayer = randomNames[currentIndex];

		if(currentPlayer !== null && currentPlayer !== undefined) {
			tempHero = HeroesFactory.createHero(heroTypes[tempRandomNumber], currentPlayer);
			tempHero.generateHero();

			heroes.push(tempHero);

			currentIndex++;
		} else {
			alert("Each player has own hero");
		}
	};

	document.querySelector("button").addEventListener("click", generate);
};