// @flow
import type { Fighter } from '../types/Fighter';
import { getFighterSounds } from '../utils/sounds';
import kamilaImage from '../images/kamila.gif';
import chadImage from '../images/chad.gif';
import emailImage from '../images/email.png';

export const KAMILLA: Fighter = {
  vibes: 5,
  name: 'Kamila',
  title: 'Marketing Director',
  image: kamilaImage,
  sounds: getFighterSounds('Karen'),
  weapon: {
    name: 'Email',
    image: emailImage,
    attacks: [
      { header: 'Favorite time of day', description: 'On time' },
      {
        header: 'Favorite tool',
        description: 'Shared ClassPass calendar',
      },
      {
        header: 'Major Pet Peeve',
        description:
          'When Ashley insists on visiting another winery when it’s already time for the boat cruise',
      },
    ],
  },
};

export const CHAD: Fighter = {
  vibes: 6,
  name: 'Chad',
  title: 'Sales Rep',
  image: chadImage,
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
  name: 'Conrad',
  title: 'Visionary CEO',
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
  name: 'Lily',
  title: 'Social Media Manager',
  sounds: getFighterSounds('Lily'),
  weapon: {
    name: 'YouTube Channel',
    attacks: [],
  },
};

export const ZHEN: Fighter = {
  vibes: 5,
  name: 'Zhen',
  title: 'Designer',
  sounds: getFighterSounds('Zhen'),
  weapon: {
    name: 'Minimalism',
    attacks: [],
  },
};

export const KEITH: Fighter = {
  vibes: 5,
  name: 'Keith',
  title: 'PM & DJ',
  sounds: getFighterSounds('Keith'),
  weapon: {
    name: 'Turntables',
    attacks: [],
  },
};

export const ANDREY: Fighter = {
  vibes: 5,
  name: 'Andrey',
  title: 'Aspiring Founder',
  sounds: getFighterSounds('Andre'),
  weapon: {
    name: 'Ambition',
    attacks: [],
  },
};

const BOSSES = [KAMILLA, CHAD, CONRAD, LILY, ZHEN, KEITH, ANDREY];

export default BOSSES;
