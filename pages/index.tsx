import { Page } from '../templates'
import Head from 'next/head'
import { Buttons, Forms } from '../components/'

export default function Home(){
  return (
    <Page>
      <Head>
        <title> Lifestyle </title>
      </Head>

      <Buttons />
      <br /> <br />
      <Forms />
    </Page>
  )
}
