import styled from 'styled-components'
import styleGuide from 'style.guide'
import {h} from 'preact'
import {syntax} from 'components/code/code'

const ExampleWrapper = styled.div`
  margin: 0 0 40px 0;
`

const ExampleCenter = styled.section`
  padding: 20px 15px;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 0;
  border: solid ${styleGuide.borderColor} 3px;
  border-bottom: none;
`

const ExampleTitle = styled.h1`
  margin: 0 auto;
  font-size: 0.9em;
  text-transform: capitalize;
  display: flex;
  margin: 0 0 5px 0;

  i{
    font-size: 23px;
    margin: -4px 7px 0 0;
    opacity: 0.3;
  }
`

const ExampleCode = styled.div`
  background: #1e2329;
  border-radius: 0 0 3px 3px;
  padding: 10px 10px 10px 10px;
  color: #96aece;
  font-size: 0.9em;
  line-height: 1.6em;
  font-family: monospace;
  overflow: auto;
`

const showDescription = description => {
  const ExampleDescription = styled.p`
    margin: 0 0 10px 0;
    font-size: 0.9em;
    text-transform: capitalize;
  `
  if (description) {
    return (<ExampleDescription> { description } </ExampleDescription>)
  }
}

const showTitle = title => {
  if(title) {
    return (
      <ExampleTitle>
        <i class="material-icons">visibility</i> { title }
      </ExampleTitle>
    )
  }
}

const showCode = code => {
  if (code) {
    return (
      <ExampleCode>
        <pre dangerouslySetInnerHTML={{__html: syntax(code)}} />
      </ExampleCode>
    )
  }
}

const Example = ({children, ...props}) => {
  return (
    <ExampleWrapper>
      { showTitle(props.title) }
      { showDescription(props.description) }
      <ExampleCenter> {children || 'Inset your example'} </ExampleCenter>
      { showCode(props.code) }
    </ExampleWrapper>
  )
}

export default Example

