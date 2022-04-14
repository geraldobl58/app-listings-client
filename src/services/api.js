/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie'
import qs from 'qs'

const BASEAPI = 'http://localhost:3333'

const apiFetchPost = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get('token')

    if (token) {
      body.token = token
    }
  }

  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  const json = await res.json()

  if (json.notallowed) {
    window.location.href = '/signin'
    return
  }

  return json
}

const apiFetchGet = async (endpoint, body = []) => {
  if (!body.token) {
    let token = Cookies.get('token')

    if (token) {
      body.token = token
    }
  }

  const res = await fetch(`${BASEAPI}${endpoint}${qs.stringify(body)}`)

  const json = await res.json()

  if (json.notallowed) {
    window.location.href = '/signin'
    return
  }

  return json
}

const api = {
  login: async (email, password) => {
    const json = await apiFetchPost('/user/signin', {
      email,
      password
    })

    return json
  },

  register: async (name, email, password, stateLocation) => {
    const json = await apiFetchPost('/user/signup', {
      name, email, password, state:  stateLocation
    })

    return json
  },

  getStates: async () => {
    const json = await apiFetchGet('/states')

    return json.states
  },


}

export default () => api
