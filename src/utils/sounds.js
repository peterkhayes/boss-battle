// @flow
import type { SoundConfig } from '../types/Fighter';
import sample from 'lodash/sample';

// $FlowFixMe
const soundsContext = require.context('../sounds', true, /\.mp3$/);

function loadSoundsMatching(substr): Array<string> {
  const sounds = soundsContext
    .keys()
    .filter((key) => key.includes(substr))
    .map(soundsContext);

  // Preload sounds
  for (const sound of sounds) {
    playSound(sound, 0);
  }

  return sounds;
}

export function playSound(sound: string, volume: number = 1) {
  const audio = new Audio(sound);
  audio.volume = volume;
  audio.play();
}

export function playSoundFromList(sounds: Array<string>, volume: number = 1) {
  const sound = sample(sounds);
  if (sound) playSound(sound, volume);
}

export function getFighterSounds(fighterName: string): SoundConfig {
  return {
    good: loadSoundsMatching(`${fighterName} Good`),
    bad: loadSoundsMatching(`${fighterName} Bad`),
    victory: loadSoundsMatching(`${fighterName} Victory`),
    defeat: loadSoundsMatching(`${fighterName} Defeat`),
    mutual: loadSoundsMatching(`${fighterName} Mutual`),
  };
}

export const PLAYER_SOUNDS = getFighterSounds('Player');
