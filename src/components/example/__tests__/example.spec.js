import { h } from 'preact';
import Example from '../example.js'
import render from 'preact-render-to-string'

describe('Example suite', () => {
  it('Should define Example component', () => {
    const code = `console.log('hello world!')`
    const example = render(
      <Example title='title' code={code} />
    )

    expect(example).toMatch('div')
    expect(example).toMatch('pre')
    expect(example).toMatch('<i class="material-icons">')
    expect(example).toMatch('hello world')
    expect(example).toMatch('hljs-built_in')
  })
})
