import commonActionTypes from './action-types'

export function getWhatever(value) {
    return {
        type: commonActionTypes.GET_ALL_WHATEVER,
        payload: value
    }
}

export function getWhateverSuccess(value) {
    return {
        type: commonActionTypes.GET_ALL_WHATEVER_SUCCESS,
        payload: value
    }
}

export function getWhateverFail(value) {
    return {
        type: commonActionTypes.GET_ALL_WHATEVER_FAIL,
        payload: value
    }
}



