import { Page } from '../templates'
import Head from 'next/head'
import { Header, Content, Menu } from '@/components'

export default function Home(){
  return (
    <Page>
      <Head>
        <title> Lifestyle </title>
      </Head>

      <Header> Lifestyle </Header>

      <Content>
        <Menu />
      </Content>

    </Page>
  )
}
