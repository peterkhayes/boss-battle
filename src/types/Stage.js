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

export type MinigameIntro = {
  stage: 'minigame_intro',
};

export type MinigamePlayers = {
  stage: 'minigame_players',
  player1Ready: boolean,
  player2Ready: boolean,
};

export type MinigameQuestions = {
  stage: 'minigame_questions',
  index: number,
  answered: boolean,
};

export type MinigameCelebration = {
  stage: 'minigame_celebration',
};

export type Stage =
  | InitialStage
  | ChooseNameStage
  | ChooseWeaponStage
  | ChooseBossStage
  | FightStage
  | MinigameIntro
  | MinigamePlayers
  | MinigameQuestions
  | MinigameCelebration;
