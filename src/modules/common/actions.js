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
