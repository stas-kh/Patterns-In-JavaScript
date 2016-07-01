import {playerTypes} from "./lib/playerTypes";
import {Terrorist} from "./lib/terrorist";
import {CounterTerrorist} from "./lib/counterTerrorist";
import {RadioMessageHandler} from "./lib/radioMessageHandler";

let generateRandomHero = function (name) {
	const TYPES = [playerTypes.CT, playerTypes.T];

	let randomNum = Math.round(Math.random()),
		result = null;

	if (TYPES[randomNum] === playerTypes.CT) {
		result = new CounterTerrorist(name);
	} else if (TYPES[randomNum] === playerTypes.T) {
		result = new Terrorist(name);
	}

	return result;
};

let randomNames = ["Janice Stiger" ,"Loreta Wills", "Ji Leo", "Devora Noell", "Eugenia Haworth", "Darline Wohl", "Luella Varnum", "Ludie Nokes", "Chuck Stampley", "Jaimie Yarnall", "Jazmin Nordeen", "Jamie Burgdorf", "Jutta Willson", "Vanessa Rowlett", "Eda Meggs", "Mora Tomberlin", "Willis Shawver", "Cyrstal Montenegro", "Pok Rudie", "Teressa Lamphear"],
	mediator = new RadioMessageHandler(),
	player = null,
	tempPlayers = [];

randomNames.forEach(name => {
	player = generateRandomHero(name);
	mediator.add(player);
	tempPlayers.push(player);
});

window.addEventListener("load", () => {
	let closeAllRadioDialogs = function () {
		document.querySelectorAll(".keys").forEach(el => {
			el.style.display = "none";
		});
	};
	
	let renderHeroes = function () {
		tempPlayers.forEach((player, index) => {
			document.querySelector(".players").innerHTML += `<br /><input type="radio" name="currentPlayer" value="${index}"><label for="${player.name}">${player.name} [${player.TYPE}]</label>`;
			document.querySelectorAll(".players input[type='radio']")[0].checked = true;
		});
	};
	renderHeroes();

	let lastKnownCommandBlock = null;
	
	window.addEventListener("keyup", event => {
		if (event.key === "x" || event.key === "z" || event.key === "c") {
			closeAllRadioDialogs();
			lastKnownCommandBlock = `.${event.key}-keys`;
			document.querySelector(lastKnownCommandBlock).style.display = "block";
		}
		if (event.key > 0 && event.key <= 7) {
			let currentPlayerIndex = document.querySelector("input[name='currentPlayer']:checked").value,
				parentBox = document.querySelector(lastKnownCommandBlock),
				childElement = parentBox.querySelectorAll("li")[event.key - 1];

			tempPlayers[currentPlayerIndex].send(childElement.innerHTML);
			closeAllRadioDialogs();
		}
	});
});
