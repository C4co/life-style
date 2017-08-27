import {h, render, Component} from 'preact'
import Page from 'layouts/page/page'
import Block from 'components/block/block'
import {Palette, Color} from 'components/color/color'

const Home = ({children, ...props}) => (
  <Page
    title='Home'
    description='Isso é um simples exemplo do life-style, uma style-guide simples e funcional de fácil customização e manipulação.'
  >

  <Block title='Colors'>
    <Palette>
      <Color color='red' var='$error_color'> </Color>
      <Color color='blue' var='$info_color'> </Color>
      <Color color='green' var='$success_color'> </Color>
      <Color color='yellow' var='$warning_color'> </Color>
      <Color color='gray' var='$border_color'> </Color>
    </Palette>
  </Block>

  </Page>
)

export default Home
