// @flow

export type Fighter = {
  name: string,
  image?: string,
  weapon: Weapon,
  vibes: number,
};

export type Weapon = {
  name: string,
  attacks: Array<Attack>,
};

export type Attack = {
  name: string,
  sound?: string,
};
