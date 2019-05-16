import { createSelector } from 'reselect'

const selectUserDomain = (state) => state.homeReducer
const selectSearchId = createSelector(selectUserDomain, (ps) => ps.searchId)
const selectUser = createSelector(selectUserDomain, (ps) => ps)
const selectUsers = createSelector(selectUser, (pr) => pr.users)
const selectErrorMessage = createSelector(selectUserDomain, (user) => user.errorMessage)
const selectIsLoading = createSelector(selectUserDomain, (user) => user.isLoading)

export {
  selectUser,
  selectUsers,
  selectSearchId,
  selectErrorMessage,
  selectIsLoading
}
