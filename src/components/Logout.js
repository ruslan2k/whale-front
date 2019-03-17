import React from 'react'
import Auth from '../Auth'

const Logout = (props) => {
  Auth.singout(() => props.history.push('/'))
  return <h1 className='title'>Logout</h1>
}

export default Logout
