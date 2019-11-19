// @flow
import type { Weapon } from '../types/Fighter';

import slackImg from '../images/private_slack_channel.png';
import sasquatchImg from '../images/sasquatch.png';
import sideShaveImg from '../images/side_shave.png';
import judgementGavelImg from '../images/judgement_gavel.png';
import fireballImg from '../images/poi.png';

export const PRIVATE_SLACK_CHANNEL: Weapon = {
  name: 'Private Slack Channel',
  image: slackImg,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Master Lock Combo',
      description:
        '[Name] goes at [BOSS] with their infamous attack: The Master Lock Combination Spin',
    },
    {
      type: 'exclusionary',
      name: 'Double Padlock',
      description: '[Name] gets in a 1-2 hit with The Double Padlock',
    },
    {
      type: 'exclusionary',
      name: 'Insult Sling',
      description:
        '[Name] slings insults at [BOSS] in 15 separate private channels; everybody is laughing',
    },
    {
      type: 'exclusionary',
      name: '“Cool People”',
      description:
        '[Name] creates a Slack channel called “Cool People” and leaves [BOSS] out',
    },
    {
      type: 'exclusionary',
      name: '“Real Artists”',
      description:
        '[Name] creates a Slack channel called “Real Artists” and leaves [BOSS] out',
    },
    {
      type: 'exclusionary',
      name: 'Talk to the Hand',
      description:
        '[Name] is chatting up some friends and practically shoves [BOSS] backward with the force of their cold shoulder. Sorry, [BOSS] who?',
    },
    {
      type: 'exclusionary',
      name: 'Stranger Danger',
      description:
        '[BOSS] says hi to [Name], and [Name] claims to have no idea who they are, despite having met [BOSS] at least four times. ',
    },

    {
      type: 'inclusive',
      name: 'Carpool',
      description:
        '[Name] @s [BOSS] in a carpool thread for next week’s decompression party. [BOSS] would love to go!',
    },
    {
      type: 'inclusive',
      name: 'Shout-out',
      description:
        'Shout-out - [Name] calls out [BOSS] in a public channel and says: loved your Room Service project this year!',
    },
    {
      type: 'inclusive',
      name: 'Heart2Heart',
      description:
        'Heart2Heart - [Name] and [BOSS] have a heart-to-heart and really bond over [INTEREST]! Hug it out ya’ll!',
    },
    { type: 'inclusive', name: 'Bring It In!', description: 'Bring it in!! Group hug!!' },
  ],
};

export const INSIDE_JOKE_STICK: Weapon = {
  name: 'Inside Joke Stick',
  image: sasquatchImg,
  attacks: [
    { type: 'exclusionary', name: 'Pan Smack' },
    { type: 'exclusionary', name: 'Sasquatch Stomp' },
    { type: 'exclusionary', name: 'Pie Face' },
    { type: 'exclusionary', name: 'Mop Tango' },
    { type: 'exclusionary', name: 'Holy Cheese' },
    { type: 'exclusionary', name: 'Bear Trap' },

    { type: 'inclusive', name: 'Lady and the Tramp' },
    { type: 'inclusive', name: 'Secret Handshake' },
    { type: 'inclusive', name: 'Pyramid Scheme' },
    { type: 'inclusive', name: 'Bring It In!' },
  ],
};

export const SIDE_SHAVE: Weapon = {
  name: 'Side Shave',
  image: sideShaveImg,
  attacks: [
    { type: 'exclusionary', name: 'Body Slash' },
    { type: 'exclusionary', name: 'Buzz Cut' },
    { type: 'exclusionary', name: 'New Piercing' },
    { type: 'exclusionary', name: 'Third Eye Blind' },
    { type: 'exclusionary', name: 'Painted Black' },
    { type: 'exclusionary', name: 'Hiss' },

    { type: 'inclusive', name: 'Wing Tip' },
    { type: 'inclusive', name: 'Cool Shirt' },
    { type: 'inclusive', name: 'Get Some Ink' },
    { type: 'inclusive', name: 'Bring It In!' },
  ],
};

export const JUDGEMENT_GAVEL: Weapon = {
  name: 'Judgement Gavel',
  image: judgementGavelImg,
  attacks: [
    { type: 'exclusionary', name: 'Gavel Strike' },
    { type: 'exclusionary', name: 'In Contempt!' },
    { type: 'exclusionary', name: 'Whack-a-mole' },
    { type: 'exclusionary', name: 'Pass Judgement' },
    { type: 'exclusionary', name: 'Start a Chant' },
    { type: 'exclusionary', name: 'Overruled!' },

    { type: 'inclusive', name: 'Habeas Corpus' },
    { type: 'inclusive', name: 'High Five' },
    { type: 'inclusive', name: 'New Evidence' },
    { type: 'inclusive', name: 'Bring It In!' },
  ],
};

export const POI_BALLS: Weapon = {
  name: 'Fire Poi',
  image: fireballImg,
  attacks: [
    { type: 'exclusionary', name: 'Helicopter Wind' },
    { type: 'exclusionary', name: 'Fire Shirt' },
    { type: 'exclusionary', name: 'Side to Side' },
    { type: 'exclusionary', name: 'Trick Out' },
    { type: 'exclusionary', name: 'Play with Fire' },
    { type: 'exclusionary', name: 'Ring of Fire' },

    { type: 'inclusive', name: 'Poi Basics' },
    { type: 'inclusive', name: 'Front Row Seats' },
    { type: 'inclusive', name: 'Show Stoppers' },
    { type: 'inclusive', name: 'Bring It In!' },
  ],
};

const PLAYER_WEAPONS = [
  PRIVATE_SLACK_CHANNEL,
  INSIDE_JOKE_STICK,
  SIDE_SHAVE,
  JUDGEMENT_GAVEL,
  POI_BALLS,
];

export default PLAYER_WEAPONS;
