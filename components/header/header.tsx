type Props = {
  children: string
}

export function Header({ children }: Props){

  function setTheme(theme: string){
    const element = document.querySelector('[data-theme]')
    element.setAttribute('data-theme', theme)
  }

  return (
    <header className='header'>
      <h1 className="title--mid"> { children } </h1>

      <div className="header__buttons">
        <button className="header__button" onClick={() => { setTheme('light') }}>
          🌞
        </button>
        <button className="header__button" onClick={() => { setTheme('dark') }}>
          🌚
        </button>
      </div>
    </header>
  )
}
