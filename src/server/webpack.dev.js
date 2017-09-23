const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

function templateContent() {
  return fs.readFileSync(path.resolve(process.cwd(), 'src/client/index.html')).toString();
}

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
    templateContent: templateContent(), // eslint-disable-line no-use-before-define
  }),
];

module.exports = {
  devtool: 'eval-source-map',
  plugins,
  entry: [
    path.resolve(process.cwd(), 'src/client/app/index.js'),
  ],
  output: {
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  target: 'web',
};