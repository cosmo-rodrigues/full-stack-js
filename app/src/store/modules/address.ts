// @ts-nocheck
import { createSagaAction } from '../../shared/sagas';
import { createReducer } from '../../shared/createReducer';

export const constants = {
  FETCH_ALL_ADDRESS: createSagaAction('FETCH_ALL_ADDRESS'),
};

export const actions = {
  fetchAllAddress: (next: () => void) => ({
    type: constants.FETCH_ALL_ADDRESS.ACTION,
    next,
  }),
};

const ACTION_HANDLERS = {
  [constants.FETCH_ALL_ADDRESS.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.FETCH_ALL_ADDRESS.SUCCESS]: (state, action) => {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  },
  [constants.FETCH_ALL_ADDRESS.FAILED]: (state, action) => {
    return { ...state, error: true, errorMessage: action.errorMessage, isLoading: false };
  },
};

export const initialState = {
  error: false,
  errorMessage: '',
  isLoading: false,
};

export default createReducer(initialState, (state, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : { ...state, isLoading: false };
});
