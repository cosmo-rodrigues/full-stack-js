// @ts-nocheck
import { createSagaAction } from '../../shared/sagas';
import { createReducer } from '../../shared/createReducer';

export const constants = {
  FETCH_ALL_POSTS: createSagaAction('FETCH_ALL_POSTS'),
};

export const actions = {
  fetchAllPosts: (next: () => void) => ({
    type: constants.FETCH_ALL_POSTS.ACTION,
    next,
  }),
};

const ACTION_HANDLERS = {
  [constants.FETCH_ALL_POSTS.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.FETCH_ALL_POSTS.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.FETCH_ALL_POSTS.FAILED]: (state, action) => {
    return { ...state, error: true, errorMessage: action.errorMessage, isLoading: false };
  },
};

export const initialState = {
  error: false,
  errorMessage: '',
  isLoading: false,
};

export default createReducer(initialState, (state, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : { ...state, isLoading: false }
})
