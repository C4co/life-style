// https://www.browsersync.io/docs/options#option-port

module.exports = {
  open: false,
  files: ['*.js', '*.jsx', '*.scss', '*.html', './**/*.html'],
  port: '3000',
  server: {
    baseDir: './'
  }
}
