export const createReducer =
  (initialState: {}, reducer: (state, action) => void) =>
  (state = initialState, action: () => void) =>
    reducer(state, action) || state;
