/**
 * webpack prod配置
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base')();
const appWebpack = require('./../app.config').webpack;
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = merge(base, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ExtractCssChunks.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [ExtractCssChunks.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    // 分离css文件
    new ExtractCssChunks({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[id].[chunkhash:8].css',
    }),
    // 限制文件最小KB
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 20000
    }),
    new OptimizeCssAssetsPlugin(
      {
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          // postcss那边已经处理过autoprefixer了，这里把它关掉，否则会导致浏览器前缀兼容范围问题
          autoprefixer: false,
          discardComments: { removeAll: true }
        },
      }
    ),
  ]
}, appWebpack);

module.exports = config;
