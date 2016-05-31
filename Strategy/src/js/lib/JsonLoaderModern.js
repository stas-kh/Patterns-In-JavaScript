import {IJsonLoader} from "./IJsonLoader";

export class JsonLoaderModern extends  IJsonLoader {
	load (filename, callback) {
		console.time("Modern loader");

		window.fetch(filename).then(response => {
			if (response.status === 200) {
				response.json().then(data => {
					if (callback !== null && callback !== undefined && typeof callback === "function") {
						callback(data);

						console.timeEnd("Modern loader")
					}
				});
			}
		});
	}
}