// @flow
import type { Fighter, Weapon, Attack, CurrentAttacks } from '../types/Fighter';
import type { FightStage } from '../types/Stage';
import { GOOD_VIBES_MAX } from '../config/vibes';
import clamp from 'lodash/clamp';
import sample from 'lodash/sample';
import shuffle from 'lodash/shuffle';

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

function sampleWithout<X>(items: Array<X>, exclusing: Array<X>): X {
  return sample(items.filter((i) => !exclusing.includes(i)));
}

export function getRandomAttacks({
  weapon,
  opponentWeapon,
  current,
}: {
  weapon: Weapon,
  opponentWeapon?: Weapon,
  current?: Attack,
}): CurrentAttacks {
  const exclusionaryAttacks = weapon.attacks.filter(
    (a) => a.type === 'exclusionary' && a !== current,
  );

  // Pull additional attacks from the opponent weapon if needed
  let inclusiveAttacks = weapon.attacks.filter((a) => a.type === 'inclusive');
  if (opponentWeapon) {
    inclusiveAttacks.push(
      ...opponentWeapon.attacks.filter((a) => a.type === 'collaborative'),
    );
  }
  inclusiveAttacks = inclusiveAttacks.filter((a) => a !== current);

  const ex1 = sampleWithout(exclusionaryAttacks, [current].filter(Boolean));
  const ex2 = sampleWithout(exclusionaryAttacks, [current, ex1].filter(Boolean));
  const incl = sampleWithout(inclusiveAttacks, [current].filter(Boolean));

  const attacks: CurrentAttacks = [ex1, ex2, incl];
  return (shuffle(attacks): any);
}
