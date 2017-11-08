import {h, render, Component} from 'preact'
import Page from 'layouts/page/page'
import Block from 'components/block/block'
import {CodeBlock, CodeLine} from 'components/code/code'
import {Palette, Color} from 'components/color/color'
import Alert from 'components/alert/alert'
import Example from 'components/example/example'

const buttonCodeExample = `
<div>
  <button class='btn btn__success btn__success--submit'> submit </button>
  <button class='btn btn__error btn__success--submit'> success </button>
  <button class='btn btn__warn btn__success--submit'> warn </button>
  <button class='btn btn__info btn__success--submit'> info </button>
  <button class='btn btn__main btn__success--submit'> main </button>
</div>
`

const Home = ({children, ...props}) => (
  <Page
    title='Home'
    description='Isso é um simples exemplo do life-style, uma style-guide simples e funcional de fácil customização e manipulação.'
  >

  <Block title='Colors'>
    <Palette>
      <Color name='red' var='$error_color'> </Color>
      <Color name='blue' var='$info_color'> </Color>
      <Color name='green' var='$success_color'> </Color>
      <Color name='yellow' var='$warning_color'> </Color>
      <Color name='#ccff33' var='$border_color'> </Color>
    </Palette>

    <p>
      Lorem ipsum dolor <CodeLine>npm install preact --save-dev</CodeLine> sit amet, consectetur adipisicing elit. Eius dolorum excepturi dolorem impedit illum accusamus molestias ipsam, sit et fugiat laudantium itaque ratione officiis laborum, vero porro eaque doloribus rerum.
    </p>
  </Block>

  <Block title='Example'>
    <Example
      title='Default Button'
      code={buttonCodeExample}>
      <button class='btn'> Hello </button>
    </Example>
  </Block>

  <Block title='Alerts'>
    <Alert type='info'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Alert>
    <Alert type='error'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Alert>
    <Alert type='warn'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Alert>
    <Alert type='success'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Alert>
  </Block>

  <Block title='Code'>
    <p> This is a simple example of the code component</p>

    <CodeBlock title='javascript example'>
      {`<h1> Hello world </h1>`}
    </CodeBlock>

    <CodeBlock title='javascript example'>
      {`console.log('hello')`}
    </CodeBlock>
  </Block>

  </Page>
)

export default Home
