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
    { name: 'Master Lock Combo', type: 'physical' },
    { name: 'Double Padlock', type: 'physical' },
    { name: 'Insult Sling', type: 'physical' },
    { name: '"Cool People”', type: 'mental' },
    { name: '“Real Artists”', type: 'mental' },
    { name: 'Carpool', type: 'inclusive' },
    { name: 'Shout-out', type: 'inclusive' },
  ],
};

export const INSIDE_JOKE_STICK: Weapon = {
  name: 'Inside Joke Stick',
  image: sasquatchImg,
  attacks: [
    { name: 'Pan Smack', type: 'physical' },
    { name: 'Sasquatch Stomp', type: 'physical' },
    { name: 'Pie Face', type: 'physical' },
    { name: 'Mop Tango', type: 'mental' },
    { name: 'Holy Cheese', type: 'mental' },
    { name: 'Lady and the Tramp', type: 'inclusive' },
    { name: 'Secret Handshake', type: 'inclusive' },
  ],
};

export const SIDE_SHAVE: Weapon = {
  name: 'Side Shave',
  image: sideShaveImg,
  attacks: [
    { name: 'Body Slash', type: 'physical' },
    { name: 'Buzz Cut', type: 'physical' },
    { name: 'New Piercing', type: 'physical' },
    { name: 'Three in a Row', type: 'mental' },
    { name: 'Painted Black', type: 'mental' },
    { name: 'Wing Tip', type: 'inclusive' },
    { name: 'Cool Shirt', type: 'inclusive' },
  ],
};

export const JUDGEMENT_GAVEL: Weapon = {
  name: 'Judgement Gavel',
  image: judgementGavelImg,
  attacks: [
    { name: 'Gavel Strike', type: 'physical' },
    { name: 'In Contempt!', type: 'physical' },
    { name: 'Whack-a-mole', type: 'physical' },
    { name: 'Pass Judgement', type: 'mental' },
    { name: 'Start a Chant', type: 'mental' },
    { name: 'Simmer Down', type: 'inclusive' },
    { name: 'High Five', type: 'inclusive' },
  ],
};

export const POI_BALLS: Weapon = {
  name: 'Poi Balls',
  image: fireballImg,
  attacks: [
    { name: 'Helicopter Wind', type: 'physical' },
    { name: 'Fire Shirt', type: 'physical' },
    { name: 'Side to Side', type: 'physical' },
    { name: 'Trick Out', type: 'mental' },
    { name: 'Play with Fire', type: 'mental' },
    { name: 'Poi Basics', type: 'inclusive' },
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
