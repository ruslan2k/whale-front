import React from 'react'
import PropTypes from 'prop-types'
import { Link, HashRouter as Router, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Cameras from './components/Cameras';

const rootReducer = state => state
const store = createStore(rootReducer)

const Menu = () => {
  return (
    <div>
      <Link className='button is-link' to='/'>Home</Link>
      <Link className='button is-link' to='/register'>Register</Link>
      <Link className='button is-link' to='/login'>Login</Link>
      <Link className='button is-link' to='/logout'>Logout</Link>
    </div>
  )
}

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Menu />
        <Route exact path='/' component={App} />
        <Route path='/cameras' component={Cameras} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
      </div>
    </Router>
  </Provider>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default Root
