'use strict';

class IHero {
	clone() {}
}

class Lucantrope extends IHero {

	constructor (playerName = "Lucan") {
		super();

		this.STRENGTH = "strength";
		this.AGL = "agility";
		this.INTL = "intelligence";

		this.level = 1;

		this.heroProperties = {
			strength: 20,
			agility: 5,
			intelligence: 10
		};

		this.setName(playerName);
	}

	upgrade () {
		this.addLevel();

		if (this.level % 2 === 0) {
			this.addAbility(this.STRENGTH, 5);
			this.addAbility(this.AGL, 1);
			this.addAbility(this.INTL, 3);
		} else {
			this.addAbility(this.STRENGTH, 3);
		}
	}

	setName (newName) {
		this.name = newName;
	}

	addLevel (val = 1) {
		this.level += val;
	}

	addAbility (ability, val = 1) {
		this.heroProperties[ability] += val;
		return ability;
	}

	clone () {
		var clone = {},
			currentProperty = null;
		for(var prop in this) {
			if(this.hasOwnProperty(prop)) {
				currentProperty = this[prop];
				if(currentProperty) {
					clone[prop] = this._createCopy(currentProperty);
				}
			}
		}
		clone.__proto__ = this.__proto__;
		return clone;
	}

	_createCopy (obj) {
		var copy = obj;

		if (copy instanceof Array) {
			copy = obj.map(s => s);
		} else if (obj instanceof Object && typeof obj !== "function") {
			copy = {};
			for (var attr in obj) {
				if (obj.hasOwnProperty(attr)) {
					copy[attr] = this._createCopy(obj[attr]);
				}
			}
		}
		return copy;
	}

}

var staskh = new Lucantrope("StasKh");
staskh.upgrade();
staskh.upgrade();
staskh.upgrade();
staskh.upgrade();
staskh.upgrade();


var alinkin = staskh.clone();
alinkin.setName("Alinkin");
alinkin.upgrade();
alinkin.upgrade();

var olepro = alinkin.clone();
olepro.setName("Oleksii");
olepro.upgrade();

console.log(staskh, alinkin, olepro);

// data output
document.querySelector("pre.first-obj").innerHTML += "<h1>Main object</h1>";
document.querySelector("pre.first-obj").innerHTML += JSON.stringify(staskh, {}, 4);
document.querySelector("pre.sec-obj").innerHTML += "<h1>Clone</h1>";
document.querySelector("pre.sec-obj").innerHTML += JSON.stringify(alinkin, {}, 4);
document.querySelector("pre.third-obj").innerHTML += "<h1>Clone by clone</h1>";
document.querySelector("pre.third-obj").innerHTML += JSON.stringify(olepro, {}, 4);