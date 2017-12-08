const fs = require('fs')
const pageTemplate = require('./page.template.js')

const createNewFolder = name => {
  name = `./src/pages/${name}`

  if (fs.existsSync(name)) {
    throw new Error('The page you want to create already exists.')
  }else{
    fs.mkdirSync(name)
  }
}

const createNewfile = (name, template) => {
  path = `./src/pages/${name}/${name}.js`

  fs.writeFile(path, template, err => {
    if (err) {
      console.log(err)
      return false
    }else{
      console.log('\x1b[1;96m%s\x1b[0m', `${path} Created!`, '\n')
      console.log('Next steps:')
      console.log('(1) - Register the page in routing.js')
      console.log('(2) - Create a link to this page in partials/menu/menu.js', '\n')

      return true
    }
  })
}

const createNewPage = name => {
  createNewFolder(name)
  createNewfile(name, pageTemplate(name))
}

createNewPage(process.argv[2])
