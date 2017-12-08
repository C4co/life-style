import {h, render, Component} from 'preact'
import Page from 'layouts/page/page'
import Block from 'components/block/block'
import Image from 'components/image/image'

const Images = ({children, ...props}) => (
  <Page title='Images' description='Lifestyle images'>
    <Block title='Logo'>
      <Image src='assets/lifestyle-dark.svg' title='lifestyle logo'></Image>
    </Block>
  </Page>
)

export default Images
