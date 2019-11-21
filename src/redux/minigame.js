// @flow
import type { ReduxMiddleware } from './store';
import { advanceMinigame } from './actions';
import { MINIGAME_CODE } from '../config/minigame';

const minigameMiddleware: ReduxMiddleware = (store) => {
  let codeProgress = '';

  window.addEventListener('keypress', (e) => {
    const updatedProgress = codeProgress + e.key;
    if (updatedProgress === MINIGAME_CODE) {
      store.dispatch(advanceMinigame());
    } else if (MINIGAME_CODE.startsWith(updatedProgress)) {
      codeProgress = updatedProgress;
    } else {
      codeProgress = '';
    }
  });

  // $FlowFixMe
  return (next) => (action) => next(action);
};

export default minigameMiddleware;
