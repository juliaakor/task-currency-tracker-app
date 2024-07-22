const path = require('path');

const { EsbuildPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { ROOT_PATH } = require('./webpack.constants');

module.exports = {
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    open: true,
    port: 3000,
  },
  entry: {
    index: path.join(ROOT_PATH, 'src', 'index.tsx'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.(png|svg|jp(e*)g|gif|ico|webp|avif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        },
      },
    ],
  },
  optimization: {
    mergeDuplicateChunks: true,
    minimize: true,
    minimizer: [
      new EsbuildPlugin({
        target: 'es2016',
      }),
    ],
    removeEmptyChunks: true,
    sideEffects: false,
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    clean: true,
    path: path.resolve(ROOT_PATH, 'build'),
    publicPath: '/',
  },
  performance: {
    maxAssetSize: 1024 ** 2,
    maxEntrypointSize: Infinity,
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
  },
};
