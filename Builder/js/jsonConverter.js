class JSONConverter {
	constructor (parser) {
		this.parser = null;

		if ((parser instanceof IJSONParser) === true) {
			this.parser = parser;
		}
	}

	parseJSON (jsonObj) {
		if (this.parser !== null) {
			this.parser.parseJSON(jsonObj);
		} else {
			throw new Error ("Parser is not defined. It seems that it has wrong type");
		}
	}
}