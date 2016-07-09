'use strict';
var webpack = require('webpack');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loader: ExtractTextWebpackPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[local]---[hash:base64:5]',
          'postcss-loader'
        )
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    new webpack.DefinePlugin({
      '__DEVELOPMENT__': true
    })
  ]
};
