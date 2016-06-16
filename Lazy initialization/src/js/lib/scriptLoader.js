class ScriptLoader {
	constructor() {
		this._SCRIPT_TYPE = "text/javascript";
		this._LOAD_EVENT_NAME = "load";
		this._HEAD_TAG = "head";
		this._SCRIPT_ELEMENT = "script";
	}
	loadScript(url, callback) {
		let script = document.createElement(this._SCRIPT_ELEMENT);
		script.type = this._SCRIPT_TYPE;
		script.addEventListener(this._LOAD_EVENT_NAME, () => {
			script.addEventListener(this._LOAD_EVENT_NAME, null);
			callback.call();
		});
		script.src = url;
		document.querySelectorAll(this._HEAD_TAG)[0].appendChild(script);
	}
}

export {ScriptLoader};