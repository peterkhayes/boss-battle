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
import { sounds, playSound, playSounds } from '../utils/sounds';
import sample from 'lodash/sample';

const soundsMiddleware: ReduxMiddleware = (store) => (next) => (action) => {
  const previousState = store.getState();
  const result = next(action);
  const currentState = store.getState();

  // Ignore sync actions, since the sound will play in another window.
  // $FlowFixMe - hmmm
  if (action.type === 'sync_state') return result;

  if (
    action.type === 'start_game' ||
    action.type === 'confirm_name' ||
    action.type === 'select_weapon' ||
    action.type === 'select_boss'
  ) {
    playSound(sounds.punch, 0.8);
  }

  if (action.type === 'change_weapon' || action.type === 'change_boss') {
    playSound(sounds.swoosh, 0.7);
  }

  if (previousState.attack == null && currentState.attack != null) {
    playSound(sounds.punch, 0.8);
  }

  if (previousState.stage === 'fight' && currentState.stage === 'fight') {
    if (gameEndedHappy(previousState, currentState)) {
      playSounds([
        sounds.victory_horns,
        sample(currentState.boss.sounds.mutual),
        sounds.cheering,
      ]);
    } else if (playerDefeated(previousState, currentState)) {
      playSounds([
        sounds.victory_horns,
        sample(currentState.boss.sounds.victory),
        sounds.cheering,
      ]);
    } else if (bossDefeated(previousState, currentState)) {
      playSounds([
        sounds.victory_horns,
        sample(currentState.boss.sounds.defeat),
        sounds.cheering,
      ]);
    } else if (playerVibesWentUp(previousState, currentState)) {
      playSound(sample(currentState.player.sounds.good));
    } else if (playerVibesWentDown(previousState, currentState)) {
      playSound(sample(currentState.player.sounds.bad));
    } else if (bossVibesWentUp(previousState, currentState)) {
      playSound(sample(currentState.boss.sounds.good));
    } else if (bossVibesWentDown(previousState, currentState)) {
      playSound(sample(currentState.boss.sounds.bad));
    }
  }

  // $FlowFixMe - hmmm
  return result;
};

export default soundsMiddleware;
