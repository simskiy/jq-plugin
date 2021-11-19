const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
// eslint-disable-next-line max-len
const filename = (ext, hash) => isDev ? `[name].${ext}` : `[name].[${hash}:8].${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  output: {
    filename: filename('js', 'chunkhash'),
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@js': path.resolve(__dirname, 'src/js')
    }
  },

  mode: isProd ? 'production' : 'development',
  devtool: isDev ? 'source-map' : false,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'JQuery Plugin',
      favicon: './favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: filename('css', 'contenthash')
    }),
    new ESLintPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ],

  devServer: {
    compress: true,
    port: 9000,
    hot: isDev,
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
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
