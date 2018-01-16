const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const shell = require('shelljs')

const SUCCESS = type => name => `
The ${type} ${chalk.green(path.basename(name))} was created.
→ ${chalk.green(`src/${type}s/${name}.js`)}
`

const ERROR = type => name => `
${chalk.red('ERROR')}
→ The ${type} ${chalk.red(name)} already exists.
`

const showLog = (log, fn) => {
  if (log) {
    fn()
  }
}

const normalize = (type, name ) => {
  let folder = false
  let pageFile = false

  if (path.dirname(name) !== '.') {
    folder = `src/${type}s/${path.dirname(name)}`
    pageFile = `${folder}/${path.basename(name)}.js`
  }else{
    pageFile = `src/${type}s/${name}.js`
  }

  return{
    folder: folder,A
    pageFile: pageFile
  }
}

const newPage = type => ({template, name, log}) => {
  const resource = normalize(type, name)

  if (resource.folder && !fs.existsSync(resource.folder)) {
    shell.mkdir('-p', resource.folder)
    shell.ShellString(template(name)).to(resource.pageFile)
    showLog(log, () => {
      console.log(SUCCESS(type)(name))
    })
  }else if(!fs.existsSync(resource.pageFile)){
    shell.ShellString(template(name)).to(resource.pageFile)
    showLog(log, () => {
      console.log(SUCCESS(type)(name))
    })
  }else{
    showLog(log, () => {
      console.log(ERROR(name))
    })
  }

  return {
    folder: resource.folder,
    pageFile: resource.pageFile
  }
}

module.exports = newPage
