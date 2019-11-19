// @flow
import type { Stage } from '../types/Stage';

export type ReduxState = Stage;

const STORAGE_KEY = 'bossBattleState';

const initialState: ReduxState = {
  stage: 'initial',
};

export function getSavedState(): ReduxState {
  const json = window.localStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : initialState;
}

export function saveState(state: ReduxState): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
