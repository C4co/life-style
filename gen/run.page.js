const newPage = require('./gen.js')
const pageTemplage = require('./page.template.js')

newPage('page')({
  template: pageTemplage,
  log: true,
  name: process.argv[2]
})

