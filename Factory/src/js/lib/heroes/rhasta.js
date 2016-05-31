import Hero from "./hero";

class Rhasta extends Hero {
	constructor(playerName) {
		super();

		this.playerName = playerName;
		this.imagePath = "assets/img/rhasta.jpg";
	}
}

export { Rhasta };