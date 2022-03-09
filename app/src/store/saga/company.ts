// @ts-nocheck
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

import * as api from '../api/company'
import { constants } from '../modules/company'


function* fetchAllCompany(action: () => any): SagaIterator  {
  try {
    const payload = yield call(api.fetchAllCompany)
    yield put({ type: constants.FETCH_ALL_COMPANY.SUCCESS, payload })
    action.next && action.next(payload)
  } catch (e) {
    yield put({
      type: constants.FETCH_ALL_COMPANY.FAILED,
      error: true,
      errorMessage: e
    })
  }
}

function* watchFetchAllCompany() {
  yield takeLatest(constants.FETCH_ALL_COMPANY.ACTION, fetchAllCompany)
}

export function* rootSaga() {
  yield all([
    fork(watchFetchAllCompany),
  ])
}
