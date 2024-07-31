import CompressionPlugin from 'compression-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.config';

export default merge(commonConfig, {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  output: {
    assetModuleFilename: 'asset/[name][chunkhash][ext]',
    chunkFilename: 'js/[name].[chunkhash].js',
    filename: 'js/[name].[chunkhash].js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public/favicon.ico', to: '.' },
        { from: 'public/robots.txt', to: '.' },
        { from: 'public/logo192.png', to: '.' },
        { from: 'public/logo512.png', to: '.' },
        { from: 'public/manifest.json', to: '.' },
      ],
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      minRatio: 0.8,
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
    }),
  ],
}) as Configuration;
