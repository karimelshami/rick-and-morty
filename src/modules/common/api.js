import { api, Urls } from 'utils'

export function getAllCharacters(payload) {
  return api.get(`${Urls.getAllCharacters}?page=${payload.payload}`)
}
