// @flow
import type { Fighter } from '../types/Fighter';
import { getFighterSounds } from '../utils/sounds';
import { getRandomAttacks } from '../utils/fighting';

import kamilaImage from '../images/kamila.png';
import chadImage from '../images/chad.gif';
import conradImage from '../images/conrad.png';
import andreyImage from '../images/andrey.png';
import lucasImage from '../images/lucas2.png';
import zhenImage from '../images/zhen.png';
import lilyImage from '../images/lily.png';

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
  vibes: 6,
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
  attacks: [
    { type: 'exclusionary', name: 'Pucky Puck' },
    { type: 'exclusionary', name: 'LOL ur mom tho' },
    { type: 'exclusionary', name: 'Beer Pwned Amirite' },
    { type: 'exclusionary', name: 'Order of Brothers' },
    { type: 'exclusionary', name: 'Flip Cup Dunce' },
    { type: 'exclusionary', name: 'Overhead Promo' },

    { type: 'inclusive', name: 'Sail Bros!' },
    { type: 'inclusive', name: 'Mad Veggie' },
    { type: 'inclusive', name: 'Go Deep' },
    { type: 'inclusive', name: 'Veggie Noodle' },
    { type: 'inclusive', name: 'Mango Kush' },
  ],
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
  vibes: 6,
  name: 'Conrad',
  title: 'Visionary CEO',
  image: conradImage,
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
  attacks: [
    { type: 'exclusionary', name: 'CANCELED' },
    { type: 'exclusionary', name: 'No Media Policy?' },
    { type: 'exclusionary', name: 'Viral Video' },
    { type: 'exclusionary', name: 'Thumbs DOWN' },
    { type: 'exclusionary', name: 'InstaDragged' },
    { type: 'exclusionary', name: 'Who’s the Joker Now?' },

    { type: 'inclusive', name: 'Music Mashup' },
    { type: 'inclusive', name: 'Slang Gang' },
    { type: 'inclusive', name: 'Strike One' },
  ],
};
export const LILY: Fighter = {
  vibes: 6,
  name: 'Lily',
  image: lilyImage,
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
  attacks: [
    { type: 'exclusionary', name: 'Impulsive Redesign' },
    { type: 'exclusionary', name: 'Bad Branding' },
    { type: 'exclusionary', name: 'A Bit Overdone' },
    { type: 'exclusionary', name: 'Um, Campy' },
    { type: 'exclusionary', name: 'Harsh Feedback' },
    { type: 'exclusionary', name: 'Eyeroll' },

    { type: 'inclusive', name: 'Blue Print' },
    { type: 'inclusive', name: 'Konmari' },
    { type: 'inclusive', name: 'Sketch Artist' },
  ],
};
export const ZHEN: Fighter = {
  vibes: 6,
  name: 'Zhen',
  title: 'Designer',
  image: zhenImage,
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
  attacks: [
    { type: 'exclusionary', name: 'Drop Denial' },
    { type: 'exclusionary', name: 'Yeah, Everybody’s Heard of Them' },
    { type: 'exclusionary', name: 'Baby Shark' },
    { type: 'exclusionary', name: 'Record Ninja' },
    { type: 'exclusionary', name: 'Turntable Flip' },
    { type: 'exclusionary', name: 'Bouncer Smash' },

    { type: 'inclusive', name: 'Re-Re-Remix' },
    { type: 'inclusive', name: 'Free Cover' },
    { type: 'inclusive', name: 'Song Credits' },
  ],
};
export const LUCAS: Fighter = {
  vibes: 6,
  name: 'Lucas',
  title: 'PM & DJ',
  image: lucasImage,
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
  attacks: [
    { type: 'exclusionary', name: 'Fan Club' },
    { type: 'exclusionary', name: 'Raining Swag' },
    { type: 'exclusionary', name: 'Pitch Deck Flash' },
    { type: 'exclusionary', name: 'SV Connections' },
    { type: 'exclusionary', name: 'Hacker Hostel' },
    { type: 'exclusionary', name: 'ICO' },
    { type: 'exclusionary', name: 'Clicker Cult' },

    { type: 'inclusive', name: 'Calm Down' },
    { type: 'inclusive', name: 'Light It Up' },
    { type: 'inclusive', name: 'Solder Sesh' },
  ],
};
export const ANDREY: Fighter = {
  vibes: 6,
  name: 'Andrey',
  title: 'Aspiring Founder',
  sounds: getFighterSounds('Andre'),
  weapon: PITCH_DECK,
  currentAttacks: getRandomAttacks(PITCH_DECK),
  image: andreyImage,
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

const BOSSES = [KAMILLA, CHAD, CONRAD, LILY, ZHEN, LUCAS, ANDREY];

export default BOSSES;
