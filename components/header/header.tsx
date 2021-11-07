type Props = {
  children: string
}

export function Header({ children }: Props){
  return (
    <header className='header'>
      <h1 className="title--mid"> { children } </h1>
    </header>
  )
}
