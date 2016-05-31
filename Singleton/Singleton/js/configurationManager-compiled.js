"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pathToConfigurationFile = "./config/bingo-config.json";
var pathToConfigParamName = "pathToConfig";

var ConfigurationManager = function () {
	var _instance = null;

	var Config = function () {
		function Config() {
			_classCallCheck(this, Config);

			this._pathToConfig = null;
			this._appConfiguration = {};
		}

		_createClass(Config, [{
			key: "setPathToConfig",
			value: function setPathToConfig(path) {
				if (path !== null && path !== undefined) {
					this._pathToConfig = path;
				} else {
					this._pathToConfig = this.GET(pathToConfigParamName);
				}
			}
		}, {
			key: "init",
			value: function init(callback) {
				var _this = this;

				this._loadConfiguration(function (data) {
					_this._appConfiguration = JSON.parse(data);
					if (typeof callback === "function" && callback !== undefined) {
						callback.call();
					}
				});
			}
		}, {
			key: "_loadConfiguration",
			value: function _loadConfiguration(callback) {
				var xhr = new XMLHttpRequest();
				xhr.overrideMimeType("application/json");
				xhr.onload = function () {
					if (typeof callback === "function" && callback !== undefined) {
						callback.call(this, xhr.responseText);
					}
				};
				xhr.open("GET", this._pathToConfig, true);
				xhr.send();
			}
		}, {
			key: "GET",
			value: function GET(paramName) {
				var url = window.location.href.toLowerCase(),
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
		}, {
			key: "configuration",
			get: function get() {
				if (Object.keys(this._appConfiguration).length === 0) {
					throw new Error("Your config file hasn't been uploaded");
				} else {
					return this._appConfiguration;
				}
			}
		}]);

		return Config;
	}();

	return {
		getInstance: function getInstance() {
			if (_instance === null) {
				_instance = new Config();
			}
			return _instance;
		}
	};
}();

ConfigurationManager.getInstance().setPathToConfig(pathToConfigurationFile);
ConfigurationManager.getInstance().init(function () {
	/* Bootstrap the application */
	console.log("App loaded");
	console.log(ConfigurationManager.getInstance().configuration);
});

//# sourceMappingURL=configurationManager-compiled.js.map