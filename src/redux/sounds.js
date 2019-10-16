// @flow
import type { ReduxMiddleware } from './store';
import type { Sound, SoundCategory } from '../types/Sound';
// import type { Fighter } from '../types/Fighter';
import sample from 'lodash/sample';
import {
  eitherPlayerVibesWentUp,
  eitherPlayerVibesWentDown,
  gameEndedSad,
  gameEndedHappy,
} from '../utils/fighting.js';
import * as sounds from '../config/sounds';

const soundList = Object.keys(sounds).map((name) => sounds[name]);

const soundsMiddleware: ReduxMiddleware = (store) => {
  // Pre-load all sounds
  for (const sound of soundList) {
    playSound(sound, 0);
  }

  return (next) => (action) => {
    const previousState = store.getState();
    const result = next(action);
    const currentState = store.getState();

    if (previousState.stage === 'fight' && currentState.stage === 'fight') {
      if (gameEndedHappy(previousState, currentState)) {
        playSound(sounds.bestFriends);
      } else if (gameEndedSad(previousState, currentState)) {
        playSound(sounds.leavingParty);
      } else if (eitherPlayerVibesWentUp(previousState, currentState)) {
        playSoundFromCategory('boost_vibes');
      } else if (eitherPlayerVibesWentDown(previousState, currentState)) {
        playSoundFromCategory('hurt_vibes');
      }
    }

    // $FlowFixMe - hmmm
    return result;
  };
};

function playSoundFromCategory(category: SoundCategory) {
  const soundsInCategory = soundList.filter((sound) => sound.category === category);
  const sound = sample(soundsInCategory);
  playSound(sound);
}

function playSound(sound: Sound, volume: number = 1) {
  const audio = new Audio(sound.src);
  audio.volume = volume;
  audio.play();
}

export default soundsMiddleware;
