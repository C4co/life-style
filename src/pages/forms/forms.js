import {h, render, Component} from 'preact'
import Page from '../../layouts/page/page'
import Block from '../../components/block/block'
import Example from '../../components/example/example'
import {CodeBlock} from '../../components/code/code'
import getFile from '../../helpers/files'

const inputTextExample = `
<label for='first'> text input </label>
<input type='text' id='first' class='form-control' placeholder='this is my text input'/>
`

const inputTextPassword = `
<label for='second'> password input </label>
<input type='password' id='second' class='form-control' placeholder='this is my password input'/>
`

const textArea = `
<label for='third' for='second'> Textarea </label>
<textarea id='third' class='form-control' placeholder='this is my text area'></textarea>
`

const select = `
<select id='select' class='form-select'>
  <option value='first'>first</option>
  <option value='second'>second</option>
  <option value='thrid'>thrid</option>
  <option value='fourty'>fourty</option>
</select>
`

const checkbox = `
<div class='form-checkbox'>
  <input id='first-check' type='checkbox'>
  <label for='first-check'> First </label>
</div>

<div class='form-checkbox'>
  <input id='second-check' type='checkbox'>
  <label for='second-check'> Second </label>
</div>

<div class='form-checkbox'>
  <input id='third-check' type='checkbox'>
  <label for='third-check'> Third </label>
</div>
`

const radios = `
<div class="form-radio">
  <input id='first-radio' type='radio' name='group' checked>
  <label for='first-radio'> First button </label>
</div>

<div class='form-radio'>
  <input id='second-radio' type='radio' name='group'>
  <label for='second-radio'> Second button </label>
</div>

<div class='form-radio'>
  <input id='third-radio' type='radio' name='group'>
  <label for='third-radio'> Third button </label>
</div>
`

class Forms extends Component{
  constructor(){
    super()

    this.state.formSass = ""
    this.state.checkboxSass = ""
    this.state.radioSass = ""
  }

  componentDidMount(){
    getFile('./src/style/form.scss')
      .then(res => {
        this.setState({ formSass: res })
      })

    getFile('./src/style/checkbox.scss')
      .then(res => {
        this.setState({ checkboxSass: res })
      })

    getFile('./src/style/radio.scss')
      .then(res => {
        this.setState({ radioSass: res })
      })
  }

  render(){
    return (
      <Page title='forms' description='Forms configuration'>
        <Block title='inputs'>
          <Example title='input text' code={inputTextExample} />
          <Example title='input password' code={inputTextPassword} />
          <Example title='textarea' code={textArea} />
          <Example title='select' code={select} />
        </Block>

        <Block title='Checkbox'>
          <Example title='checkbox' code={checkbox} />
        </Block>

        <Block title='Radio button'>
          <Example title='radio' code={radios} />
        </Block>

        <Block title='Implementation'>
          <CodeBlock title='form.scss'>
            {`${this.state.formSass || '...loading'}`}
          </CodeBlock>

          <CodeBlock title='checkbox.scss'>
            {`${this.state.checkboxSass || '...loading'}`}
          </CodeBlock>

          <CodeBlock title='radio.scss'>
            {`${this.state.radioSass || '...loading'}`}
          </CodeBlock>
        </Block>
      </Page>
    )
  }
}


export default Forms
