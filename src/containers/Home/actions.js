import { createAction } from 'redux-actions'
import { actionTypes as at } from './constants'

const fetchUser = createAction(
  at.USER_FETCH,
  (searchId) => searchId
  )

const fetchUserSuccess = createAction(
  at.USER_FETCH_SUCCESS,
  (users) => users
)

const fetchUserFail = createAction(
  at.USER_FETCH_FAIL,
  (text) => text
)

export {
  fetchUser,
  fetchUserSuccess,
  fetchUserFail
}