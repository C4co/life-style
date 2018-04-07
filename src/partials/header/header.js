import styled from 'styled-components'
import {h, render, Component} from 'preact'
import styleGuide from '../../style.guide'
import {MenuButton} from '../menu/menu'
import lifeStyleLogo from '../../../assets/lifestyle.svg'

const HeaderWrapper = styled.header`
  height: 60px;
  background: ${styleGuide.primaryColor};
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
        <img src={lifeStyleLogo} alt="logo"/>
      </Logo>
    </HeaderInside>
  </HeaderWrapper>
)

export default Header
