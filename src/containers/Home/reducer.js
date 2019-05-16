import { handleActions } from 'redux-actions'
import { actionTypes as at } from './constants'

const initialState = {
  searchId: 0,
  errorMessage: undefined,
  isLoading: false,
  users: []
}

const user = handleActions(
  {
    [at.USER_FETCH]: (state, action) => {
      return {
        ...state,
        searchId: action.payload,
        isLoading: true,
        errorMessage: undefined
      }
    },
    [at.USER_FETCH_SUCCESS]: (state, action) => {
      return {
        ...state,
        users: action.payload,
        errorMessage: undefined,
        isLoading: false
      }
    },
    [at.USER_FETCH_FAIL]: (state, action) => {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      }
    }
  },
  initialState
)

export default user
