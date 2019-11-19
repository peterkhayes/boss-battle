// @flow

import type { Fighter, Attack, AttackType } from './Fighter';

export type InitialStage = {
  stage: 'initial',
};

export type ChooseNameStage = {
  stage: 'choose_name',
};

export type ChooseWeaponStage = {
  stage: 'choose_weapon',
  name: string,
};

export type ChooseBossStage = {
  stage: 'choose_boss',
  player: Fighter,
};

export type FightStage = {
  stage: 'fight',
  player: Fighter,
  boss: Fighter,
  attack: ?Attack,
  lastPlayerAttackType: AttackType,
};

export type GatekeeperModeStage = {
  stage: 'gatekeeper_mode',
};

export type Stage =
  | InitialStage
  | ChooseNameStage
  | ChooseWeaponStage
  | ChooseBossStage
  | FightStage
  | GatekeeperModeStage;
