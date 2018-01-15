import { h } from 'preact';
import Alert from '../alert.js'
import render from 'preact-render-to-string'

describe('Alert suite', () => {
  it('Should define Alert component type info', () => {
    const info = render(<Alert type='info'> this is my info alert </Alert>)

    expect(info).toMatch('div')
    expect(info).toMatch('i')
    expect(info).toMatch('this is my info alert')
  })

  it('Should define Alert component type error', () => {
    const info = render(<Alert type='error'> this is my error alert </Alert>)
    expect(info).toMatch('this is my error alert')
  })

  it('Should define Alert component type warn', () => {
    const info = render(<Alert type='warn'> this is my warn alert </Alert>)
    expect(info).toMatch('this is my warn alert')
  })

  it('Should define Alert component type success', () => {
    const info = render(<Alert type='success'> this is my success alert </Alert>)
    expect(info).toMatch('this is my success alert')
  })
})
