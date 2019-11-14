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
  facts: [
    { header: 'Fraternity Name', description: 'Pickle' },
    {
      header: 'Beer Pong Winning Streak',
      description: '37 (discounting the Incident with Ross)',
    },
    {
      header: 'Number of Cold Calls Daily',
      description: "It's not about the call, it's the call before the call",
    },
  ],
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
  facts: [
    { header: 'Favorite First Date', description: 'Ayahuasca at Esalen' },
    { header: 'Longevity Hack', description: 'Drinking salt juice in a cryo bath' },
    { header: 'Crypto Position', description: 'Long on Filecoin' },
  ],
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
  facts: [
    { header: 'Age', description: '28 (but identifies as Gen Z)' },
    { header: 'Afternoon Fuel', description: 'The “Pink Drink” from Starbucks' },
    { header: 'Definitely Not A', description: 'VSCO Girl' },
  ],
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
  facts: [
    { header: 'Vacation Highlight', description: 'Cycling in Copenhagen' },
    {
      header: 'Colors in wardrobe',
      description: 'Black, mauve, aubergine accents',
    },
    {
      header: 'Passion Project',
      description:
        'Making a live edge Redwood coffee table from their Mountain View garage',
    },
  ],
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
  facts: [
    { header: 'Task Tracking Software', description: 'Logic Pro' },
    { header: 'Favorite Floor of Berghain', description: '3rd basement' },
    {
      header: 'Weekend Plans',
      description: 'Closing out the night in the acid house room at DAS UNTERKREM',
    },
  ],
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
  facts: [
    { header: 'Startup Idea', description: 'Instacart for the Housing Crisis' },
    {
      header: 'Bragging Rights',
      description: "Took Mark Zuckerberg's exact course schedule at Harvard",
    },
    {
      header: 'Life Hack',
      description: 'No place like an Uber Pool for giving your pitch',
    },
  ],
};

const BOSSES = [KAMILLA, CHAD, CONRAD, LILY, ZHEN, KEITH, ANDREY];

export default BOSSES;
