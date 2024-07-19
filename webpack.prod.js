const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
    assetModuleFilename: 'asset/[name][chunkhash][ext]',
    chunkFilename: 'js/[name].[chunkhash].js',
    filename: 'js/[name].[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      favicon: './public/favicon.ico',
      hash: true,
      minify: true,
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].[contenthash].css',
      filename: 'css/[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/favicon.ico',
          to: '.',
        },
        {
          from: 'public/robots.txt',
          to: '.',
        },
        {
          from: 'public/logo192.png',
          to: '.',
        },
        {
          from: 'public/logo512.png',
          to: '.',
        },
        {
          from: 'public/manifest.json',
          to: '.',
        },
      ],
    }),
  ],
});
