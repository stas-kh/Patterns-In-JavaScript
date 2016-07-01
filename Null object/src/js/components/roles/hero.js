import {Utils} from "../utils";

export class Hero {
	constructor(name) {
		this.name = name;

		this.initPlayer();
	}

	initPlayer() {
		this._level = 1;
		this._expirience = {
			score: 0,
			isBonusActive: false
		};
		this._banStatus = {
			isBanned: false,
			banToDate: null
		};
		this._heroProperties = {
			agility: 1,
			strong: 1,
			intelligence: 1
		};
	}

	// let me skip a little functionality
	move() {
	}

	hit() {
	}

	gainAbility(ability) {
	}

	addScore(score) {
	}

	// commands
	banPlayer() {
		let date = new Date();
		date.setMonth(date.getMonth() + 1);

		this._banStatus.isBanned = true;
		this._banStatus.banToDate = date;

		Utils.log("Ban to player " + this.name + "\n" + JSON.stringify(this._banStatus, null, 4));
	}

	identify() {
		let xhr = new XMLHttpRequest(),
			body = "player=" + encodeURIComponent(this.name) +
				"&level=" + encodeURIComponent(this._level.toString()) +
				"&expirience=" + encodeURIComponent(this._expirience.score.toString());

		const xhrProps = {
			type: "POST",
			isAsync: true,
			origin: "http://httpbin.org/post",
			headerType: "Content-Type",
			header: "application/x-www-form-urlencoded"
		};

		xhr.open(xhrProps.type, xhrProps.origin, xhrProps.isAsync);
		xhr.setRequestHeader(xhrProps.headerType, xhrProps.header);

		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4 && xhr.status == 200) {
				Utils.log("Data is received " + xhr.responseText);
			}
		};

		xhr.send(body);
	}

	activateBonusHours() {
		Utils.log("Activate Bonus hours " + this.name);
		this._expirience.isBonusActive = true;
	}

	deactivateBonusHours() {
		Utils.log("Dectivate Bonus hours " + this.name);
		this._expirience.isBonusActive = false;
	}

}