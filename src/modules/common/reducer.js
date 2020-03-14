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
          allCharacters: {
            status: status.FETCHING
          }
        }
      }
    case commonActionTypes.GET_ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        ...{
          allCharacters: {
            status: status.SUCCESS,
            ...payload
          }
        }
      }
    case commonActionTypes.GET_ALL_CHARACTERS_FAIL:
      return {
        ...state,
        ...{
          allCharacters: {
            status: status.FAIL
          }
        }
      }
    default:
      return state
  }
}
