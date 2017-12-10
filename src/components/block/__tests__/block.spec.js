import { h } from 'preact';
import Block from '../block.js'
import render from 'preact-render-to-string'

describe('Block suite', () => {
  it('Should define Block component', () => {
    const block = render(<Block title='block title'> block content </Block>)

    expect(block).toMatch('div')
    expect(block).toMatch('h6')
    expect(block).toMatch('block title')
    expect(block).toMatch('block content')
  })
})
