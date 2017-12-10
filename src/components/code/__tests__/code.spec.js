import { h } from 'preact';
import {CodeBlock, CodeLine, syntax} from '../code.js'
import render from 'preact-render-to-string'

describe('Code suite', () => {
  it('Should define CodeBlock component', () => {
    const codeBlock = render(
      <CodeBlock title='code'>
        {`console.log('hello world!')`}
      </CodeBlock>
    )

    expect(codeBlock).toMatch('div')
    expect(codeBlock).toMatch('span')
    expect(codeBlock).toMatch('pre')
    expect(codeBlock).toMatch('code')
    expect(codeBlock).toMatch('hljs-built_in')
    expect(codeBlock).toMatch('hello world')
  })

  it('Should define CodeLine component', () => {
    const codeLine = render(<CodeLine> npm start </CodeLine>)

    expect(codeLine).toMatch('span')
    expect(codeLine).toMatch('npm start')
  })

  it('Should define syntax hightlight configuration', () => {
    const codeProcessed = syntax(`console.log('hello')`)

    expect(codeProcessed).toMatch('span')
    expect(codeProcessed).toMatch('class')
    expect(codeProcessed).toMatch('hljs-built_in')
    expect(codeProcessed).toMatch('hljs-string')
    expect(codeProcessed).toMatch('console')
    expect(codeProcessed).toMatch('log')
  })
})
