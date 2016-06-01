import {TicTacToe} from "./components/ticTacToe";
import {CareTaker} from "./components/careTaker";

window.addEventListener("load", () => {
	let autogameInterval = null;
	const autogameInvervalTimeMS = 500;

	let ticTac = new TicTacToe(function (message) {
		clearInterval(autogameInterval);
		alert(message);
	});
	ticTac.startGame();

	let careTaker = new CareTaker();
	
	let handleListeners = function () {
		let cells = document.querySelectorAll(".cell");
		for (var i = 0; i < cells.length; i++) {
			cells[i].addEventListener("click", (event) => {
				ticTac.move(false, event.target.getAttribute("data-index"));
			});
		}
	};
	handleListeners();
	
	document.querySelector(".autogame").addEventListener("change", (event) => {
		if (event.target.checked === true) {
			autogameInterval = setInterval(() => {
				ticTac.move(true);
			}, autogameInvervalTimeMS);
		} else {
			clearInterval(autogameInterval);
		}
	});

	document.querySelector(".reset-game").addEventListener("click", () => {
		ticTac.resetGame();
	});

	document.querySelector(".save-state").addEventListener("click", () => {
		careTaker.saveState(ticTac);
	});

	document.querySelector(".restore-state").addEventListener("click", () => {
		careTaker.restoreState(ticTac);
		ticTac.reRender();
	});
});
