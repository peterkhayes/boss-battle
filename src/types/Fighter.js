// @flow

export type Fighter = {
  name: string,
  image?: string,
  weapon: Weapon,
  vibes: number,
};

export type Weapon = {
  name: string,
  image?: string,
  attacks: Array<Attack>,
};

export type Attack = {
  header: string,
  description: string,
};
