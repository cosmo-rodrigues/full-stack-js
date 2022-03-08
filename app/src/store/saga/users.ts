import { all, fork, call, put, takeLatest, CallEffect, StrictEffect, PutEffect } from 'redux-saga/effects'

import {store} from '../store'
import * as api from '../api/users'
import { constants } from '../modules/users'
import { actions as userActions } from '../modules/users'
import { SagaIterator } from 'redux-saga'


function* fetchUsers(action: () => any): SagaIterator  {
  try {
    const payload = yield call(api.fetchAll)
    yield put({ type: constants.FETCH_USERS.SUCCESS, payload })
    action.next && action.next(payload)
  } catch (e) {
    yield put({
      type: constants.FETCH_USERS.FAILED,
      error: true,
      errorMessage: e.message || e
    })
  }
}

function* watchFetchUsers() {
  yield takeLatest(constants.FETCH_USERS.ACTION, fetchUsers)
}

export function* rootSaga() {
  yield all([
    fork(watchFetchUsers),
  ])
}
