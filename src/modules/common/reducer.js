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
            status: status.FETCHING,
            results: [...state.characters.results]
          }
        }
      }
    case commonActionTypes.GET_CHARACTER_BY_NAME_SUCCESS:
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
    case commonActionTypes.GET_CHARACTER_BY_NAME_FAIL:
      return {
        ...state,
        ...{
          characters: {
            status: status.FAIL
          }
        }
      }

    case commonActionTypes.GET_EPISODES:
      return {
        ...state,
        ...{
          episodes: {
            status: status.FETCHING,
            results: [...payload]
          }
        }
      }
    case commonActionTypes.GET_EPISODES_SUCCESS:
      return {
        ...state,
        ...{
          episodes: {
            status: status.SUCCESS,
            results: [...payload]
          }
        }
      }
    case commonActionTypes.GET_EPISODES_FAIL:
      return {
        ...state,
        ...{
          episodes: {
            status: status.FAIL
          }
        }
      }
    case commonActionTypes.CLEAR_ALL_CHARACTERS:
      return {
        ...state,
        ...{
          characters: {
            status: 'Characters state has been cleared',
            info: {},
            results: []
          }
        }
      }
    case commonActionTypes.SET_PAGE:
      return {
        ...state,
        ...{
          page: payload
        }
      }
    case commonActionTypes.SET_CHARACTER_NAME:
      return {
        ...state,
        ...{
          characterName: payload
        }
      }
    default:
      return state
  }
}
