import { Page } from '../templates'
import Head from 'next/head'
import { Content, Header } from '@/components'

export default function grids(){
  return(
    <Page>
      <Head>
        <title> Grids </title>
      </Head>

      <Header>
        Grid
      </Header>

      <Content>
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
      </Content>

    </Page>
  )

}