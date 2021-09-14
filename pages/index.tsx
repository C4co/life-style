import { Page } from '../templates'
import Head from 'next/head'
import Link from 'next/link'

export default function Home(){
  return (
    <Page>
      <Head>
        <title> Lifestyle </title>
      </Head>

      <h1 className="title"> Life style </h1>

      <div>
        <Link href="/buttons">
          <a className="link"> Buttons </a>
        </Link>
      </div>

      <div>
        <Link href="/forms">
          <a className="link"> Forms </a>
        </Link>
      </div>

      <div>
        <Link href="/tables">
          <a className="link"> Tables </a>
        </Link>
      </div>

      <div>
        <Link href="/grids">
          <a className="link"> Grids </a>
        </Link>
      </div>

      <div>
        <Link href="/types">
          <a className="link"> Types </a>
        </Link>
      </div>

    </Page>
  )
}
