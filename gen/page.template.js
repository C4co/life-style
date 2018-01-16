const path = require('path')
const capitalize = str => str.charAt(0).toUpperCase().concat(str.slice(1).toLowerCase())

const pageTemplate = name => `
import {h, render, Component} from 'preact'
import Page from 'layouts/page/page'
import Block from 'components/block/block'

const ${capitalize(path.basename(name))} = ({children, ...props}) => (
  <Page title='${capitalize(path.basename(name))}' description='${path.basename(name)} description'>
    <Block title='block title'>
      <h1> This is my new page! </h1>
    </Block>
  </Page>
)

export default ${capitalize(path.basename(name))}
`.trim()

module.exports = pageTemplate