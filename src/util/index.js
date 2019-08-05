import 'whatwg-fetch'

export const get = (url, params) => {
  let newUrl = url
  let count = 0
  if (params) {
    newUrl += '?'
    for (key in params) {
      let value = params[key]
      if (typeof value === 'object') {
        value = JSON.stringify(value)
      }
      count++
      newUrl += ((count > 1 ? '&' : '') + key + '=' + value)
    }
  }
  return fetch(newUrl)
}