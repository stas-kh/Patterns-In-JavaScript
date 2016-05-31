import {IJsonLoader} from "./IJsonLoader";

export class JsonLoaderJQuery extends  IJsonLoader {
	load (filename, callback) {
		console.time("JQuery loader");
		
		$.getJSON(filename, response => {
			if (callback !== null && callback !== undefined && typeof callback === "function") {
				callback(response);
				
				console.timeEnd("JQuery loader");
			}
		});
	}
}