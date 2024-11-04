const MiniCssExtratPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		index: "./src/index.js",
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtratPlugin.loader, "css-loader"],
			},
		],
	},
	plugins: [new MiniCssExtratPlugin()],
};
