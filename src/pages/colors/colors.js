import {h, render, Component} from 'preact'

import Block from 'components/block/block'
import {Pallet, Color} from 'components/color/color'
import {CodeBlock} from 'components/code/code'

import Page from 'layouts/page/page'

import getFile from 'helpers/files'

class Colors extends Component{
  constructor(){
    super()
  }

  componentDidMount(){
    getFile('./src/style/colors.scss')
      .then(res => { this.setState({ colorsSass: res }) })
  }

  render(){
    return (
      <Page title='Colors' description='Colors configuration'>
        <Block title='Colors'>
          <Pallet title='Main pallet color'>
            <Color name="#33c5a0" var="$success-color" />
            <Color name="#2197cf" var="$info-color" />
            <Color name="#dc3030" var="$error-color" />
            <Color name="#333844" var="$main-color" />
          </Pallet>
        </Block>

        <Block title='Implementation'>
          <CodeBlock title='colors.scss'>
            {`${this.state.colorsSass || '...loading'}`}
          </CodeBlock>
        </Block>
      </Page>
    )
  }
}

export default Colors
