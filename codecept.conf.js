const dotenv = require('dotenv').config()

console.log(process.env.DOMAIN)

exports.config = {
  'tests': './e2e/*e2e.js',
  'timeout': 10000,
  'output': './.output',
  'helpers': {
    'WebDriverIO': {
      'url': `${process.env.DOMAIN}`,
      'browser': 'chrome',
      'restart': false,
      'windowSize': 'maximize'
    }
  },
  'include': {},
  'bootstrap': false,
  'mocha': {},
  'name': 'webpack-init'
}
