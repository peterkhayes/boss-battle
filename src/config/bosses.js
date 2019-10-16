// @flow
import type { Fighter } from '../types/Fighter';

export const KAREN: Fighter = {
  vibes: 5,
  name: 'Karen From Marketing',
  weapon: {
    name: 'Asana',
    attacks: [
      { header: 'Favorite time of day', description: 'On time' },
      { header: 'Favorite TV show', description: 'The Bachelor' },
      {
        header: 'Favorite tool',
        description: 'Shared Google calendar for syncing ClassPass with all her friends',
      },
    ],
  },
};

export const CHAD: Fighter = {
  vibes: 6,
  name: 'Chad From Sales',
  weapon: {
    name: 'Beer Staff',
    attacks: [
      { header: 'Favorite gesture', description: 'Smile and point' },
      { header: 'Favorite place', description: 'Box seats at Giants game' },
      { header: 'Favorite part of self', description: 'Perfect hair' },
    ],
  },
};

export const LEVI: Fighter = {
  vibes: 7,
  name: 'Levi The CEO',
  weapon: {
    name: 'Tesla',
    attacks: [
      { header: 'Favorite meal system', description: 'Thistle' },
      { header: 'Favorite personality system', description: 'Enneagram' },
      {
        header: 'Favorite clothes since doing Ayahuasca',
        description: 'Custom heather-gray poncho',
      },
    ],
  },
};

const BOSSES = [KAREN, CHAD, LEVI];

export default BOSSES;
