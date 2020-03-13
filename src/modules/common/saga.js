import { takeLatest, call, put } from 'redux-saga/effects'
import { commonActions, commonActionTypes, commonApi } from 'modules/common'

function* getWhateverSaga() {
  try {
    const response = yield call(commonApi.getWhatever)
    yield put(commonActions.getWhateverSuccess(response.data))
  } catch (error) {
    yield put(commonActions.getWhateverFail())
  }
}

function* commonSagas() {
  yield takeLatest(commonActionTypes.GET_ALL_WHATEVER, getWhateverSaga)
}

export default commonSagas
