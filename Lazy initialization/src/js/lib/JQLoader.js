import {ScriptLoader} from "./scriptLoader";

class JQLoader {
	static getLib(callback) {
		const LIBRARY_URL = "https://code.jquery.com/jquery-3.0.0.min.js";

		if (window.$ === null || window.$ === undefined) {
			new ScriptLoader().loadScript(LIBRARY_URL, function () {
				callback.call(window, $);
			});
		} else {
			callback.call(window, $);
		}
	}
}

export {JQLoader}