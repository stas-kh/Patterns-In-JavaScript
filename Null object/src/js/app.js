import {Hero} from "./components/roles/hero";
import {GameAdministrator} from "./components/roles/gameAdministrator";
import {PlayerBanning} from "./components/commands/playerBanning";
import {BonusHoursActivation} from "./components/commands/bonusHoursActivation";
import {BonusHoursDeactivation} from "./components/commands/bonusHoursDeactivation";
import {PlayerIdentification} from "./components/commands/playerIdentification";


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

	document.querySelectorAll(".unknown").forEach(el => {
		el.addEventListener("click", () => {
			admin.addCommand(null);
		});
	});

});
