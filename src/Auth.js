import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const Auth = {

  agent: axios.create({
    baseURL: process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : 'http://localhost/api'
  }),

  updateAgent () {
    if (this.getToken()) {
      this.agent.defaults.headers.common['Authorization'] = 'Token ' + this.getToken();
    }
  },

  get (path) {
    return this.agent.get(path);
  },

  isAuthenticated () {
    return localStorage.getItem("user") ? true : false;
  },

  getName () {
    let user = localStorage.getItem("user");
    return user ? JSON.parse(user)["username"] : false;
  },

  getToken () {
    let user = localStorage.getItem("user");
    return user ? JSON.parse(user)["token"] : false;
  },

  register (cb, email, password) {
    this.agent.post('/users', {user: {
      // username: username,
      email: email,
      password: password
    }})
      .then((resp) => {
        let user = resp.data.user;
        localStorage.setItem('user', JSON.stringify(user));
        cb(null);
      })
      .catch((err) => {
        console.error(err);
        cb(err);
      });
  },

  authenticate (cb, email, password) {
    this.agent.post('/users/login',
      {user: {
        email: email,
        password: password
    }})
      .then((resp) => {
        let user = resp.data.user;
        localStorage.setItem('user', JSON.stringify(user));
        this.updateAgent();
        cb(null);
      })
      .catch((err) => {
        console.error(err);
        cb(err);
      });
  },

  singout (cb) {
    localStorage.removeItem("user");
    this.agent.defaults.headers.common = {}
    cb();
  },
};

Auth.updateAgent();

export default Auth;
