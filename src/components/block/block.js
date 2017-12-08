import styled from 'styled-components'
import {h} from 'preact'
import styleGuide from 'style.guide'

const BlockTitle = styled.h6`
  border-bottom: solid ${styleGuide.borderColor} 1px;
  margin: 0 auto 20px auto;
  padding: 0 0 15px 0;
  text-transform: uppercase;
  font-weight: bold;
`

const BlockContent = styled.div`
`

const BlockWrapper = styled.section`
  margin: 0 0 90px 0;
`

const Block = ({children, ...props}) => (
  <BlockWrapper>
    <BlockTitle> {props.title || 'title'} </BlockTitle>
    <BlockContent> {children} </BlockContent>
  </BlockWrapper>
)

export default Block
