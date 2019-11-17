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
    { type: 'exclusionary', name: 'Master Lock Combo' },
    { type: 'exclusionary', name: 'Double Padlock' },
    { type: 'exclusionary', name: 'Insult Sling' },
    { type: 'exclusionary', name: '“Cool People”' },
    { type: 'exclusionary', name: '“Real Artists”' },
    { type: 'exclusionary', name: 'Talk to the Hand' },
    { type: 'exclusionary', name: 'Stranger Danger' },

    { type: 'inclusive', name: 'Carpool' },
    { type: 'inclusive', name: 'Shout-out' },
    { type: 'inclusive', name: 'Heart2Heart' },
    { type: 'inclusive', name: 'Bring It In!' },
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
