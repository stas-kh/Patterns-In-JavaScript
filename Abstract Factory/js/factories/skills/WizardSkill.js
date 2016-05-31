class WizardSkill extends IAbstractSkill {
	constructor() {
		super();
		this._mainSkillName = "fireball";
		this._secondarySkillType = "tornado";
	}

	getMainSkill() {
		return this._mainSkillName;
	}

	getSecondarySkill() {
		return this._secondarySkillType;
	}
}