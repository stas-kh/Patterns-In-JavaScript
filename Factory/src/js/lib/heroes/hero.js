export default class {
	generateHero() {
		let result = document.createElement("div"),
			title = document.createElement("h1"),
			img = document.createElement("img");

		img.src = this.imagePath;
		title.innerText = this.playerName;

		result.appendChild(img);
		result.appendChild(title);

		document.body.appendChild(result);
	}
}