import { takeLatest, call, put } from 'redux-saga/effects'
import { commonActions, commonActionTypes, commonApi } from 'modules/common'
import Cookies from 'js-cookie'

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
    if (!Cookies.get('reccomended-species')) {
      let species = response.data.results[0].species
      Cookies.set('reccomended-species', species)
    }
  } catch (error) {
    yield put(commonActions.getCharacterByNameFail())
  }
}

function* getCharacterBySpeciesSaga(payload) {
  try {
    const response = yield call(commonApi.getCharacterBySpecies, payload)
    yield put(commonActions.getCharacterBySpeciesSuccess(response.data))
  } catch (error) {
    yield put(commonActions.getCharacterBySpeciesFail())
  }
}

function* getEpisodesByIdsSaga(payload) {
  try {
    const response = yield call(commonApi.getEpisodesByIds, payload)
    yield put(commonActions.getEpisodesSuccess(response.data))
    console.log(response.data)
  } catch (error) {
    yield put(commonActions.getEpisodesFail())
  }
}

function* commonSagas() {
  yield takeLatest(commonActionTypes.GET_ALL_CHARACTERS, getAllCharactersSaga)
  yield takeLatest(
    commonActionTypes.GET_CHARACTER_BY_NAME,
    getCharacterByNameSaga
  )
  yield takeLatest(commonActionTypes.GET_EPISODES, getEpisodesByIdsSaga)
  yield takeLatest(
    commonActionTypes.GET_CHARACTER_BY_SPECIES,
    getCharacterBySpeciesSaga
  )
}

export default commonSagas
