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

function* getCharacterByNameSaga(payload) {
  try {
    const response = yield call(commonApi.getCharacterByName, payload)
    yield put(commonActions.getCharacterByNameSuccess(response.data))
  } catch (error) {
    yield put(commonActions.getCharacterByNameFail())
  }
}

function* commonSagas() {
  yield takeLatest(commonActionTypes.GET_ALL_CHARACTERS, getAllCharactersSaga)
  yield takeLatest(
    commonActionTypes.GET_CHARACTER_BY_NAME,
    getCharacterByNameSaga
  )
}

export default commonSagas
