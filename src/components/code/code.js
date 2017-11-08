import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'
import {h, render, Component} from 'preact'
import styled from 'styled-components'

const CodeBlockWrapper = styled.div`
  background-color: #1e2329;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 0 20px 0;

  pre{
    color: #96aece;
    margin: 0;
    font-size: 0.9em;
    padding: 0 15px 15px 15px;
    overflow: auto;
  }
`

const CodeBlockTitle = styled.p`
  background: #2e353e;
  padding: 5px 15px 5px 15px;
  margin: 0 auto 15px auto;
  font-size: 0.89em;
  display: flex;
  color: #bcd4f6;

  i{
    margin: 3px 10px 0 0;
    font-size: 18px;
  }
`

const CodeLine = styled.span`
  padding: 4px 5px 4px 5px;
  margin: 0 3px 0 3px;
  border-radius: 3px;
  background: #e9e9e9;
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
