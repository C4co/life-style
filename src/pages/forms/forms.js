import {h, render, Component} from 'preact'
import Page from 'layouts/page/page'
import Block from 'components/block/block'
import Example from 'components/example/example'

const inputTextExample = `
<label for="first"> text input </label>
<input type="text" id="first" class='form-control' placeholder='this is my text input'/>
`
const inputTextPassword = `
<label for="second"> password input </label>
<input type="password" id="second" class='form-control' placeholder='this is my password input'/>
`

const textArea = `
<label for="third" for="second"> password input </label>
<textarea id="third" class="form-control" placeholder='this is my text area'></textarea>
`

const select = `
<select id="select" class='form-select'>
  <option value="first">first</option>
  <option value="second">second</option>
  <option value="thrid">thrid</option>
  <option value="fourty">fourty</option>
</select>
`

const Forms = ({childrens, ...props}) => (
  <Page title='forms' description='Forms configuration'>
    <Block title='inputs'>
      <Example
        title='input text'
        code={inputTextExample}>
        <div dangerouslySetInnerHTML={{ __html: inputTextExample }} />
      </Example>

      <Example
        title='input password'
        code={inputTextPassword}>
        <div dangerouslySetInnerHTML={{ __html: inputTextPassword }} />
      </Example>

      <Example
        title='textarea'
        code={textArea}>
        <div dangerouslySetInnerHTML={{ __html: textArea }} />
      </Example>

      <Example
        title='select'
        code={select}>
        <div dangerouslySetInnerHTML={{ __html: select }} />
      </Example>

    </Block>
  </Page>
)

export default Forms
