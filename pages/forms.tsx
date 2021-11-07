import { Page } from '../templates'
import Head from 'next/head'
import { Content, Header } from '@/components'

export default function Forms(){
  return (
    <Page>
      <Head>
        <title> Forms </title>
      </Head>

      <Header>
        Forms
      </Header>

      <Content>
        <form className="form">

          <fieldset className="fieldset">
            <legend className="legend"> Inputs </legend>

            <div>
              <label className="label"> Label </label>
              <input type="text" className="input" placeholder="Placeholder" />
              <span className="input__message"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </div>

            <div>
              <label className="label"> Label </label>
              <input type="text" className="input input--error" placeholder="Placeholder" />
              <span className="input__message--error"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </div>

            <div>
              <label className="label"> Label </label>
              <input type="text" className="input input--success" placeholder="Placeholder" />
            </div>

            <div className="row">
              <div className="col">
                <label className="label"> Label </label>
                <input type="text" className="input" placeholder="Placeholder" />
              </div>

              <div className="col">
                <label className="label"> Label </label>
                <input type="text" className="input" placeholder="Placeholder" />
              </div>
            </div>

            <div>
              <label className="label"> Input Email </label>
              <input type="email" className="input" placeholder="Enter e-mail" />
            </div>

            <div>
              <label className="label"> Input Password </label>
              <input type="password" className="input" placeholder="Enter password" />
            </div>

            <div>
              <label className="label"> Input Number </label>
              <input type="number" className="input" placeholder="Enter number" />
            </div>

            <div>
              <label className="label"> Input Date </label>
              <input type="date" className="input" placeholder="Enter date" />
            </div>

            <div>
              <label className="label"> Input Date Local </label>
              <input type="datetime-local" className="input" placeholder="Enter datetime local" />
            </div>

            <div>
              <label className="label"> Input Time </label>
              <input type="time" className="input" placeholder="Enter time" />
            </div>

            <div>
              <label className="label"> Input Week </label>
              <input type="week" className="input" placeholder="Enter week" />
            </div>

            <div>
              <label className="label"> Input Month </label>
              <input type="month" className="input" placeholder="Enter month" />
            </div>

            <div>
              <label className="label"> Input Tel </label>
              <input type="tel" className="input" placeholder="Enter tel" />
            </div>

            <div>
              <label className="label"> Input Search </label>
              <input type="search" className="input" placeholder="Enter search" />
            </div>

            <div>
              <label className="label"> Input Url </label>
              <input type="url" className="input" placeholder="Enter url" />
            </div>

            <div>
              <label className="label"> Input Color </label>
              <input type="color" className="input" />
            </div>

            <div>
              <label className="label"> Input Range </label>
              <input type="range" className="input" min="0" max="100" step="10" />
            </div>

            <div>
              <label className="label"> Input File </label>
              <input type="file" className="input" />
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="legend"> Select </legend>

            <select className="select" name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="legend"> Textarea </legend>

            <textarea className="textarea" placeholder="textarea">
            </textarea>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="legend"> Checkbox </legend>

            <div className='checkbox'>
              <input onChange={() => {}} id='first-check' type='checkbox' />
              <label htmlFor='first-check'> First </label>
            </div>

            <div className='checkbox'>
              <input onChange={() => {}} id='second-check' type='checkbox' />
              <label htmlFor='second-check'> Second </label>
            </div>

            <div className='checkbox'>
              <input onChange={() => {}} id='third-check' type='checkbox' />
              <label htmlFor='third-check'> Third </label>
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="legend"> Radio </legend>

            <div className="radio">
              <input id='first-radio' type='radio' name='group' />
              <label htmlFor='first-radio'> First button </label>
            </div>

            <div className='radio'>
              <input id='second-radio' type='radio' name='group' />
              <label htmlFor='second-radio'> Second button </label>
            </div>

            <div className='radio'>
              <input id='third-radio' type='radio' name='group' />
              <label htmlFor='third-radio'> Third button </label>
            </div>
          </fieldset>
        </form>
      </Content>

    </Page>
  )
}