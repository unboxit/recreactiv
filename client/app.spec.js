import React from 'react'
import ReactDOM from 'react-dom'
import {createRenderer} from 'react-addons-test-utils'

import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import App from './app.js'

describe('App', () => {
  it('shallow rendering works', () => {
    let renderer = createRenderer()
    renderer.render(<App name="Recreactive"/>)
    let actualElement = renderer.getRenderOutput()
    let expectedElement = <span>Hello from Recreactive</span>
    expect(actualElement).toEqualJSX(expectedElement)
  })
})
