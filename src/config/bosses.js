// @flow
import type { Fighter } from '../types/Fighter';
import { getFighterSounds } from '../utils/sounds';
import { getRandomAttacks } from '../utils/fighting';

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
    { type: 'exclusionary', name: 'Email Flurry' },
    { type: 'exclusionary', name: 'Asana Flood' },
    { type: 'exclusionary', name: 'Reply All' },
    { type: 'exclusionary', name: '“As per my last email”' },
    { type: 'exclusionary', name: 'Thanks in Advance' },
    { type: 'exclusionary', name: 'Manager’s Meeting' },
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
  currentAttacks: getRandomAttacks(EMAIL),
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
  currentAttacks: getRandomAttacks(BEER_STAFF),
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
    { type: 'exclusionary', name: 'Tesla Door Flip' },
    { type: 'exclusionary', name: 'Poncho Whip' },
    { type: 'exclusionary', name: 'Battery Drain' },
    { type: 'exclusionary', name: 'Charging Cable Lasso' },
    { type: 'exclusionary', name: 'Clear the Air' },
    { type: 'exclusionary', name: 'GPS Terminator' },
    { type: 'exclusionary', name: 'AI Risk' },
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
  currentAttacks: getRandomAttacks(TESLA),
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
  currentAttacks: getRandomAttacks(YOUTUBE_CHANNEL),
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
  currentAttacks: getRandomAttacks(PEN_AND_NOTEBOOK),
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
  currentAttacks: getRandomAttacks(TURNTABLES),
  facts: [
    { header: 'Task Tracking Software', description: 'Logic Pro' },
    { header: 'Favorite Floor of Berghain', description: '3rd basement' },
    {
      header: 'Weekend Plans',
      description: 'Closing out the night in the acid house room at DAS UNTERKREM',
    },
  ],
};

const PITCH_DECK = {
  name: 'Pitch Deck',
  image: selfieStickImage,
  attacks: [],
};
export const ANDREY: Fighter = {
  vibes: 5,
  name: 'Andrey',
  title: 'Aspiring Founder',
  sounds: getFighterSounds('Andre'),
  weapon: PITCH_DECK,
  currentAttacks: getRandomAttacks(PITCH_DECK),
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
