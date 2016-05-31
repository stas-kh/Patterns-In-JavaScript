import {IJsonLoader} from "./IJsonLoader";

export class JsonPrinter {
	constructor(id) {
		this.printerId = id;
		
		this.nodeContainer = null;
		this.jsonLoader = null;

		this.parsedJsonFiles = 0;
	}
	get ID() {
		return this.printerId;
	}
	set loader(jsonLoader) {
		if (jsonLoader instanceof IJsonLoader === true) {
			this.jsonLoader = jsonLoader;
		}
	}
	get loader() {
		return this.jsonLoader;
	}
	set container(node) {
		this.nodeContainer = node;
	}
	get container() {
		return this.nodeContainer;
	}
	printJson(pathToFile) {
		let textToPrint = "",
			textNode = {},
			parent = document.querySelector(this.container);

		this.jsonLoader.load(pathToFile, response => {
			textToPrint = JSON.stringify(response, {}, 4),
			textNode = document.createTextNode(textToPrint);

			parent.appendChild(textNode);

			this.parsedJsonFiles++;
		});
	}
}