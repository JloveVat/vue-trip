import jyRequest from '../request'

export function getHomeHotSuggests() {
  return jyRequest.get({
    url: '/home/hotSuggests'
  })
}

export function getHomeCategories() {
  return jyRequest.get({
    url: '/home/categories'
  })
}

export function getHomeHouseList(currentPage = 1) {
  return jyRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}
