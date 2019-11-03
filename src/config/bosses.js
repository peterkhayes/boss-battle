// @flow
import type { Fighter } from '../types/Fighter';
import { getFighterSounds } from '../utils/sounds';

export const KAREN: Fighter = {
  vibes: 5,
  name: 'Karen From Marketing',
  sounds: getFighterSounds('Karen'),
  weapon: {
    name: 'Asana',
    attacks: [
      { header: 'Favorite time of day', description: 'On time' },
      { header: 'Favorite TV show', description: 'The Bachelor' },
      {
        header: 'Favorite tool',
        description: 'Shared Google calendar for syncing ClassPass with all her friends',
      },
    ],
  },
};

export const CHAD: Fighter = {
  vibes: 6,
  name: 'Chad From Sales',
  sounds: getFighterSounds('Chad'),
  weapon: {
    name: 'Beer Staff',
    attacks: [
      { header: 'Favorite gesture', description: 'Smile and point' },
      { header: 'Favorite place', description: 'Box seats at Giants game' },
      { header: 'Favorite part of self', description: 'Perfect hair' },
    ],
  },
};

export const CONRAD: Fighter = {
  vibes: 7,
  name: 'Conrad The CEO',
  sounds: getFighterSounds('Conrad'),
  weapon: {
    name: 'Tesla',
    attacks: [
      { header: 'Favorite meal system', description: 'Thistle' },
      { header: 'Favorite personality system', description: 'Enneagram' },
      {
        header: 'Favorite clothes since doing Ayahuasca',
        description: 'Custom heather-gray poncho',
      },
    ],
  },
};

export const LILY: Fighter = {
  vibes: 6,
  name: 'Lily the Social Media Intern',
  sounds: getFighterSounds('Lily'),
  weapon: {
    name: 'YouTube Channel',
    attacks: [],
  },
};

export const ZHEN: Fighter = {
  vibes: 5,
  name: 'Zhen the Designer',
  sounds: getFighterSounds('Zhen'),
  weapon: {
    name: 'Minimalism',
    attacks: [],
  },
};

export const KEITH: Fighter = {
  vibes: 5,
  name: "Keith the PM who's a DJ",
  sounds: getFighterSounds('Keith'),
  weapon: {
    name: 'Turntables',
    attacks: [],
  },
};

export const ANDRE: Fighter = {
  vibes: 5,
  name: 'Andre the Aspiring Founder',
  sounds: getFighterSounds('Andre'),
  weapon: {
    name: 'Ambition',
    attacks: [],
  },
};

const BOSSES = [KAREN, CHAD, CONRAD, LILY, ZHEN, KEITH, ANDRE];

export default BOSSES;
