const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'main.[chunkhash:8].js',
    path: path.resolve(__dirname, 'dist'),
		clean: true
  },
	resolve: {
		extensions: ['.js'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@js': path.resolve(__dirname, 'src/js')
		}
	},

	mode: 'development',

	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			title: 'JQuery Plugin',
			favicon: './favicon.ico'
		}),
		new MiniCssExtractPlugin({
			filename: 'main.[contenthash:8].css'
		})
	],

	devServer: {
    compress: true,
    port: 9000,
		hot: true,
		open: true
  },

	module: {
    rules: [
			{
        test: /\.s[ac]ss$/i,
        use: [
					MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
			{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
  },
};
