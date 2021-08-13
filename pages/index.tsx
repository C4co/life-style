import { Welcome } from '../components'
import { Page } from '../templates'
import Head from "next/head"

export default function Home(){
  return (
    <Page>
      <Head>
        <title> CN Next Starter </title>
      </Head>
      <Welcome />
    </Page>
  )
}
