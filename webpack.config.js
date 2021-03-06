var webpack = require('webpack');
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var config = {
  entry: path.resolve(__dirname, './client/app.js'),
  output: {
    filename: 'client/bundle.js'
  },
  module: {
    loaders: [{
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    }],
    loaders: [{
      test: /\.js$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel', // The module to load. "babel" is short for "babel-loader"
      exclude: [nodeModulesPath],
      query: {
        presets: ['es2015', 'react']
      }
    },{ test: /\.css$/, loader: 'style-loader!css-loader' },]
  },
  watch: true
};

module.exports = config;