// @ts-nocheck
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

import * as api from '../api/address'
import { constants } from '../modules/address'


function* fetchAllAddress(action: () => any): SagaIterator  {
  try {
    const payload = yield call(api.fetchAllAddress)
    yield put({ type: constants.FETCH_ALL_ADDRESS.SUCCESS, payload })
    action.next && action.next(payload)
  } catch (e) {
    yield put({
      type: constants.FETCH_ALL_ADDRESS.FAILED,
      error: true,
      errorMessage: e
    })
  }
}

function* watchFetchAllAddress() {
  yield takeLatest(constants.FETCH_ALL_ADDRESS.ACTION, fetchAllAddress)
}

export function* rootSaga() {
  yield all([
    fork(watchFetchAllAddress),
  ])
}
