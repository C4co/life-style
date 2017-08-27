import styled from 'styled-components'
import {h, render, Component} from 'preact'
import Center from 'components/center/center'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import Content from 'components/content/content'
import {Menu} from 'components/menu/menu'

const PageHeader = styled.section`
  margin: 0 0 60px 0;
`

const PageTitle = styled.h1`
  font-size: 2em;
  text-transform: uppercase;
  margin: 0 0 10px 0;
`

const PageDescription = styled.p`
  margin: 0 auto;
  font-style: italic;
`

const Page = ({children, ...props}) => (
  <main>
    <Header/>
    <Center>
      <Menu />
      <Content>
        <PageHeader>
          <PageTitle> { props.title } </PageTitle>
          <PageDescription> { props.description } </PageDescription>
        </PageHeader>
        { children }
      </Content>
    </Center>
    <Footer/>
  </main>
)

export default Page
