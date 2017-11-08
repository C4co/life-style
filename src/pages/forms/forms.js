import {h, render, Component} from 'preact'
import Page from 'layouts/page/page'
import Block from 'components/block/block'
import Example from 'components/example/example'

const inputTextExample = `
<label for='first'> text input </label>
<input type='text' id='first' class='form-control' placeholder='this is my text input'/>
`

const inputTextPassword = `
<label for='second'> password input </label>
<input type='password' id='second' class='form-control' placeholder='this is my password input'/>
`

const textArea = `
<label for='third' for='second'> password input </label>
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
<div>
  <input id='first-check' type='checkbox' class='form-checkbox'>
  <label for='first-check'> Checkbox </label>
</div>
`

const radios = `
<div>
  <input id='first-radio' type='radio' class='form-radio'>
  <label for='first-radio'> Radio button </label>
</div>
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

    <Block title='Checkbox'>
      <Example
        title='checkbox'
        code={checkbox}>
        <div dangerouslySetInnerHTML={{ __html: checkbox }} />
      </Example>
    </Block>

    <Block title='Radio button'>
      <Example
        title='radio'
        code={radios}>
        <div dangerouslySetInnerHTML={{ __html: radios }} />
      </Example>
    </Block>

  </Page>
)

export default Forms
