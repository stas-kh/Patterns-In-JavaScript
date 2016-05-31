'use strict';

class CommunicationManager {
	createConnection() {
	};

	onSuccess() {
	};

	onError() {
	};
}

class WebSocketManager extends CommunicationManager {
	constructor(pathToWebsocket) {
		super();
		this.serverPath = pathToWebsocket;
	};

	createConnection() {
		this.ws = new WebSocket(this.serverPath);
		this.ws.onopen = this.onSuccess;
		this.ws.onclose = this.onError;
	}

	onSuccess() {
		console.log("WebSocket works correctly");
	}

	onError() {
		throw new Error("Error during set connection to WebSocket");
	}
}

class XmlHTTPManager extends CommunicationManager {
	constructor(pathToHTTPServer) {
		super();
		this.serverPath = pathToHTTPServer;
	};

	createConnection() {
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

	onSuccess() {
		console.info("XMLHttpRequest work correctly");
	}

	onError() {
		throw new Error("XMLHttpRequest doesn't work");
	}
}

class ConnectionTester {
	setCommunicationManager(communicationManager) {
		this.commManager = communicationManager;
		this.validateCommunicationManager();
	}

	validateCommunicationManager() {
		if (!(this.commManager instanceof CommunicationManager)) {
			throw new TypeError("Communication manager has wrong type");
		}
	}

	init() {
		this.commManager.createConnection();
		/* other code */
	}
}

var ws = new WebSocketManager("ws://echo.websocket.org"),
	xhr = new XmlHTTPManager("https://github.com"),
	ct = new ConnectionTester();

ct.setCommunicationManager(ws); // or we can change Manager to "xhr"
ct.init();