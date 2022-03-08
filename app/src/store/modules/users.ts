import { createSagaAction } from '../../shared/sagas'
import { createReducer } from '../../shared/createReducer'

export const constants = {
  FETCH_USERS: createSagaAction('FETCH_USERS'),
}

export const actions = {
  fetchUsers: (next: () => void) => ({
    type: constants.FETCH_USERS.ACTION,
    next
  }),
}

const ACTION_HANDLERS = {
  // FETCH_USERS
  [constants.FETCH_USERS.ACTION]: state => {
    return { ...state, error: false, isLoading: true }
  },
  [constants.FETCH_USERS.SUCCESS]: (state, action) => {
    //
    // workaround to separate pagination info
    var pagination = Object.assign({}, action.payload);
    delete pagination.data;

    return {
      ...state,
      data: action.payload.data,
      pagination: pagination,
      isLoading: false
    }
  },
}

export const initialState = {
  error: false,
  errorMessage: '',
  isLoading: false
}

export default createReducer(initialState, (state, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : { ...state, isLoading: false }
})
