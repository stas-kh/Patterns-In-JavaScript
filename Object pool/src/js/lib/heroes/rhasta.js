import {Ihero} from "./iHero";

export class Rhasta extends Ihero {
	constructor(playerName) {
		super();

		this.playerName = playerName;
		this.imagePath = "assets/img/rhasta.jpg";
	}

	generateHeroInfo() {
		console.log(`${this.playerName} selected Rhasta. Born in the Bleeding Hills, Rhasta was just a starving youngling when picked up by a travelling con-man. For two pins of copper, the old con-man would tell your fortune.`);
	}
}