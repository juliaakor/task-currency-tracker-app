import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.config';
import { ROOT_PATH } from './webpack.constants';

export default merge(commonConfig, {
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
      template: path.join(ROOT_PATH, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: 'css/[name].css',
    }),
  ],
}) as Configuration;
