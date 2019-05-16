import { fork, put, take, call, select, all } from 'redux-saga/effects'

import {
  getUsers
} from './service'
import { actionTypes as at } from './constants'
import { 
  fetchUserSuccess,
  fetchUserFail
} from './actions'

import { selectSearchId } from './selectors'

export function* handleFetchUser() {
  try {
    const searchId = yield select(selectSearchId)
    const users = yield call(getUsers, searchId)
    if (!searchId) {
      if (users.length > 0) {
        yield put(fetchUserSuccess(users))
      } else {
        yield put(fetchUserFail('User(s) not found from api/'))
      }
    } else {
      if (users.id) {
        yield put(fetchUserSuccess([users]))
      } else {
        yield put(fetchUserFail('User(s) not found from api/'))
      }
    }
  } catch (err) {
    yield put(fetchUserFail('Could not fetch user(s) from api/'))
  }
}

function* watchFetchUser() {
  while (true) {
    yield take(at.USER_FETCH)
    yield fork(handleFetchUser)
  }
}

function* watchUserActions () {
  yield all([
    fork(watchFetchUser)
  ])
}

export default [
  watchUserActions
]
