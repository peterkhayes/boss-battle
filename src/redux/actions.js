// @flow
import type { ReduxState } from './state';
import type { Fighter, Weapon } from '../types/Fighter';
import { initialState } from './state';
import { GOOD_VIBES_MAX } from '../config/vibes';
import clamp from 'lodash/clamp';
import { PLAYER_SOUNDS } from '../utils/sounds';

/*
  Resets the game and move to the initial state
*/

type ResetGameAction = { type: 'reset_game' };
export function resetGame(): ResetGameAction {
  return { type: 'reset_game' };
}

/*
  Start the game and move to choosing a character
*/

type StartGameAction = { type: 'start_game' };
export function startGame(): StartGameAction {
  return { type: 'start_game' };
}

/*
  Sets the player's name and move to choosing a weapon
*/

type SetNameAction = { type: 'set_name', payload: string };
export function setName(name: string): SetNameAction {
  return { type: 'set_name', payload: name };
}

/*
  Go back to fix an error with the player's name
*/

type UnsetNameAction = { type: 'unset_name' };
export function unsetName(): UnsetNameAction {
  return { type: 'unset_name' };
}

/*
  Selects the player's weapon and move to choosing a boss to fight
*/

type SelectWeaponAction = { type: 'select_weapon', payload: Weapon };
export function selectWeapon(weapon: Weapon): SelectWeaponAction {
  return { type: 'select_weapon', payload: weapon };
}

/*
  Go back to fix an error with the player's weapon
*/

type UnselectWeaponAction = { type: 'unselect_weapon' };
export function unselectWeapon(): UnselectWeaponAction {
  return { type: 'unselect_weapon' };
}

/*
  Selects the player's opponent and move to fight!
*/

type SelectBossAction = { type: 'select_boss', payload: Fighter };
export function selectBoss(boss: Fighter): SelectBossAction {
  return { type: 'select_boss', payload: boss };
}

/*
  Attacks from the player or the boss!
*/

type ChangePlayerVibesAction = { type: 'change_player_vibes', payload: number };
export function hurtPlayerVibes(): ChangePlayerVibesAction {
  return { type: 'change_player_vibes', payload: -1 };
}
export function boostPlayerVibes(): ChangePlayerVibesAction {
  return { type: 'change_player_vibes', payload: 1 };
}

type ChangeBossVibesAction = { type: 'change_boss_vibes', payload: number };
export function hurtBossVibes(): ChangeBossVibesAction {
  return { type: 'change_boss_vibes', payload: -1 };
}
export function boostBossVibes(): ChangeBossVibesAction {
  return { type: 'change_boss_vibes', payload: 1 };
}

/*
  Define the final action type as the union of all actions
*/

export type ReduxAction =
  | ResetGameAction
  | StartGameAction
  | SetNameAction
  | UnsetNameAction
  | SelectWeaponAction
  | UnselectWeaponAction
  | SelectBossAction
  | ChangePlayerVibesAction
  | ChangeBossVibesAction;

/*
  Handle actions in the reducer
*/

export function reducer(
  state: ReduxState = initialState,
  action: ReduxAction,
): ReduxState {
  switch (action.type) {
    case 'reset_game': {
      return { stage: 'initial' };
    }

    case 'start_game': {
      if (state.stage !== 'initial') return state;
      return { stage: 'choose_name' };
    }

    case 'set_name': {
      if (state.stage !== 'choose_name') return state;
      if (!action.payload) return state;
      return { stage: 'choose_weapon', name: action.payload };
    }

    case 'unset_name': {
      if (state.stage !== 'choose_weapon') return state;
      return { stage: 'choose_name' };
    }

    case 'select_weapon': {
      if (state.stage !== 'choose_weapon') return state;
      return {
        stage: 'choose_boss',
        player: {
          name: state.name,
          weapon: action.payload,
          sounds: PLAYER_SOUNDS,
          vibes: 7,
        },
      };
    }

    case 'unselect_weapon': {
      if (state.stage !== 'choose_boss') return state;
      return { stage: 'choose_weapon', name: state.player.name };
    }

    case 'select_boss': {
      if (state.stage !== 'choose_boss') return state;
      return {
        stage: 'fight',
        player: state.player,
        boss: action.payload,
      };
    }

    case 'change_player_vibes': {
      if (state.stage !== 'fight') return state;
      return {
        stage: 'fight',
        player: changeVibes(state.player, action.payload),
        boss: state.boss,
      };
    }

    case 'change_boss_vibes': {
      if (state.stage !== 'fight') return state;
      return {
        stage: 'fight',
        player: state.player,
        boss: changeVibes(state.boss, action.payload),
      };
    }

    default:
      return state || initialState;
  }
}

function changeVibes(fighter: Fighter, vibes: number): Fighter {
  return { ...fighter, vibes: clamp(fighter.vibes + vibes, 0, GOOD_VIBES_MAX) };
}
