const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// change to production in order to enable minification
const mode = "production";
const minimizer = [];

if (mode === "production") {
	const ugilfyPlugin = new UglifyJsPlugin({
		uglifyOptions: {
			keep_fnames: true,
		}
	});

	minimizer.push(ugilfyPlugin);
}

module.exports = {
	module: {
		rules: []
	},

	mode,
	optimization: {
		minimizer,
	},

	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
};
