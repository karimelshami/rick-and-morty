import { all, fork } from 'redux-saga/effects'

const sagas = []

export default function* rootSaga() {
  // eslint-disable-next-line array-callback-return
  yield all(
    sagas.map(saga => {
      if (saga) return fork(saga)
    })
  )
}
