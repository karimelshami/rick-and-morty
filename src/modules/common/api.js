import { api, Urls } from 'utils'

export function getAllCharacters() {
  return api.get(Urls.getAllCharacters)
}
