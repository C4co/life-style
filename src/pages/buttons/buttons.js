import {h, render, Component} from 'preact'

import Block from '../../components/block/block'
import {CodeBlock} from '../../components/code/code'
import Example from '../../components/example/example'

import Page from '../../layouts/page/page'

const normalButtons = `
<button class='btn'> Normal button </button>
<a href="#" class='btn'> Link button </a>
<input type="submit" value='Submit Button' class='btn'/>
`

const disabledButtons = `
<button class='btn' disabled> Normal button </button>
<a href="#" class='btn' disabled> Normal button </a>
<input type="submit" value='Submit Button' class='btn' disabled/>
`

class Buttons extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Page title='Buttons' description='Button configuration'>
        <Block title='Default buttons'>
          <Example title='Normal buttons' code={normalButtons} />
          <Example title='Disabled buttons' code={disabledButtons} />
        </Block>
      </Page>
    )
  }
}

export default Buttons
