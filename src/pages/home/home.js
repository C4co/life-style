import {h, render, Component} from 'preact'
import Page from '../../layouts/page/page'
import Block from '../../components/block/block'
import Image from '../../components/image/image'
import Alert from '../../components/alert/alert'

const Home = ({children, ...props}) => (
  <Page
    title='Lifestyle'
    description='Lifestyle is a component based project to documentation your own style guide, the main goal is create something simple and easy to customization.'>

    <Block title='Components'>
      <h6> Current components: </h6>
      <ul>
        <li> Alert </li>
        <li> Block </li>
        <li> CodeBlock </li>
        <li> CodeLine </li>
        <li> Pallet / Color </li>
        <li> Example </li>
        <li> Image </li>
      </ul>
    </Block>
  </Page>
)

export default Home
