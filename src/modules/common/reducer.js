import { commonInitialState } from 'redux/initialStates'
import { commonActionTypes } from 'modules/common'
import { constants } from 'utils'

const { status } = constants;

export function commonReducer(state = commonInitialState, { payload, type }) {
    switch (type) {
        case commonActionTypes.GET_ALL_WHATEVER:
            return {
                ...state,
                ...{
                    allWhatever: {
                        status: status.FETCHING
                    }
                },
            }
        case commonActionTypes.GET_ALL_WHATEVER_SUCCESS:
            return {
                ...state,
                ...{
                    allWhatever: {
                        status: status.SUCCESS,
                        ...payload
                    }
                },
            };
        case commonActionTypes.GET_ALL_WHATEVER_FAIL:
            return {
                ...state,
                ...{
                    allWhatever: {
                        status: status.FAIL,
                    }
                },
            };
        default:
            return state;
    }
} 