// @flow

export type Fighter = {
  name: string,
  title: string,
  image: string,
  sounds: SoundConfig,
  weapon: Weapon,
  vibes: number,
  currentAttacks: CurrentAttacks,
  facts: Array<Fact>,
};

export type CurrentAttacks = [Attack, Attack, Attack];

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

export type AttackType = 'exclusionary' | 'inclusive' | 'collaborative';

export type Attack = {
  name: string,
  type: AttackType,
  description: string,
};

export type Fact = {
  header: string,
  description: string,
};
