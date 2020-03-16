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
