import styled from 'styled-components'
import {h} from 'preact'
import styleGuide from 'style.guide'

const FooterWrapper = styled.footer`
  display: flex;
  height: 80px;
  justify-contente: center;
  align-items: center;
  text-align: center;
`

const FooterInside = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px 0 10px;

  p{
    width: 100%;
    margin: 0 auto;
    font-size: 0.87em;
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterInside>
      <p> Life style is designed and coded by Carlos Costa </p>
    </FooterInside>
  </FooterWrapper>
)

export default Footer