import { Page } from '../templates'
import Head from 'next/head'

export default function Buttons(){
  return(
    <Page>
      <Head>
        <title> Buttons </title>
      </Head>

      <h1 className="title text--center"> Buttons </h1>

      <div>
        <button className="button button--big"> Button </button>
        <button className="button"> Button </button>
        <button className="button button--small"> Button </button>
      </div>

      <div>
        <button className="button button--big button--outline"> Button </button>
        <button className="button button--outline"> Button </button>
        <button className="button button--small button--outline"> Button </button>
      </div>

      <div>
        <button className="button button--rounded button--big"> Button </button>
        <button className="button button--rounded"> Button </button>
        <button className="button button--rounded button--small"> Button </button>
      </div>

      <div>
        <button disabled className="button button--big button--loading"> Button </button>
        <button disabled className="button button--loading"> Button </button>
        <button disabled className="button button--small button--loading"> Button </button>
      </div>

      <div>
        <button disabled className="button button--big button--loading button--outline"> Button </button>
        <button disabled className="button button--loading button--outline"> Button </button>
        <button disabled className="button button--small button--loading button--outline"> Button </button>
      </div>

      <div>
        <button className="button button--big button--full"> Button </button>
        <button className="button button--big button--full button--outline"> Button </button>
      </div>

    </Page>
  )
}
