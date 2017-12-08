const capitalize = str => str.charAt(0).toUpperCase().concat(str.slice(1).toLowerCase())

const pageTemplate = name => `
import {h, render, Component} from 'preact'
import Page from 'layouts/page/page'
import Block from 'components/block/block'

const ${capitalize(name)} = ({children, ...props}) => (
  <Page title='${capitalize(name)}' description='${name} description'>
    <Block title='blog title'>
      <h1> This is my new page! </h1>
    </Block>
  </Page>
)

export default ${capitalize(name)}
`.trim()

module.exports = pageTemplate