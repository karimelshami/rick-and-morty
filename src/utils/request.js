import axios from 'axios'

export const get = (url, params, headers) => {
  if (url) {
    const config = {
      headers,
      params
    }

    const promise = axios.get(url, config)
    promise.catch(error => {
      console.log(error)
    })

    return promise
  }
}

export const post = (url, params, headers) => {
  if (url) {
    const config = {
      headers
    }

    const promise = axios.post(url, params, config)
    promise.catch(error => {
      console.log(error)
    })

    return promise
  }
}
