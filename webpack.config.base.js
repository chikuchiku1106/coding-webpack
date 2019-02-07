const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      // 'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, './src/javascripts/entry.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader'
      // },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].html' }
          },
          'extract-loader',
          'html-loader',
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery'
    // })
  ]
};
