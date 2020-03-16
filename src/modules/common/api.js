import { api, Urls } from 'utils'

export function getAllCharacters(payload) {
  return api.get(`${Urls.getCharacters}?page=${payload.payload}`)
}

export function getCharacterByName(payload) {
  return api.get(`${Urls.getCharacters}?name=${payload.payload.name}&page=${payload.payload.page}`)
}
