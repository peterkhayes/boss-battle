// @flow
import {
  applyMiddleware,
  createStore as createStoreGeneric,
  type Store as StoreGeneric,
} from 'redux';
import {
  useSelector as useSelectorGeneric,
  useDispatch as useDispatchGeneric,
} from 'react-redux';
import logger from 'redux-logger';
import { type ReduxAction, reducer } from './actions';
import { type ReduxState } from './state';

export type ReduxDispatch = <T: ReduxAction>(T) => T;
export type ReduxStore = StoreGeneric<ReduxState, ReduxAction, ReduxDispatch>;

export function createStore(): ReduxStore {
  return createStoreGeneric(reducer, applyMiddleware(logger));
}

export function useSelector<Result>(selector: (state: ReduxState) => Result): Result {
  return useSelectorGeneric(selector);
}

export function useDispatch(): ReduxDispatch {
  return useDispatchGeneric();
}
