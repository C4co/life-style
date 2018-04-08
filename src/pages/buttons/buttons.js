import {h, render, Component} from 'preact'

import Block from '../../components/block/block'
import {CodeBlock} from '../../components/code/code'
import Example from '../../components/example/example'

import Page from '../../layouts/page/page'

import getFile from '../../helpers/files'

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

  componentDidMount(){
    getFile('./src/style/button.scss')
      .then(res => { this.setState({buttonSass: res}) })
  }

  render(){
    return(
      <Page title='Buttons' description='Button configuration'>
        <Block title='Default buttons'>
          <Example title='Normal buttons' code={normalButtons} />
          <Example title='Disabled buttons' code={disabledButtons} />
        </Block>

        <Block title='Implementation'>
          <CodeBlock title='button.scss'>
            {`${this.state.buttonSass || '...loading'}`}
          </CodeBlock>
        </Block>
      </Page>
    )
  }
}

export default Buttons
