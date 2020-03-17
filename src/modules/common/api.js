import { api, Urls } from 'utils'

export function getAllCharacters(payload) {
  return api.get(`${Urls.getCharacters}?page=${payload.payload}`)
}

export function getCharacterByName(payload) {
  return api.get(
    `${Urls.getCharacters}?name=${payload.payload.name}&page=${payload.payload.page}`
  )
}
export function getCharacterBySpecies(payload) {
  return api.get(
    `${Urls.getCharacters}?species=${payload.payload.species}&page=${payload.payload.page}`
  )
}

export function getEpisodesByIds(payload) {
  return api.get(`${Urls.getEpisodes}/${payload.payload}`)
}
