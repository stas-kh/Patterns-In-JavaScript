import {Bird} from "./lib/Bird";
import {DecoratedBird} from "./lib/DecoratedBird";
import {BluesBird} from "./lib/BluesBird";
import {ChuckBird} from "./lib/ChuckBird";

let birdToBeDecorated = new Bird(),
	playerBalance = 1500,
	birdPrices = {
		default: 30,
		decorated: 50,
		blues: 100,
		chuck: 200
	};

window.addEventListener("load", () => {
	let birdsContainer = document.querySelector(".birds-container");

	document.querySelector(".buy-default-bird").addEventListener("click", () => {
		let bird = new Bird();

		updateBalance(birdPrices.default, function () {
			appendBird(bird.render());
		});
	});

	document.querySelector(".buy-decorated-bird").addEventListener("click", () => {
		let birdType = document.querySelector(".bird-type").value,
			bird = null;
		switch (birdType) {
			case "decorated":
				bird = new DecoratedBird(birdToBeDecorated);
				break;
			case "blues":
				bird = new BluesBird(birdToBeDecorated);
				break;
			case "chuck":
				bird = new ChuckBird(birdToBeDecorated);
				break;
		}

		updateBalance(birdPrices[birdType], function () {
			appendBird(bird.render());
		});
	});

	let appendBird = function (bird) {
		birdsContainer.appendChild(bird);
	};

	let updateBalance = function (price, successCallback) {
		var result = playerBalance - price;
		if (result < 0) {
			alert("You don't have enough money to buy more birds.");
		} else {
			playerBalance = result;
			updateBalanceOnView();

			if (successCallback !== null && successCallback !== undefined && typeof successCallback === "function") {
				successCallback.call();
			}
		}
	};

	let updateBalanceOnView = function () {
		document.querySelector(".player-balance").innerHTML = playerBalance;
	};

	updateBalanceOnView();
});