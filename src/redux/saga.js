import { all, fork } from 'redux-saga/effects'
import { commonSagas } from 'modules/common'

const sagas = [commonSagas]

export default function* rootSaga() {
  // eslint-disable-next-line array-callback-return
  yield all(
    sagas.map(saga => {
      if (saga) return fork(saga)
    })
  )
}
