import {Hero} from "./components/Hero";
import {GameAdministrator} from "./components/GameAdministrator";
import {BonusHoursActivation} from "./components/commands/BonusHoursActivation";
import {BonusHoursDeactivation} from "./components/commands/BonusHoursDeactivation";
import {PlayerIdentification} from "./components/commands/PlayerIdentification";
import {PlayerBanning} from "./components/commands/PlayerBanning";

window.addEventListener("load", () => {
	let heroes = [new Hero("StasKh"), new Hero("Alinkin"), new Hero("Oleksii"), new Hero("Telman")],
		admin = new GameAdministrator();

	heroes.forEach((elem, index) => {
		let temp = document.createElement("option");
		temp.value = index;
		temp.textContent = elem.name;
		document.querySelector(".heroes-list").appendChild(temp);
	});

	let getSelectedHeroIndex = function () {
		return document.querySelector(".heroes-list").value;
	};

	document.querySelector(".ban-hero").addEventListener("click", () => {
		let ban = new PlayerBanning(heroes[getSelectedHeroIndex()]);
		admin.addCommand(ban);
	});

	document.querySelector(".activate-bonus-hero").addEventListener("click", () => {
		let bonusActivation = new BonusHoursActivation(heroes[getSelectedHeroIndex()]);
		admin.addCommand(bonusActivation);
	});

	document.querySelector(".deactivate-bonus-hero").addEventListener("click", () => {
		let bonusDeactivation = new BonusHoursDeactivation(heroes[getSelectedHeroIndex()]);
		admin.addCommand(bonusDeactivation);
	});

	document.querySelector(".identify-hero").addEventListener("click", () => {
		let identifier = new PlayerIdentification(heroes[getSelectedHeroIndex()]);
		admin.addCommand(identifier);
	});
});


