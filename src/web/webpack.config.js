const path = require('path');
const AssetsWebpackPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: {
    index: './src/web/js/index.js'
  },
  plugins: [
    new AssetsWebpackPlugin({ path: './public'})
  ],
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('./public/js'),
    publicPath: '/js/',
    clean: true
  }
}
