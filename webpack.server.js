// https://www.browsersync.io/docs/options#option-port

const modRewrite = require('connect-modrewrite');

module.exports = {
  open: false,
  files: ['*.js', '*.jsx', '*.scss', '*.html', './**/*.html'],
  port: '3000',
  server: {
    baseDir: './',
    middleware: [
      modRewrite([
        '!\\.\\w+$ /index.html [L]'
      ])
    ]
  }
}
