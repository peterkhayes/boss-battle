// @flow
import type { ReduxMiddleware } from './store';
import { getSavedState, saveState } from './state';
import { syncState } from './actions';
import isEqual from 'lodash/isEqual';

const syncMiddleware: ReduxMiddleware = (store) => {
  window.addEventListener('storage', () => {
    const state = getSavedState();
    if (!isEqual(store.getState(), state)) {
      store.dispatch(syncState(state));
    }
  });

  return (next) => (action) => {
    const result = next(action);
    saveState(store.getState());

    // $FlowFixMe - hmmm
    return result;
  };
};

export default syncMiddleware;
