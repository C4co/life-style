import React from 'react'

export function Buttons(){
  return (
    <div>
      <button className="button">
        Button
      </button>

      <br />

      <div className="buttons">
        <button className="button">
          <span> ❤️ </span>
          <span> Button </span>
        </button>

        <button className="button">
          <span> ❤️ </span>
        </button>

        <button className="button">
          <span> ❤️ </span>
          <span> 💛 </span>
          <span> 💚 </span>
        </button>

        <button className="button">
          <span> ❤️ </span>
          <span> Button </span>
          <span> ❤️ </span>
        </button>
      </div>

      <br />

      <div className="buttons">
        <button className="button__outline">
          Outline
        </button>

        <button className="button__outline">
          <span> ❤️ </span>
          <span> Outline </span>
          <span> ❤️ </span>
        </button>

        <button className="button__outline">
          <span> ❤️ </span>
        </button>
      </div>

      <br />

      <div className="buttons">
        <button className="button__loading">
          Carregando...
        </button>
      </div>

      <br />

      <div className="buttons">
        <button className="button__full">
          Full button
        </button>
      </div>
    </div>
  )
}
