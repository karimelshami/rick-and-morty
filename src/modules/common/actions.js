import commonActionTypes from './action-types'
export function getAllCharacters() {
  return {
    type: commonActionTypes.GET_ALL_CHARACTERS,
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
