var path = require("path");

module.exports = {
	entry: "./src/js/app.js",
	output: {
		path: __dirname,
		filename: "build/adapter-min.js"
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