import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className='title'>{this.props.title}</h1>

        <div className="field">
          <label className="label" htmlFor="email">Email</label>
          <input className="input" name="email" type="text" onChange={this.handleChange} />
        </div>

        <div className="field">
          <label className="label">Password</label>
          <input className="input" name="password" type="password" onChange={this.handleChange} />
        </div>

        <button className="button is-primary" type="submit">{this.props.title}</button>

      </form>
    )
  }
}

export default LoginForm
