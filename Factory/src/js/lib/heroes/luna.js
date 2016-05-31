import Hero from "./hero";

class Luna extends Hero {
	constructor(playerName) {
		super();

		this.playerName = playerName;
		this.imagePath = "assets/img/luna.jpg";
	}
}

export { Luna };