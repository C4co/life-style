import {h, render, Component} from 'preact'
import Page from '../../layouts/page/page'
import Block from '../../components/block/block'
import Image from '../../components/image/image'
import lifestyleDarkImage from '../../../assets/lifestyle-dark.svg'

const Images = ({children, ...props}) => (
  <Page title='Images' description='Lifestyle images'>
    <Block title='Logo'>
      <Image src={lifestyleDarkImage} />
    </Block>
  </Page>
)

export default Images
