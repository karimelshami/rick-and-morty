import { initialState } from 'redux/initialState'
import { commonActionTypes } from 'modules/common'
import { constants } from 'utils'

const { status } = constants

export function commonReducer(state = initialState, { payload, type }) {
  switch (type) {
    case commonActionTypes.GET_ALL_CHARACTERS:
      return {
        ...state,
        ...{
          characters: {
            status: status.FETCHING,
            results: [...state.characters.results]
          }
        }
      }
    case commonActionTypes.GET_ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        ...{
          characters: {
            status: status.SUCCESS,
            ...payload,
            results: [...state.characters.results, ...payload.results]
          }
        }
      }
    case commonActionTypes.GET_ALL_CHARACTERS_FAIL:
      return {
        ...state,
        ...{
          characters: {
            status: status.FAIL
          }
        }
      }
    case commonActionTypes.GET_CHARACTER_BY_NAME:
      return {
        ...state,
        ...{
          characters: {
            status: status.FETCHING
          }
        }
      }
    case commonActionTypes.GET_CHARACTER_BY_NAME_SUCCESS:
      return {
        ...state,
        ...{
          characters: {
            status: status.SUCCESS,
            ...payload
          }
        }
      }
    case commonActionTypes.GET_CHARACTER_BY_NAME_FAIL:
      return {
        ...state,
        ...{
          characters: {
            status: status.FAIL
          }
        }
      }
    default:
      return state
  }
}
