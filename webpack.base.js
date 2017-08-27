const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

module.exports = {
  entry: {
    'bundle': './src/app.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css', '.scss', '.svg'],
    unsafeCache: true,
    plugins: [
      new DirectoryNamedWebpackPlugin()
    ],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      'create-react-class': 'preact-compat/lib/create-react-class'
    }
  }
}
