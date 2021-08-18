import React from 'react'

export function Forms(){
  return (
    <div>
      <form className="form">

        <div className="form__divider">
          <input name="input1" type="text" placeholder="placeholder" className="input" />
        </div>

        <div className="form__divider">
          <label className="label" htmlFor="input1"> Label </label>
          <input name="input1" type="text" placeholder="placeholder" className="input" />
        </div>

        <div className="form__divider">
          <label className="label" htmlFor="input1"> Label </label>
          <input name="input1" type="text" placeholder="placeholder" className="input" />
          <span className="input__error-message"> error message </span>
        </div>

        <div className="form__divider">
          <select className="select">
            <option value="0">Select car:</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>
        </div>

        <div className="form__divider">
          <label className="label" htmlFor="textarea1"> Textarea </label>
          <textarea className="textarea" name="textarea1" placeholder="textarea"></textarea>
        </div>

      </form>
    </div>
  )
}
