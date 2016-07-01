export class Hero {
	constructor(str, agl, int, ultTime, ultType, name) {
		this.heroProperties = {
			strength: str,
			agility: agl,
			intelligence: int
		};
		this.ultimate = {
			time: ultTime,
			type: ultType
		};
		this.name = name;
		this.health = 100;
	}

	doUltimate() {
		this.preUltimate();
		this.useSkill(this.ultimate.type);
		setTimeout(() => this.postUltimate(), this.ultimate.time);
	}

	preUltimate() {
		console.log(`${this.name} is ready to use ${this.ultimate.type}`);
	}

	postUltimate() {
		console.log(`---${this.name} has already finished using ${this.ultimate.type}---`);
	}

	useSkill(type) {
		/* some implementantion */
	}
}