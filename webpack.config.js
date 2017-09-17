const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'todo-app': './src/my-app.tsx'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			}
		]
	},
	node: {
		fs: 'empty'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
		new webpack.DefinePlugin({
			MOCK_API: process.env.MOCK_API || false
		})
	]
};

