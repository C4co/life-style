const dotenv = require('dotenv').config()
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const styleModule = require('./webpack-modules/style.module.js')
const babelModule = require('./webpack-modules/babel.module.js')
const sassModule = require('./webpack-modules/sass.module.js')
const fileModule = require('./webpack-modules/file.module.js')
const urlModule = require('./webpack-modules/url.module.js')
const base = require('./webpack.base.js')

console.log('\x1b[1;96m%s\x1b[0m', `${process.env.APP_NAME}: BUILD MODE`)

module.exports = {
  entry: base.entry,
  output: base.output,
  resolve: base.resolve,

  plugins: [
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

    new SWPrecacheWebpackPlugin({
      cacheId: 'app-cache',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: '../sw.js',
      minify: true,
      staticFileGlobs: [
        'dist/**.*',
        'assets/**.*'
      ]
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
