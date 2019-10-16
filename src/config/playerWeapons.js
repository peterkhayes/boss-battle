// @flow
import type { Weapon } from '../types/Fighter';

export const PRIVATE_SLACK_CHANNEL: Weapon = {
  name: 'Private Slack Channel',
  attacks: [
    { header: 'Attack 1', description: 'Lock down' },
    { header: 'Attack 2', description: 'Exclude' },
    { header: 'Attack 3', description: '@-mention' },
  ],
};

export const INSIDE_JOKE_STICK: Weapon = {
  name: 'Inside Joke Stick',
  attacks: [
    { header: 'Attack 1', description: 'Make inside joke' },
    { header: 'Attack 2', description: 'Laugh' },
    { header: 'Attack 3', description: 'Clown around' },
  ],
};

export const SIDE_SHAVE: Weapon = {
  name: 'Side Shave',
  attacks: [
    { header: 'Attack 1', description: 'Hair flip' },
    { header: 'Attack 2', description: 'Body mod' },
    { header: 'Attack 3', description: 'Compliment' },
  ],
};

export const JUDGEMENT_GAVEL: Weapon = {
  name: 'Judgement Gavel',
  attacks: [
    { header: 'Attack 1', description: 'Call for order' },
    { header: 'Attack 2', description: 'Pass judgement' },
    { header: 'Attack 3', description: 'Overrule objection' },
  ],
};

export const POI_BALLS: Weapon = {
  name: 'Poi Balls',
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
