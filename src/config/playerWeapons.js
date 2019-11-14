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
    { name: 'Master Lock Combo', type: 'exclusionary' },
    { name: 'Double Padlock', type: 'exclusionary' },
    { name: 'Insult Sling', type: 'exclusionary' },
    { name: '"Cool People”', type: 'inclusive' },
    { name: '“Real Artists”', type: 'inclusive' },
    { name: 'Carpool', type: 'inclusive' },
    { name: 'Shout-out', type: 'inclusive' },
  ],
};

export const INSIDE_JOKE_STICK: Weapon = {
  name: 'Inside Joke Stick',
  image: sasquatchImg,
  attacks: [
    { name: 'Pan Smack', type: 'exclusionary' },
    { name: 'Sasquatch Stomp', type: 'exclusionary' },
    { name: 'Pie Face', type: 'exclusionary' },
    { name: 'Mop Tango', type: 'inclusive' },
    { name: 'Holy Cheese', type: 'inclusive' },
    { name: 'Lady and the Tramp', type: 'inclusive' },
    { name: 'Secret Handshake', type: 'inclusive' },
  ],
};

export const SIDE_SHAVE: Weapon = {
  name: 'Side Shave',
  image: sideShaveImg,
  attacks: [
    { name: 'Body Slash', type: 'exclusionary' },
    { name: 'Buzz Cut', type: 'exclusionary' },
    { name: 'New Piercing', type: 'exclusionary' },
    { name: 'Three in a Row', type: 'inclusive' },
    { name: 'Painted Black', type: 'inclusive' },
    { name: 'Wing Tip', type: 'inclusive' },
    { name: 'Cool Shirt', type: 'inclusive' },
  ],
};

export const JUDGEMENT_GAVEL: Weapon = {
  name: 'Judgement Gavel',
  image: judgementGavelImg,
  attacks: [
    { name: 'Gavel Strike', type: 'exclusionary' },
    { name: 'In Contempt!', type: 'exclusionary' },
    { name: 'Whack-a-mole', type: 'exclusionary' },
    { name: 'Pass Judgement', type: 'inclusive' },
    { name: 'Start a Chant', type: 'inclusive' },
    { name: 'Simmer Down', type: 'inclusive' },
    { name: 'High Five', type: 'inclusive' },
  ],
};

export const POI_BALLS: Weapon = {
  name: 'Poi Balls',
  image: fireballImg,
  attacks: [
    { name: 'Helicopter Wind', type: 'exclusionary' },
    { name: 'Fire Shirt', type: 'exclusionary' },
    { name: 'Side to Side', type: 'exclusionary' },
    { name: 'Trick Out', type: 'inclusive' },
    { name: 'Play with Fire', type: 'inclusive' },
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
