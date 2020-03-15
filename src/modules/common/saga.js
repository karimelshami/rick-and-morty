import { takeLatest, call, put } from 'redux-saga/effects'
import { commonActions, commonActionTypes, commonApi } from 'modules/common'

function* getAllCharactersSaga(payload) {
  try {
    const response = yield call(commonApi.getAllCharacters, payload)
    yield put(commonActions.getAllCharactersSuccess(response.data))
  } catch (error) {
    yield put(commonActions.getAllCharactersFail())
  }
}

function* commonSagas() {
  yield takeLatest(commonActionTypes.GET_ALL_CHARACTERS, getAllCharactersSaga)
}

export default commonSagas
