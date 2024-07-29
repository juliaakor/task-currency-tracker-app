import { Configuration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

import commonConfig from './webpack.config';

export default merge(commonConfig, {
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    open: true,
    port: 3000,
  } as WebpackDevServerConfiguration,
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
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
  plugins: [],
}) as Configuration;
