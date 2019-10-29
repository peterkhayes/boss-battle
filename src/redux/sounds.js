// @flow
import type { ReduxMiddleware } from './store';
import {
  playerVibesWentUp,
  playerVibesWentDown,
  bossVibesWentUp,
  bossVibesWentDown,
  playerDefeated,
  bossDefeated,
  gameEndedHappy,
} from '../utils/fighting.js';
import { playSoundFromList } from '../utils/sounds';

const soundsMiddleware: ReduxMiddleware = (store) => (next) => (action) => {
  const previousState = store.getState();
  const result = next(action);
  const currentState = store.getState();

  if (previousState.stage === 'fight' && currentState.stage === 'fight') {
    if (gameEndedHappy(previousState, currentState)) {
      playSoundFromList(currentState.boss.sounds.mutual);
    } else if (playerDefeated(previousState, currentState)) {
      playSoundFromList(currentState.boss.sounds.victory);
    } else if (bossDefeated(previousState, currentState)) {
      playSoundFromList(currentState.boss.sounds.defeat);
    } else if (playerVibesWentUp(previousState, currentState)) {
      playSoundFromList(currentState.player.sounds.good);
    } else if (playerVibesWentDown(previousState, currentState)) {
      playSoundFromList(currentState.player.sounds.bad);
    } else if (bossVibesWentUp(previousState, currentState)) {
      playSoundFromList(currentState.boss.sounds.good);
    } else if (bossVibesWentDown(previousState, currentState)) {
      playSoundFromList(currentState.boss.sounds.bad);
    }
  }

  // $FlowFixMe - hmmm
  return result;
};

export default soundsMiddleware;
