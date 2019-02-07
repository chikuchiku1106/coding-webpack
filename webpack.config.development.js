const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    // serverのルートパスを設定する
    publicPath: '/'
  },
  // devServer: {
  //   contentBase: 'dist',
  //   host: '0.0.0.0',
  //   disableHostCheck: true,
  //   hot: true,
  //   inline: true,
  //   overlay: true,
  //   port: 8000,
  //   historyApiFallback: true,
  //   watchContentBase: true
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});

module.exports = config;
