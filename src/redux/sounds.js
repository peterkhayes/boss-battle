// @flow
import type { ReduxMiddleware } from './store';
// import type { Fighter } from '../types/Fighter';
import sample from 'lodash/sample';
import {
  eitherPlayerVibesWentUp,
  eitherPlayerVibesWentDown,
  gameEndedSad,
  gameEndedHappy,
} from '../utils/fighting.js';

// TODO: figure this shit out
// $FlowFixMe
import soundHurray1 from '../sounds/hurray_1.mp3';
// $FlowFixMe
import soundSad1 from '../sounds/im_sad_1.mp3';
// $FlowFixMe
import soundNice1 from '../sounds/nice_1.mp3';
// $FlowFixMe
import soundThisSucks1 from '../sounds/this_sucks_1.mp3';
// $FlowFixMe
import soundWow1 from '../sounds/wow_1.mp3';
// $FlowFixMe
import soundBestFriends from '../sounds/best_friends.mp3';
// $FlowFixMe
import soundLeavingParty from '../sounds/leaving_party.mp3';

type Sound = string;

const BOOST_VIBES_SOUNDS = [soundHurray1, soundNice1, soundWow1];
const HURT_VIBES_SOUNDS = [soundSad1, soundThisSucks1];

const soundsMiddleware: ReduxMiddleware = (store) => (next) => (action) => {
  const previousState = store.getState();
  const result = next(action);
  const currentState = store.getState();

  if (previousState.stage === 'fight' && currentState.stage === 'fight') {
    if (gameEndedHappy(previousState, currentState)) {
      playSound(soundBestFriends);
    } else if (gameEndedSad(previousState, currentState)) {
      playSound(soundLeavingParty);
    } else if (eitherPlayerVibesWentUp(previousState, currentState)) {
      playSoundFromList(BOOST_VIBES_SOUNDS);
    } else if (eitherPlayerVibesWentDown(previousState, currentState)) {
      playSoundFromList(HURT_VIBES_SOUNDS);
    }
  }

  // $FlowFixMe - hmmm
  return result;
};

function playSoundFromList(list: Array<Sound>) {
  const sound = sample(list);
  playSound(sound);
}

function playSound(sound: Sound) {
  const audio = new Audio(sound);
  audio.play();
}

export default soundsMiddleware;
