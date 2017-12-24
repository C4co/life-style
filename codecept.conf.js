const dotenv = require('dotenv').config()

console.log(process.env.DOMAIN)

exports.config = {
  'tests': './e2e/*e2e.js',
  'timeout': 10000,
  'output': './.output',
  'helpers': {
    'Puppeteer': {
      'url': `${process.env.DOMAIN}`,
      'show': false
    }
  },
  'include': {},
  'bootstrap': false,
  'mocha': {},
  'name': 'webpack-init'
}
