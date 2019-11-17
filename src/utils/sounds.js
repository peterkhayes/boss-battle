// @flow
import type { SoundConfig } from '../types/Fighter';

// $FlowFixMe
const soundsContext = require.context('../sounds', true, /\.mp3$/);

export const sounds: { [string]: string } = {};
for (const filename of soundsContext.keys()) {
  const name = filename.replace('./', '').replace(/\..+$/, '');
  sounds[name] = soundsContext(filename);
}

function soundsMatching(substr) {
  return Object.keys(sounds)
    .filter((key) => key.includes(substr))
    .map((key) => sounds[key]);
}

export function playSound(sound: string, volume: number = 1) {
  const audio = new Audio(sound);
  audio.volume = volume;
  audio.play();
  return audio;
}

export function playSounds(sounds: Array<string>, volume: number = 1) {
  if (sounds.length > 0) {
    const audio = playSound(sounds[0], volume);
    audio.addEventListener('ended', () => playSounds(sounds.slice(1)));
  }
}

export function getFighterSounds(fighterName: string): SoundConfig {
  return {
    good: soundsMatching(`${fighterName} Good`),
    bad: soundsMatching(`${fighterName} Bad`),
    victory: soundsMatching(`${fighterName} Victory`),
    defeat: soundsMatching(`${fighterName} Defeat`),
    mutual: soundsMatching(`${fighterName} Mutual`),
  };
}

export const PLAYER_SOUNDS = getFighterSounds('Player');
