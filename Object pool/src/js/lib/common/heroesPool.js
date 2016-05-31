export const HeroesPool = (function () {
	let _instance = null;

	class ObjectPool {
		constructor() {
			this._reusableHeroes = [];
			this._maxPoolSize = 20;
		}

		acquireHero() {
			let hero = null;
			for (let i = 0; i < this._reusableHeroes.length; i++) {
				hero = this._reusableHeroes[i];
				if (hero.isInUse === false) {
					hero.isInUse = true;
					return hero;
				}
			}
			throw new Error("Count of heroes exceeds max pool limit");
		}

		releaseHero(hero) {
			hero.isInUse = false;
		}

		get maxPoolSize() {
			return this._maxPoolSize;
		}

		set maxPoolSize(size) {
			this._maxPoolSize = size;
		}

		create(heroFactories) {
			let upperLimit = heroFactories.length,
				randomNum = 0,
				hero = null;
			this.clearHeroes();
			for (let i = 0; i < this._maxPoolSize; i++) {
				randomNum = Math.floor(Math.random() * upperLimit);
				hero = new heroFactories[randomNum];
				hero.isInUse = false;
				this._reusableHeroes.push(hero);
			}
		}

		clearHeroes() {
			this._reusableHeroes.length = 0;
		}
	}

	return {
		getInstance: () => {
			if (_instance === null) {
				_instance = new ObjectPool();
			}
			return _instance;
		}
	}
}());