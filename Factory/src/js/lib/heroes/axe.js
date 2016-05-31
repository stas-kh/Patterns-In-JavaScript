import Hero from "./hero";

class Axe extends Hero {
	constructor(playerName) {
		super();

		this.playerName = playerName;
		this.imagePath = "assets/img/axe.png";
	}
}

export { Axe };