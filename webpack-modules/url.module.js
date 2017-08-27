module.exports = {
  test: /\.(mp4|ogg|svg|eot|ttf|woff|woff2|jpg|png)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }
  ]
}