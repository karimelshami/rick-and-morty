import commonActionTypes from './action-types'
export function getAllCharacters(value) {
  return {
    type: commonActionTypes.GET_ALL_CHARACTERS,
    payload: value
  }
}

export function getAllCharactersSuccess(value) {
  return {
    type: commonActionTypes.GET_ALL_CHARACTERS_SUCCESS,
    payload: value
  }
}

export function getAllCharactersFail(value) {
  return {
    type: commonActionTypes.GET_ALL_CHARACTERS_FAIL,
    payload: value
  }
}

export function getCharacterByName(value) {
  return {
    type: commonActionTypes.GET_CHARACTER_BY_NAME,
    payload: value
  }
}

export function getCharacterBySpeciesSuccess(value) {
  return {
    type: commonActionTypes.GET_CHARACTER_BY_SPECIES_SUCCESS,
    payload: value
  }
}

export function getCharacterBySpeciesFail(value) {
  return {
    type: commonActionTypes.GET_CHARACTER_BY_SPECIES_FAIL,
    payload: value
  }
}
export function getCharacterBySpecies(value) {
  return {
    type: commonActionTypes.GET_CHARACTER_BY_SPECIES,
    payload: value
  }
}

export function getCharacterByNameSuccess(value) {
  return {
    type: commonActionTypes.GET_CHARACTER_BY_NAME_SUCCESS,
    payload: value
  }
}

export function getCharacterByNameFail(value) {
  return {
    type: commonActionTypes.GET_CHARACTER_BY_NAME_FAIL,
    payload: value
  }
}

export function getEpisodes(value) {
  return {
    type: commonActionTypes.GET_EPISODES,
    payload: value
  }
}

export function getEpisodesSuccess(value) {
  return {
    type: commonActionTypes.GET_EPISODES_SUCCESS,
    payload: value
  }
}

export function getEpisodesFail(value) {
  return {
    type: commonActionTypes.GET_EPISODES_FAIL,
    payload: value
  }
}

export function clearAllCharacters() {
  return {
    type: commonActionTypes.CLEAR_ALL_CHARACTERS
  }
}

export function setPage(value) {
  return {
    type: commonActionTypes.SET_PAGE,
    payload: value
  }
}

export function setCharacterName(value) {
  return {
    type: commonActionTypes.SET_CHARACTER_NAME,
    payload: value
  }
}
