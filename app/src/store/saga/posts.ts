// @ts-nocheck
import { all, call, fork, put, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

import * as api from '../api/posts'
import { constants } from '../modules/posts'


function* fetchAllPosts(action: () => any): SagaIterator  {
  try {
    const payload = yield call(api.fetchAllPosts)
    yield put({ type: constants.FETCH_ALL_POSTS.SUCCESS, payload })
    action.next && action.next(payload)
  } catch (e) {
    yield put({
      type: constants.FETCH_ALL_POSTS.FAILED,
      error: true,
      errorMessage: e
    })
  }
}

function* watchFetchAllPosts() {
  yield takeLatest(constants.FETCH_ALL_POSTS.ACTION, fetchAllPosts)
}

export function* rootSaga() {
  yield all([
    fork(watchFetchAllPosts),
  ])
}
