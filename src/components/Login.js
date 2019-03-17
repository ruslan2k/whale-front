import React from 'react'
import LoginForm from './LoginForm'
import Auth from '../Auth'

const Login = (props) => {

  const handleSubmit = (values) => {
    const { email, password } = values
    Auth.authenticate(err => {
      if (err) {
        console.log(err)
        return
      }
      props.history.push('/')
    }, email, password)
  }

  return <LoginForm handleSubmit={handleSubmit} title='Login' />
}

export default Login
