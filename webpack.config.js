'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  node: {
    __dirname: false
  },
  entry: {
    'app': './src/app'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
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
        loader: 'babel-loader?presets[]=react&presets[]=es2015',
        include: /node_modules/
      },
      {
        test: /\.jsoon?$/,
        loader: 'json-loader'
      }
    ]
  }
};
