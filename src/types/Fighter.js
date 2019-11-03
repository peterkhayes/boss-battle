// @flow

export type Fighter = {
  name: string,
  image: string,
  sounds: SoundConfig,
  weapon: Weapon,
  vibes: number,
};

export type SoundConfig = {
  good: Array<string>,
  bad: Array<string>,
  defeat: Array<string>,
  victory: Array<string>,
  mutual: Array<string>,
};

export type Weapon = {
  name: string,
  image: string,
  attacks: Array<Attack>,
};

export type Attack = {
  header: string,
  description: string,
};
