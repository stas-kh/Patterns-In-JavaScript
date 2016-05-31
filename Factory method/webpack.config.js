var path = require("path");

module.exports = {
	entry: "./src/js/main.js",
	output: {
		path: __dirname,
		filename: "build/factory-compiled.js"
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				include: [
					path.resolve(__dirname, "src")
				],
				test: /\.js/,
				loader: "babel",
				query: {
					presets: ["es2015"]
				}
			}
		]
	}
};