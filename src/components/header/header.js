import styled from 'styled-components'
import {h, render, Component} from 'preact'
import styleGuide from 'style.guide'
import {MenuButton} from 'components/menu/menu'

const HeaderWrapper = styled.header`
  height: 60px;
  border-bottom: solid ${styleGuide.borderColor} 1px;
`

const HeaderInside = styled.div`
  max-width: 1200px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  padding: 0 10px 0 10px;
`

const Logo = styled.div`
  align-self: center;
  margin: 0 auto;

  img{
    height: 35px;
    display: block;
  }
`

const Header = () => (
  <HeaderWrapper>
    <HeaderInside>
      <Logo>
        <img src="assets/lifestyle.svg" alt="logo"/>
      </Logo>
    </HeaderInside>
  </HeaderWrapper>
)

export default Header
