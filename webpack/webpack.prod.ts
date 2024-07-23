import path from 'path';

import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.config';
import { ROOT_PATH } from './webpack.constants';

export default merge(commonConfig, {
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
      template: path.join(ROOT_PATH, 'public', 'index.html'),
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
}) as Configuration;
