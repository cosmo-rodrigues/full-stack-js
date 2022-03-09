// @ts-nocheck
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

import * as api from '../api/users'
import { constants } from '../modules/users'


function* fetchAllUsers(action: () => any): SagaIterator  {
  try {
    const payload = yield call(api.fetchAllUsers)
    yield put({ type: constants.FETCH_ALL_USERS.SUCCESS, payload })
    action.next && action.next(payload)
  } catch (e) {
    yield put({
      type: constants.FETCH_ALL_USERS.FAILED,
      error: true,
      errorMessage: e
    })
  }
}

function* watchFetchAllUsers() {
  yield takeLatest(constants.FETCH_ALL_USERS.ACTION, fetchAllUsers)
}

export function* rootSaga() {
  yield all([
    fork(watchFetchAllUsers),
  ])
}
