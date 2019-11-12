// @flow
import type {
  Fighter,
  Weapon,
  Attack,
  AttackType,
  CurrentAttacks,
} from '../types/Fighter';
import type { FightStage } from '../types/Stage';
import { GOOD_VIBES_MAX } from '../config/vibes';
import clamp from 'lodash/clamp';
import sample from 'lodash/sample';

export function vibesAreZero(fighter: Fighter): boolean {
  return fighter.vibes === 0;
}

export function vibesAreMax(fighter: Fighter): boolean {
  return fighter.vibes === GOOD_VIBES_MAX;
}

export function vibesBecameZero(fighterBefore: Fighter, fighterAfter: Fighter): boolean {
  return fighterBefore.vibes !== 0 && fighterAfter.vibes === 0;
}

export function vibesBecameMax(fighterBefore: Fighter, fighterAfter: Fighter): boolean {
  return fighterBefore.vibes !== GOOD_VIBES_MAX && fighterAfter.vibes === GOOD_VIBES_MAX;
}

export function vibesWentDown(fighterBefore: Fighter, fighterAfter: Fighter): boolean {
  return fighterBefore.vibes > fighterAfter.vibes;
}

export function vibesWentUp(fighterBefore: Fighter, fighterAfter: Fighter): boolean {
  return fighterBefore.vibes < fighterAfter.vibes;
}

export function playerVibesWentUp(
  stageBefore: FightStage,
  stageAfter: FightStage,
): boolean {
  return vibesWentUp(stageBefore.player, stageAfter.player);
}

export function playerVibesWentDown(
  stageBefore: FightStage,
  stageAfter: FightStage,
): boolean {
  return vibesWentDown(stageBefore.player, stageAfter.player);
}

export function bossVibesWentUp(
  stageBefore: FightStage,
  stageAfter: FightStage,
): boolean {
  return vibesWentUp(stageBefore.boss, stageAfter.boss);
}

export function bossVibesWentDown(
  stageBefore: FightStage,
  stageAfter: FightStage,
): boolean {
  return vibesWentDown(stageBefore.boss, stageAfter.boss);
}

export function playerDefeated(stageBefore: FightStage, stageAfter: FightStage): boolean {
  return vibesBecameZero(stageBefore.player, stageAfter.player);
}

export function bossDefeated(stageBefore: FightStage, stageAfter: FightStage): boolean {
  return vibesBecameZero(stageBefore.boss, stageAfter.boss);
}

export function gameEndedHappy(stageBefore: FightStage, stageAfter: FightStage): boolean {
  return (
    (vibesAreMax(stageAfter.player) &&
      vibesBecameMax(stageBefore.boss, stageAfter.boss)) ||
    (vibesAreMax(stageAfter.boss) &&
      vibesBecameMax(stageBefore.player, stageAfter.player))
  );
}

export function changeVibes(fighter: Fighter, vibes: number): Fighter {
  return { ...fighter, vibes: clamp(fighter.vibes + vibes, 0, GOOD_VIBES_MAX) };
}

export function getRandomAttack(
  weapon: Weapon,
  type: AttackType,
  current?: Attack,
): Attack {
  const possibleAttacks = weapon.attacks.filter((a) => a.type === type && a !== current);
  return sample(possibleAttacks);
}

export function swapNextAttack(fighter: Fighter, current: Attack): Fighter {
  const { type } = current;
  return {
    ...fighter,
    currentAttacks: {
      ...fighter.currentAttacks,
      [type]: getRandomAttack(fighter.weapon, type, current),
    },
  };
}

export function getInitialAttacks(weapon: Weapon): CurrentAttacks {
  return {
    physical: getRandomAttack(weapon, 'physical'),
    mental: getRandomAttack(weapon, 'mental'),
    inclusive: getRandomAttack(weapon, 'inclusive'),
  };
}
