const pathToConfigurationFile = "./config/bingo-config.json";
const pathToConfigParamName = "pathToConfig";

var ConfigurationManager = (function () {
	let _instance = null;
	class Config {
		constructor() {
			this._pathToConfig = null;
			this._appConfiguration = {};
		}

		setPathToConfig(path) {
			if(path !== null && path !== undefined) {
				this._pathToConfig = path;
			} else {
				this._pathToConfig = this.GET(pathToConfigParamName);
			}
		}

		init(callback) {
			this._loadConfiguration(data => {
				this._appConfiguration = JSON.parse(data);
				if (typeof callback === "function" && callback !== undefined) {
					callback.call();
				}
			});
		};

		get configuration() {
			if (Object.keys(this._appConfiguration).length === 0) {
				throw new Error("Your config file hasn't been uploaded");
			} else {
				return this._appConfiguration;
			}
		}

		_loadConfiguration(callback) {
			let xhr = new XMLHttpRequest();
			xhr.overrideMimeType("application/json");
			xhr.onload = function () {
				if (typeof callback === "function" && callback !== undefined) {
					callback.call(this, xhr.responseText);
				}
			};
			xhr.open("GET", this._pathToConfig, true);
			xhr.send();
		}

		GET(paramName) {
			let url = window.location.href.toLowerCase(),
				name = paramName.replace(/[\[\]]/g, "\\$&").toLowerCase(),
				regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
				data = regex.exec(url);

			if (data === null || data === undefined) {
				return null;
			}
			if (data[2] === null || data[2] === undefined) {
				return "";
			}
			return decodeURIComponent(data[2].replace(/\+/g, " "));
		}
	}
	return {
		getInstance() {
			if (_instance === null) {
				_instance = new Config();
			}
			return _instance;
		}
	}
}());

ConfigurationManager.getInstance().setPathToConfig(pathToConfigurationFile);
ConfigurationManager.getInstance().init(function () {
	/* Bootstrap the application */
	console.log("App loaded");
	console.log(ConfigurationManager.getInstance().configuration);
});