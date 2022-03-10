// @ts-nocheck
import { createSagaAction } from '../../shared/sagas';
import { createReducer } from '../../shared/createReducer';

export const constants = {
  FETCH_ALL_USERS_FAKER: createSagaAction('FETCH_ALL_USERS_FAKER'),
  FETCH_USER_FAKER: createSagaAction('FETCH_USER_FAKER'),
};

export const actions = {
  fetchAllUsersFaker: (next) => ({
    type: constants.FETCH_ALL_USERS_FAKER.ACTION,
    next,
  }),
  fetchUserByIdFaker: (id, next) => ({
    type: constants.FETCH_ALL_USERS_FAKER.ACTION,
    id,
    next,
  }),
};

const ACTION_HANDLERS = {
  // FETCH_ALL_USERS_FAKER
  [constants.FETCH_ALL_USERS_FAKER.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.FETCH_ALL_USERS_FAKER.SUCCESS]: (state, action) => {
    const data = Object.assign([], action.payload);
    return {
      ...state,
      data,
      isLoading: false,
    };
  },
  [constants.FETCH_ALL_USERS_FAKER.FAILED]: (state, action) => {
    return { ...state, error: true, errorMessage: action.errorMessage, isLoading: false };
  },

  // FETCH_USER_FAKER
  [constants.FETCH_USER_FAKER.ACTION]: (state) => {
    return { ...state, error: false, isLoading: true };
  },
  [constants.FETCH_USER_FAKER.SUCCESS]: (state, action) => {
    console.log('action: ', action);
    return {
      ...state,
      data: action,
      isLoading: false,
    };
  },
  [constants.FETCH_USER_FAKER.FAILED]: (state, action) => {
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
