import { takeLatest, call, put } from 'redux-saga/effects'
import { commonActions, commonActionTypes, commonApi } from 'modules/common'
import Cookies from 'js-cookie'

export function* getAllCharactersSaga(payload) {
  try {
    const response = yield call(commonApi.getAllCharacters, payload)
    yield put(commonActions.getAllCharactersSuccess(response.data))
  } catch (error) {
    yield put(commonActions.getAllCharactersFail())
  }
}

export function* getCharacterByNameSaga(payload) {
  // TODO: correct reccomend spelling in all the project
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

export function* getCharacterBySpeciesSaga(payload) {
  try {
    const response = yield call(commonApi.getCharacterBySpecies, payload)
    yield put(commonActions.getCharacterBySpeciesSuccess(response.data))
  } catch (error) {
    yield put(commonActions.getCharacterBySpeciesFail())
  }
}

export function* getEpisodesByIdsSaga(payload) {
  try {
    const response = yield call(commonApi.getEpisodesByIds, payload)
    let responseArray = response.data
    if (!response.data.length) {
      responseArray = []
      responseArray[0] = response.data
    }
    yield put(commonActions.getEpisodesSuccess(responseArray))
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
