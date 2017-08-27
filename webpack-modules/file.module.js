module.exports = {
  test: /\.(mp4|ogg|svg|eot|ttf|woff|woff2|jpg|png)$/,
  loader: 'file-loader',
  query: {
    useRelativePath: process.env.NODE_ENV === 'production'
  }
}
