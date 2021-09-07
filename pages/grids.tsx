import { Page } from '../templates'
import Head from 'next/head'

export default function grids(){
  return(
    <Page>
      <Head>
        <title> Grids </title>
      </Head>

      <h1 className="title text--center"> Grid </h1>

      <div className="row">
        <div className="col">
          <input className="input" type="text" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input className="input" type="text" />
        </div>

        <div className="col">
          <input className="input" type="text" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input className="input" type="text" />
        </div>

        <div className="col">
          <input className="input" type="text" />
        </div>

        <div className="col">
          <input className="input" type="text" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input className="input" type="text" />
        </div>

        <div className="col">
          <input className="input" type="text" />
        </div>

        <div className="col">
          <input className="input" type="text" />
        </div>

        <div className="col">
          <input className="input" type="text" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input className="input" type="text" />
        </div>

        <div className="col">
          <input className="input" type="text" />
        </div>

        <div className="col">
          <input className="input" type="text" />
        </div>

        <div className="col">
          <input className="input" type="text" />
        </div>

        <div className="col">
          <input className="input" type="text" />
        </div>
      </div>

    </Page>
  )

}