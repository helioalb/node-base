const path = require('path');
const AssetsWebpackPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './web/frontend/js/index.ts'
  },
  plugins: [
    new AssetsWebpackPlugin({ path: 'web/server/public'}),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css'
    })
  ],
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve('./web/server/public/assets'),
    publicPath: '/assets',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
