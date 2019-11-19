// @flow
import type { Direction } from './Direction';
import type { Fighter, Attack, AttackType } from './Fighter';

export type InitialStage = {
  stage: 'initial',
};

export type ChooseNameStage = {
  stage: 'choose_name',
  name: string,
};

export type ChooseWeaponStage = {
  stage: 'choose_weapon',
  name: string,
  index: number,
  lastMove?: Direction,
};

export type ChooseBossStage = {
  stage: 'choose_boss',
  player: Fighter,
  index: number,
  lastMove?: Direction,
};

export type FightStage = {
  stage: 'fight',
  player: Fighter,
  boss: Fighter,
  attack: ?Attack,
  lastPlayerAttackType: AttackType,
};

export type Stage =
  | InitialStage
  | ChooseNameStage
  | ChooseWeaponStage
  | ChooseBossStage
  | FightStage;
