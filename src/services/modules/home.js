import jyRequest from '../request'

export function getHomeHotSuggests() {
  return jyRequest.get({
    url: '/home/hotSuggests'
  })
}
