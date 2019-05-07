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

        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="sample3" name="email" onChange={this.handleChange} />
          <label className="mdl-textfield__label" for="sample3">Email</label>
        </div>
        <br />
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="password" id="sample4" name="password" onChange={this.handleChange} />
          <label className="mdl-textfield__label" for="sample4">Password</label>
        </div>
        <div>
          <button className="mdl-button mdl-js-button mdl-button--raised" type="submit">{this.props.title}</button>
        </div>
      </form>
    )
  }
}

export default LoginForm
