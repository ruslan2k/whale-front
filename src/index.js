import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'
import 'material-design-lite/material.css'
import 'material-design-lite'
import VConsole from 'vconsole'

const vConsole = new VConsole()

const todoApp = (state = [], action) => state
const store = createStore(todoApp, ['Use Redux'])

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
