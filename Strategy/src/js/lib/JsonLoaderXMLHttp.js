import {IJsonLoader} from "./IJsonLoader";

export class JsonLoaderXMLHttp extends  IJsonLoader {
	load (filename, callback) {
		console.time("XMLHttp loader");
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", filename);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				if (callback !== null && callback !== undefined && typeof callback === "function") {
					callback(JSON.parse(xhr.responseText));
					
					console.timeEnd("XMLHttp loader");
				}
			}
		};

		xhr.send(null);
	}
}