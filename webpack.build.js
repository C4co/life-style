const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const styleModule = require('./webpack-modules/style.module.js')
const babelModule = require('./webpack-modules/babel.module.js')
const sassModule = require('./webpack-modules/sass.module.js')
const fileModule = require('./webpack-modules/file.module.js')
const urlModule = require('./webpack-modules/url.module.js')
const base = require('./webpack.base.js')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: base.entry,
  output: base.output,
  resolve: base.resolve,

  plugins: [
    new Dotenv({
      path: './.env',
      safe: true
    }),

    new webpack.optimize.AggressiveMergingPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      minimize: true,
      compress: { warnings: false }
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),

    new ExtractTextPlugin('[name].css'),

    sassModule.extractSass
  ],

  module: {
    rules: [
      styleModule,
      babelModule,
      sassModule.rule,
      fileModule,
      urlModule
    ]
  }
}