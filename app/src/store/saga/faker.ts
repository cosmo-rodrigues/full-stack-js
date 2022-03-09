// @ts-nocheck
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

import * as api from '../api/users'
import { constants } from '../modules/faker'


function* fetchAllUsersFaker(action: () => any): SagaIterator  {
  try {
    const payload = yield call(api.fetchAllUsersFaker)
    yield put({ type: constants.FETCH_ALL_USERS_FAKER.SUCCESS, payload })
    action.next && action.next(payload)
  } catch (e) {
    yield put({
      type: constants.FETCH_ALL_USERS_FAKER.FAILED,
      error: true,
      errorMessage: e
    })
  }
}

function* watchFetchAllUsersFaker() {
  yield takeLatest(constants.FETCH_ALL_USERS_FAKER.ACTION, fetchAllUsersFaker)
}

export function* rootSaga() {
  yield all([
    fork(watchFetchAllUsersFaker),
  ])
}
