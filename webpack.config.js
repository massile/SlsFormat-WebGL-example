var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');

module.exports = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "WebGL hot reloader",
			template: __dirname + '/src/index.html'
		}),
		new Webpack.DefinePlugin({
			__DEV__: process.env.NODE_ENV !== 'production'
		})
	],
	resolve: {
		root: [__dirname + '/src']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: __dirname + '/src',
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					presets: ['latest']
				}
			},
			{
				test: /\.glsl$/,
				include: __dirname + '/resources/shaders',
				loader: 'raw-loader'
			},
			{
				test: /\.json$/,
				include: __dirname + '/resources/mesh',
				loader: 'json-loader'
			}
		]
	},
	debug: process.env.NODE_ENV !== 'production',
	devtool: 'eval-source-map'
}
