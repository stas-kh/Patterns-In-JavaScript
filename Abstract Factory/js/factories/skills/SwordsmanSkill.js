class SwordsmanSkill extends IAbstractSkill {
	constructor() {
		super();
		this._mainSkillName = "slash";
		this._secondarySkillType = "berserk";
	}

	getMainSkill() {
		return this._mainSkillName;
	}

	getSecondarySkill() {
		return this._secondarySkillType;
	}
}