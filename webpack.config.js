var glob = require('glob');
var path = require('path');

module.exports = {
	entry: glob.sync('./src/main.ts'),
	mode: "production",
	devtool: false,
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'scripty.js',
    libraryTarget: "commonjs",
	},
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
	module: {
		rules: [
			{
        test: /\.(ts|js)x?$/,
				loader: 'babel-loader',
			},
		],
	},
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  externals: {
    kolmafia: "commonjs kolmafia",
  },
}
