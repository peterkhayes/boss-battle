// @flow
import type { Fighter } from '../types/Fighter';

export const KAREN: Fighter = {
  vibes: 5,
  name: 'Karen From Marketing',
  weapon: { name: 'Jira', attacks: [] },
};

export const CHAD: Fighter = {
  vibes: 6,
  name: 'Chad From Sales',
  weapon: { name: 'Beer Staff', attacks: [] },
};

export const LEVI: Fighter = {
  vibes: 7,
  name: 'Levi The CEO',
  weapon: { name: 'Tesla', attacks: [] },
};

const BOSSES = [KAREN, CHAD, LEVI];

export default BOSSES;
