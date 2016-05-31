class RuntimeCSSParser extends IJSONParser {
	constructor () {
		super();
		this.id = 0;
	}
	parseJSON (json) {
		var jsonToCss = this.result,
			styles = jsonToCss.parse(json);

		jsonToCss.appendRuntimeStyles(styles, this.id);

		this.id++;
	}
	get result () {
		return new JSONToCSS();
	}
}