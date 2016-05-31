'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommunicationManager = function () {
	function CommunicationManager() {
		_classCallCheck(this, CommunicationManager);
	}

	_createClass(CommunicationManager, [{
		key: "createConnection",
		value: function createConnection() {}
	}, {
		key: "onSuccess",
		value: function onSuccess() {}
	}, {
		key: "onError",
		value: function onError() {}
	}]);

	return CommunicationManager;
}();

var WebSocketManager = function (_CommunicationManager) {
	_inherits(WebSocketManager, _CommunicationManager);

	function WebSocketManager(pathToWebsocket) {
		_classCallCheck(this, WebSocketManager);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WebSocketManager).call(this));

		_this.serverPath = pathToWebsocket;
		return _this;
	}

	_createClass(WebSocketManager, [{
		key: "createConnection",
		value: function createConnection() {
			this.ws = new WebSocket(this.serverPath);
			this.ws.onopen = this.onSuccess;
			this.ws.onclose = this.onError;
		}
	}, {
		key: "onSuccess",
		value: function onSuccess() {
			console.log("WebSocket works correctly");
		}
	}, {
		key: "onError",
		value: function onError() {
			throw new Error("Error during set connection to WebSocket");
		}
	}]);

	return WebSocketManager;
}(CommunicationManager);

var XmlHTTPManager = function (_CommunicationManager2) {
	_inherits(XmlHTTPManager, _CommunicationManager2);

	function XmlHTTPManager(pathToHTTPServer) {
		_classCallCheck(this, XmlHTTPManager);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(XmlHTTPManager).call(this));

		_this2.serverPath = pathToHTTPServer;
		return _this2;
	}

	_createClass(XmlHTTPManager, [{
		key: "createConnection",
		value: function createConnection() {
			var self = this;

			self.req = new XMLHttpRequest();
			self.req.open('GET', this.serverPath, true);
			self.req.onreadystatechange = function (aEvt) {
				if (self.req.readyState == 4) {
					if (self.req.status == 200) {
						self.onSuccess();
					} else {
						self.onError();
					}
				}
			};
			self.req.send(null);
		}
	}, {
		key: "onSuccess",
		value: function onSuccess() {
			console.info("XMLHttpRequest work correctly");
		}
	}, {
		key: "onError",
		value: function onError() {
			throw new Error("XMLHttpRequest doesn't work");
		}
	}]);

	return XmlHTTPManager;
}(CommunicationManager);

var ConnectionTester = function () {
	function ConnectionTester() {
		_classCallCheck(this, ConnectionTester);
	}

	_createClass(ConnectionTester, [{
		key: "setCommunicationManager",
		value: function setCommunicationManager(communicationManager) {
			this.commManager = communicationManager;
			this.validateCommunicationManager();
		}
	}, {
		key: "validateCommunicationManager",
		value: function validateCommunicationManager() {
			if (!(this.commManager instanceof CommunicationManager)) {
				throw new TypeError("Communication manager has wrong type");
			}
		}
	}, {
		key: "init",
		value: function init() {
			this.commManager.createConnection();
			/* other code */
		}
	}]);

	return ConnectionTester;
}();

var ws = new WebSocketManager("ws://echo.websocket.org"),
    xhr = new XmlHTTPManager("https://github.com"),
    ct = new ConnectionTester();

ct.setCommunicationManager(ws); // or we can change Manager to "xhr"
ct.init();

//# sourceMappingURL=d-compiled.js.map