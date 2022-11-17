import jyRequest from '../request'

export function getCityAll() {
  return jyRequest.get({
    url: '/city/all'
  })
}