class FactoryMaker {
	static getHeroFactory(type) {
		var factory = null;
		switch(type) {
			case factoryType.wizard:
				factory = new WizardFactory();
				break;
			case factoryType.swordsman:
				factory = new SwordsmanFactory();
				break;
		}
		return factory;
	}
}