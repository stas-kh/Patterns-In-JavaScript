import { Ihero } from "./Ihero";

class Axe extends Ihero {
	constructor(playerName) {
		super();

		this.playerName = playerName;
		this.imagePath = "assets/img/axe.png";
	}
	generateHeroInfo() {
		console.log(`${this.playerName} selected Axe. As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General. In battle after battle he proved his worth through gory deed.`);
	}
}

export { Axe };