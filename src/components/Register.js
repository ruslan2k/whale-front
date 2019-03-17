import React from 'react'
import LoginForm from './LoginForm'
import Auth from '../Auth'

const Register = (props) => {

  const handleSubmit = (values) => {
    const { email, password } = values
    console.log('success', values)
    Auth.register(err => {
      if (err) {
        console.log(err)
        return
      }
      props.history.push('/')
    }, email, password)
  }

  return <LoginForm handleSubmit={handleSubmit} title='Register' />
}

export default Register
