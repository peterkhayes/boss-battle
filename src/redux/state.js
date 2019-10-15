// @flow
import type { Stage } from '../types/Stage';

export type ReduxState = Stage;

export const initialState: ReduxState = {
  stage: 'initial',
};
