type Props = {
  children: any
}

export function Content({ children }: Props){
  return (
    <section className='content'>
      { children }
    </section>
  )
}
