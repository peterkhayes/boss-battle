// @flow
import type { Fighter } from '../types/Fighter';
import { getFighterSounds } from '../utils/sounds';
import { getInitialAttacks } from '../utils/fighting';

import kamilaImage from '../images/kamila.gif';
import chadImage from '../images/chad.gif';

import emailImage from '../images/email.png';
import beerImage from '../images/beer_stretched.png';
import teslaImage from '../images/tesla.png';
import turntablesImage from '../images/turntables.png';
import youtubeImage from '../images/youtube.png';
import minimalismImage from '../images/minimalism.png';
import selfieStickImage from '../images/selfie_stick.png';

const EMAIL = {
  name: 'Email',
  image: emailImage,
  attacks: [
    { type: 'physical', name: 'Email Flurry' },
    { type: 'physical', name: 'Asana Flood' },
    { type: 'physical', name: 'Reply All' },
    { type: 'mental', name: '“As per my last email”' },
    { type: 'mental', name: 'Thanks in Advance' },
    { type: 'mental', name: 'Manager’s Meeting' },
    { type: 'inclusive', name: 'Reality TV' },
    { type: 'inclusive', name: 'Spa Day!' },
    { type: 'inclusive', name: 'ClassPass Duo' },
  ],
};
export const KAMILLA: Fighter = {
  vibes: 5,
  name: 'Kamila',
  title: 'Marketing Director',
  image: kamilaImage,
  sounds: getFighterSounds('Karen'),
  weapon: EMAIL,
  currentAttacks: getInitialAttacks(EMAIL),
  facts: [
    { header: 'Favorite Time of Day', description: 'On time' },
    {
      header: 'Favorite Organizational Tool',
      description: 'Shared workout calendar with the ClassPass fam',
    },
    {
      header: 'Major Pet Peeve',
      description:
        'When Ashley insists on visiting another winery when it’s already time for the boat cruise',
    },
  ],
};

const BEER_STAFF = {
  name: 'Beer Staff',
  image: beerImage,
  attacks: [],
};
export const CHAD: Fighter = {
  vibes: 6,
  name: 'Chad',
  title: 'Sales Rep',
  image: chadImage,
  sounds: getFighterSounds('Chad'),
  weapon: BEER_STAFF,
  currentAttacks: getInitialAttacks(BEER_STAFF),
};

const TESLA = {
  name: 'Tesla',
  image: teslaImage,
  attacks: [
    { type: 'physical', name: 'Tesla Door Flip' },
    { type: 'physical', name: 'Poncho Whip' },
    { type: 'physical', name: 'Battery Drain' },
    { type: 'physical', name: 'Charging Cable Lasso' },
    { type: 'mental', name: 'Clear the Air' },
    { type: 'mental', name: 'GPS Terminator' },
    { type: 'mental', name: 'AI Risk' },
    { type: 'inclusive', name: 'Esalen Invite' },
    { type: 'inclusive', name: 'Roadster Ride' },
    { type: 'inclusive', name: 'Listen Up' },
  ],
};
export const CONRAD: Fighter = {
  vibes: 7,
  name: 'Conrad',
  title: 'Visionary CEO',
  sounds: getFighterSounds('Conrad'),
  weapon: TESLA,
  currentAttacks: getInitialAttacks(TESLA),
};

const YOUTUBE_CHANNEL = {
  name: 'YouTube Channel',
  image: youtubeImage,
  attacks: [],
};
export const LILY: Fighter = {
  vibes: 6,
  name: 'Lily',
  title: 'Social Media Manager',
  sounds: getFighterSounds('Lily'),
  weapon: YOUTUBE_CHANNEL,
  currentAttacks: getInitialAttacks(YOUTUBE_CHANNEL),
};

const PEN_AND_NOTEBOOK = {
  name: 'Pen and Notebook',
  image: minimalismImage,
  attacks: [],
};
export const ZHEN: Fighter = {
  vibes: 5,
  name: 'Zhen',
  title: 'Designer',
  sounds: getFighterSounds('Zhen'),
  weapon: PEN_AND_NOTEBOOK,
  currentAttacks: getInitialAttacks(PEN_AND_NOTEBOOK),
};

const TURNTABLES = {
  name: 'Turntables',
  image: turntablesImage,
  attacks: [],
};
export const KEITH: Fighter = {
  vibes: 5,
  name: 'Keith',
  title: 'PM & DJ',
  sounds: getFighterSounds('Keith'),
  weapon: TURNTABLES,
  currentAttacks: getInitialAttacks(TURNTABLES),
};

const AMBITION = {
  name: 'Ambition',
  image: selfieStickImage,
  attacks: [],
};
export const ANDREY: Fighter = {
  vibes: 5,
  name: 'Andrey',
  title: 'Aspiring Founder',
  sounds: getFighterSounds('Andre'),
  weapon: AMBITION,
  currentAttacks: getInitialAttacks(AMBITION),
};

const BOSSES = [KAMILLA, CHAD, CONRAD, LILY, ZHEN, KEITH, ANDREY];

export default BOSSES;
