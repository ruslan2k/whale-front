import React from 'react'
import Auth from '../Auth'
import { Link, Route } from 'react-router-dom'

class CameraPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { camera: {}, thumbnail: {}, video: {} }
  }
  componentDidMount() {
    const { match } = this.props
    const uid = match.params.uid
    Auth.get(`cameras/${uid}`)
      .then(({ data }) => this.setState({ camera: data.camera }))
    Auth.get(`thumbnails/camera/${uid}/size/large`)
      .then(({ data }) => this.setState({ thumbnail: data.thumbnail }))
    Auth.get('cameras/info')
      .then(({ data }) => {
        let model = this.state.camera.model
        this.setState({ video: data.models[model] })
    })
  }
  render() {
    const { match } = this.props
    const { camera, thumbnail, video } = this.state
    const btnColor = camera.is_online ? ' is-success' : ' is-dark'
    return (
      <div>
        <a className={`button is-large ${btnColor}`}>{camera.name}</a>
        <code>{JSON.stringify(video)}</code>
        {/*
        <div>{`match.url: ${match.url}`}</div>
        <div>{`match.path: ${match.path}`}</div>
        <div>{`match.params.uid: ${match.params.uid}`}</div>
        */}
        <img src={thumbnail.url} />
      </div>
    )
  }
}

class CameraItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { item: props.item, thumbnail: {} }
  }

  componentDidMount() {
    const { uid } = this.state.item
    Auth.get(`thumbnails/camera/${uid}/size/large`)
      .then(({ data }) => {
        this.setState({ thumbnail: data.thumbnail })
      })
  }

  render() {
    const { item, thumbnail } = this.state
    const uid = item.uid
    const btnColor = item.is_online ? ' is-success' : ' is-dark'
    return (
      <div className='column'>
        <Link to={`/cameras/${uid}`} className={`button ${btnColor}`}>{item.name}</Link>
        <figure className="image">
          <img src={thumbnail.url} />
        </figure>
      </div>
    )
  }
}

class CamerasPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'cameras',
      items: []
    }
  }

  componentDidMount() {
    const { name } = this.state
    const update = () => {
      Auth.get('cameras')
        .then(({ data }) => {
          this.setState({items: data['cameras']})
        })
        .catch(err => console.error(err))
    }
    update()
    this.timerId = setInterval(update, 30 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    const { items, name } = this.state
    const listItems = items.map((i, k) => {
      return <CameraItem key={k} item={i} />
    })
    return (
      <div>
        <h1 className="title">{name}</h1>
        <div className='columns'>
          {listItems}
        </div>
      </div>
    )
  }
}

class Cameras extends React.Component {
  render() {
    const { match } = this.props
    return (
      <div>
        <Route exact path='/cameras' component={CamerasPage} />
        <Route path={`${match.path}/:uid`} component={CameraPage} />
      </div>
    )
  }
}

export default Cameras