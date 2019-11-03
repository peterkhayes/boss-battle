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
    { header: 'Attack 1', description: 'Lock down' },
    { header: 'Attack 2', description: 'Exclude' },
    { header: 'Attack 3', description: '@-mention' },
  ],
};

export const INSIDE_JOKE_STICK: Weapon = {
  name: 'Inside Joke Stick',
  image: sasquatchImg,
  attacks: [
    { header: 'Attack 1', description: 'Make inside joke' },
    { header: 'Attack 2', description: 'Laugh' },
    { header: 'Attack 3', description: 'Clown around' },
  ],
};

export const SIDE_SHAVE: Weapon = {
  name: 'Side Shave',
  image: sideShaveImg,
  attacks: [
    { header: 'Attack 1', description: 'Hair flip' },
    { header: 'Attack 2', description: 'Body mod' },
    { header: 'Attack 3', description: 'Compliment' },
  ],
};

export const JUDGEMENT_GAVEL: Weapon = {
  name: 'Judgement Gavel',
  image: judgementGavelImg,
  attacks: [
    { header: 'Attack 1', description: 'Call for order' },
    { header: 'Attack 2', description: 'Pass judgement' },
    { header: 'Attack 3', description: 'Overrule objection' },
  ],
};

export const POI_BALLS: Weapon = {
  name: 'Poi Balls',
  image: fireballImg,
  attacks: [
    { header: 'Attack 1', description: 'Spin' },
    { header: 'Attack 2', description: 'Dazzle' },
    { header: 'Attack 3', description: 'Demonstrate' },
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
