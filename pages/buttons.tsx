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
        <button className="button"> Button </button>
      </div>

      <div>
        <button className="button">
          <span>💛</span>
          <span> Button Emoji </span>
        </button>

        <button className="button">
          <span> Button Emoji </span>
          <span>💛</span>
        </button>

        <button className="button">
          <span>💛</span>
          <span> Button Emoji </span>
          <span>💛</span>
        </button>

        <button className="button">
          <span>💛</span>
        </button>

        <button className="button">
          <span>💛</span>
          <span>💛</span>
          <span>💛</span>
        </button>
      </div>

      <div>
        <button className="button--primary"> Primary </button>
        <button className="button--danger"> Danger </button>
        <button className="button--success"> Success </button>
        <button className="button--dark"> Dark </button>
        <button className="button--light"> Light </button>
      </div>

      <div>
        <button className="button--primary button--outline"> Outline Primary </button>
        <button className="button--danger button--outline"> Outline Danger </button>
        <button className="button--success button--outline"> Outline Success </button>
        <button className="button--dark button--outline"> Outline Dark </button>
      </div>

      <div>
        <button disabled className="button button--loading"> Loading... </button>
        <button disabled className="button--dark button--loading"> Loading... </button>
        <button disabled className="button button--outline button--loading"> Loading... </button>
        <button disabled className="button--danger button--outline button--loading"> Loading... </button>
        <button disabled className="button--danger button--loading"> Loading... </button>
        <button disabled className="button--success button--loading"> Loading... </button>

        <button disabled className="button button--loading button--small"> Loading... </button>
      </div>

      <div>
        <button className="button button--full"> Full </button>
      </div>

      <div>
        <button className="button button--big"> Big </button>
        <button className="button button--big button--outline"> Big Outline </button>
        <button className="button button--big button--outline button--danger"> Big Outline Danger </button>
      </div>

      <div>
        <button className="button button--small"> Small </button>
        <button className="button button--small button--outline"> Small Outline </button>
        <button className="button button--small button--outline button--danger"> Small Outline Danger </button>
      </div>

      <div>
        <button className="button button--big button--rounded"> Big Rounded </button>
        <button className="button button--big button--rounded button--danger"> Big Rounded Danger </button>
        <button className="button button--big button--rounded button--success"> Big Rounded Success </button>
      </div>

      <div>
        <a href="http://google.com" className="button"> Anchor </a>
        <a href="http://google.com" className="button button--outline"> Anchor </a>
        <a href="http://google.com" className="button button--outline button--danger"> Anchor </a>
        <a href="http://google.com" className="button button--outline button--danger button--small button--rounded"> Anchor </a>
      </div>

      <div>
        <input type="submit" className="button" />
        <input type="submit" className="button button--outline" />
        <input type="submit" className="button button--outline button--danger" />
        <input type="submit" className="button button--outline button--danger button--small button--rounded" />
      </div>

      <div>
        <input type="reset" className="button" />
        <input type="reset" className="button button--outline" />
        <input type="reset" className="button button--outline button--danger" />
        <input type="reset" className="button button--outline button--danger button--small button--rounded" />
      </div>

    </Page>
  )
}
