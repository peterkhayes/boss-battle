// @flow
import type { ReduxMiddleware } from './store';
import { advanceMinigame } from './actions';

const CODE = 'llamas';

const syncMiddleware: ReduxMiddleware = (store) => {
  let codeProgress = '';

  window.addEventListener('keypress', (e) => {
    const updatedProgress = codeProgress + e.key;
    if (updatedProgress === CODE) {
      store.dispatch(advanceMinigame());
    } else if (CODE.startsWith(updatedProgress)) {
      codeProgress = updatedProgress;
    } else {
      codeProgress = '';
    }
  });

  // $FlowFixMe
  return (next) => (action) => next(action);
};

export default syncMiddleware;
