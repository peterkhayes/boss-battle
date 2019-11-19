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

export type AttackType = 'exclusionary' | 'inclusive';

export type Attack = {
  name: string,
  type: AttackType,
  // Won't be optional once descriptions are written for everything
  description?: string,
};

export type Fact = {
  header: string,
  description: string,
};
