import { Page } from '../templates'
import Head from 'next/head'

export default function types(){
  return (
    <Page>
      <Head>
        <title> Types </title>
      </Head>

      <h1 className="title text--center"> Types </h1>

      <p className="text--small">
        Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </p>

      <p className="text">
        Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </p>

      <p className="text--mid">
        Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </p>

      <p className="text--big">
        Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </p>

      <h1 className="title"> Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's </h1>

      <h1 className="title--mid"> Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's </h1>

      <p className="text--mid">
        <a href="#" className="link">Lorem Ipsum is simply dummy text of the Lorem Ipsum </a> has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
      </p>

      <p className="text">
        Lorem <a className="link" href="#">ipsum dolor sit amet</a> consectetur adipisicing elit. Quo dolorem nam odio sit aspernatur id illo <a className="link" href="#">quas ab sequi</a> quis. Eum adipisci <a className="link" href="#">velit</a> voluptatem ea ut, debitis porro voluptatibus optio. Lorem ipsum, dolor sit amet consectetur adipisicing elit. <a className="link" href="#"> Voluptates autem iusto </a> eaque itaque repellendus? Dolorem at, eveniet facere omnis ullam consequatur ab? <a className="link" href="#"> Sint quidem eum </a> nihil perspiciatis ab numquam tempore.
      </p>

      <h1 className="title text--primary"> Text color </h1>
      <h1 className="title text--success"> Text color </h1>
      <h1 className="title text--danger" > Text color </h1>

    </Page>
  )
}