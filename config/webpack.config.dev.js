/**
 * webpack dev配置
 */
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')()
const appWebpack = require('./../app.config').webpack

const config = merge(base, {
  mode: 'development',
  devtool: '#cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        REACT_ENV: '"client"',
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}, appWebpack)

Object.keys(config.entry).forEach(function (name) {
  config.entry[name] = ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'].concat(config.entry[name])
})

module.exports = config
