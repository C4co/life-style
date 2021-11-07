import Link from 'next/link'

export function Menu(){
  return (
    <menu className="menu">
      <Link href="/buttons">
        <a className="link menu__item"> Buttons </a>
      </Link>

      <Link href="/forms">
        <a className="link menu__item"> Forms </a>
      </Link>

      <Link href="/tables">
        <a className="link menu__item"> Tables </a>
      </Link>

      <Link href="/grids">
        <a className="link menu__item"> Grids </a>
      </Link>

      <Link href="/types">
        <a className="link menu__item"> Types </a>
      </Link>
    </menu>
  )
}
