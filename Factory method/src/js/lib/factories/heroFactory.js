class HeroFactory {
	generateHero(name) {
		let result = document.createElement("div"),
			title = document.createElement("h1"),
			img = document.createElement("img"),
			hero = this.factoryMethod(name);

		img.src = hero.imagePath;
		title.innerText = hero.playerName;

		result.appendChild(img);
		result.appendChild(title);

		document.body.appendChild(result);

		hero.generateHeroInfo();
	}
}

export { HeroFactory };