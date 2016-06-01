var path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "src/js/app.js"),
	output: {
		path: __dirname,
		filename: "build/command-min.js"
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