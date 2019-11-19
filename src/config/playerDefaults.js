// @flow

import type { SoundConfig } from '../types/Fighter';
import person1 from '../images/person_1.png';
import person2 from '../images/person_2.png';
import person3 from '../images/person_3.png';
import person4 from '../images/person_4.png';
import person5 from '../images/person_5.png';
import person6 from '../images/person_6.png';
import person7 from '../images/person_7.png';
import person8 from '../images/person_8.png';
import person9 from '../images/person_9.png';
import person10 from '../images/person_10.png';
import { getFighterSounds } from '../utils/sounds';

export const PLAYER_IMAGES: Array<string> = [
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person9,
  person10,
];

export const PLAYER_SOUND_BANKS: Array<SoundConfig> = [
  getFighterSounds('Player1'),
  getFighterSounds('Player2'),
  getFighterSounds('Player3'),
  getFighterSounds('Player4'),
  getFighterSounds('Player5'),
];
