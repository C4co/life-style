import { h } from 'preact';
import {Color, Pallet} from '../color.js'
import render from 'preact-render-to-string'

describe('Example suite', () => {
  it('Should define Example component', () => {
    const colors = render(
      <Pallet title='new pallet'>
        <Color name='#000' var='$first-color'></Color>
        <Color name='#fff' var='$second-color'></Color>
      </Pallet>
    )

    expect(colors).toMatch('#000')
    expect(colors).toMatch('#fff')
    expect(colors).toMatch('h1')
    expect(colors).toMatch('new pallet')
    expect(colors).toMatch('$first-color')
    expect(colors).toMatch('$second-color')
    expect(colors).toMatch('div')
    expect(colors).toMatch('<i class="material-icons">')
  })
})
