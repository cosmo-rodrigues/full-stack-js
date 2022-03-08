import { all, fork } from 'redux-saga/effects';

// import { rootSaga as address } from './address'
// import { rootSaga as company } from './company'
// import { rootSaga as posts } from './posts'
import { rootSaga as users } from './users';

function* rootSaga() {
  yield all([
    // fork(address),
    // fork(company),
    // fork(posts),
    fork(users),
  ]);
}

export default rootSaga;
