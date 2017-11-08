import styled from 'styled-components'
import {h} from 'preact'

const Palette = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 10px);
  margin: 0 0 20px 0;
`

const ColorTitle = styled.div`
  padding: 6px 10px 8px 10px;
  font-size: 0.8em;
  display: block;
  background: #1e2329;
  color: #cccccc;

  p{
    line-height: 1.4em;
    margin: 0;
  }
`

const ColorWrapper = styled.div`
  width: calc(100%/5 - 10px);
  height: 150px;
  margin: 0 10px 10px 0;
  border: solid #1e2329 5px;
  border-radius: 5px;
  background: ${props => props.bg};
  border-top: none;

  @media (max-width: 1200px) { width: calc(100%/4 - 10px); }
  @media (max-width: 1000px) { width: calc(100%/3 - 10px); }
  @media (max-width: 850px) { width: calc(100%/2 - 10px); }
  @media (max-width: 400px) { width: calc(100%/1 - 10px); }
`

const Color = ({children, ...props}) => (
  <ColorWrapper bg={ props.name } >
    <ColorTitle>
      <p>{ props.name }</p>
      <p>{ props.var || '$no-variable' }</p>
    </ColorTitle>
  </ColorWrapper>
)

export {
  Palette,
  Color
}
