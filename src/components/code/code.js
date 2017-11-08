import 'highlight.js/styles/github.css'
import hljs from 'highlight.js'
import {h, render, Component} from 'preact'
import styled from 'styled-components'
import styleGuide from 'style.guide'

const CodeBlockWrapper = styled.div`
  border: solid ${styleGuide.borderColor} 1px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 0 20px 0;
  background: ${styleGuide.contrast};

  pre{
    margin: 0;
    font-size: 0.9em;
    padding: 0 15px 15px 15px;
    overflow: auto;
  }
`

const CodeBlockTitle = styled.p`
  background: ${styleGuide.contrast};
  border-bottom: solid ${styleGuide.borderColor} 1px;
  padding: 5px 15px 5px 15px;
  margin: 0 auto 15px auto;
  font-size: 0.89em;
  display: flex;

  i{
    margin: 3px 10px 0 0;
    font-size: 18px;
  }
`

const CodeLine = styled.span`
  padding: 4px 10px 4px 10px;
  margin: 0 3px 0 3px;
  border-radius: 3px;
  background: ${styleGuide.contrast};
  border: solid ${styleGuide.borderColor} 1px;
  color: #0000ff;
  font-family: monospace;
`

const syntax = children => {
  let code = children

  hljs.configure({
    'languages': [ 'js', 'html', 'css', 'scss', 'xml', 'JSX' ],
  })

  Array.isArray(code)
    ? code = code.join(' ').trim()
    : code = code.trim()

  return hljs.highlightAuto(code).value
}

const CodeBlock = ({children, ...props}) => {
  return (
    <CodeBlockWrapper>
      <CodeBlockTitle> <i class="material-icons">code</i> {props.title || 'example'} </CodeBlockTitle>
      <code>
        <pre dangerouslySetInnerHTML={{__html: syntax(children)}} />
      </code>
    </CodeBlockWrapper>
  )
}

export {
  CodeBlock,
  CodeLine,
  syntax
}
