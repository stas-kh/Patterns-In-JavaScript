import { Ihero } from "./Ihero";

class Luna extends Ihero {
	constructor(playerName) {
		super();
		
		this.playerName = playerName;
		this.imagePath = "assets/img/luna.jpg";
	}
	generateHeroInfo() {
		console.log(`${this.playerName} selected Luna. How had she been reduced to this? She was once the Scourge of the Plains, a merciless leader of men and beasts, and able to sow terror wherever she dared. Now she was far from her homeland, driven half mad from starvation and months of wandering, her army long dead or worse.`);
	}
}

export { Luna };