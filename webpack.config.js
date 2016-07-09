'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval-source-map',
  node: {
    __dirname: false
  },
  entry: {
    'app': './packages/cb-app/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    root: [
      path.resolve('./node_modules'),
      path.resolve('./packages')
    ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextWebpackPlugin('[name].css'),
    new HtmlWebpackPlugin({
      title: 'copybot',
      filename: 'index.html',
      template: 'custom-html.ejs'
    }),
    new webpack.DefinePlugin({
      '__DEVELOPMENT__': true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract(
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[local]---[hash:base64:5]",
          "postcss-loader"
        ),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract(
          "style-loader",
          "css-loader"
        ),
        include: /node_modules/
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  postcss: [autoprefixer]
};
