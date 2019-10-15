// @flow
import type { Weapon } from '../types/Fighter';

export const PRIVATE_SLACK_CHANNEL: Weapon = {
  name: 'Private Slack Channel',
  attacks: [],
};

export const INSIDE_JOKE_STICK: Weapon = {
  name: 'Inside Joke Stick',
  attacks: [],
};

export const SIDE_SHAVE: Weapon = {
  name: 'Side Shave',
  attacks: [],
};

export const JUDGEMENT_GAVEL: Weapon = {
  name: 'Judgement Gavel',
  attacks: [],
};

export const POI_BALLS: Weapon = {
  name: 'Poi Balls',
  attacks: [],
};

const PLAYER_WEAPONS = [
  PRIVATE_SLACK_CHANNEL,
  INSIDE_JOKE_STICK,
  SIDE_SHAVE,
  JUDGEMENT_GAVEL,
  POI_BALLS,
];

export default PLAYER_WEAPONS;
