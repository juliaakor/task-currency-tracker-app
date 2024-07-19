const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    assetModuleFilename: 'asset/[name][ext]',
    chunkFilename: 'js/[name].bundle.js',
    filename: 'js/[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      showErrors: true,
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: 'css/[name].css',
    }),
  ],
});
