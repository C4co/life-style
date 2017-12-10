import { h } from 'preact';
import Image from '../image.js'
import render from 'preact-render-to-string'

describe('Example suite', () => {
  it('Should define Image component', () => {
    const code = `console.log('hello world!')`
    const example = render(
      <Image src='image-source' />
    )

    expect(example).toMatch('div')
    expect(example).toMatch('h1')
    expect(example).toMatch('image')
    expect(example).toMatch('figure')
    expect(example).toMatch('image-source')
  })
})
