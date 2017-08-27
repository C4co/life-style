module.exports = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env', 'react'],
      plugins: [
        'transform-runtime',
        'transform-object-rest-spread',
        'transform-class-properties',
         ['transform-react-jsx', { 'pragma': 'h' }]
      ]
    }
  }
}
