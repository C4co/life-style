const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
  disable: process.env.NODE_ENV === 'development'
})

const rule = {
  test: /\.scss$/,
  use: extractSass.extract({
    use: [
      {loader: 'css-loader'},
      {loader: 'sass-loader?importLoaders=1!postcss-loader'}
    ]
  })
}

module.exports = {
  extractSass,
  rule
}