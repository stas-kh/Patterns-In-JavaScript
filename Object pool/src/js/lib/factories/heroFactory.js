import {HeroesPool} from "./../common/heroesPool";

export class HeroFactory {
	generate(name, onCloseCallback) {
		let result = document.createElement("div"),
			title = document.createElement("h1"),
			img = document.createElement("img"),
			btn = document.createElement("button"),
			hero = this.factoryMethod(name);

		img.src = hero.imagePath;
		title.innerText = hero.playerName;

		result.appendChild(img);
		result.appendChild(title);
		result.appendChild(btn);

		btn.addEventListener("click", () => {
			HeroesPool.getInstance().releaseHero(this);
			document.body.removeChild(result);
			if (onCloseCallback !== undefined && onCloseCallback !== null && typeof onCloseCallback === "function") {
				onCloseCallback.call();
			}
		});

		document.body.appendChild(result);

		hero.generateHeroInfo();
	}
}