// @flow
import {
  applyMiddleware,
  createStore as createStoreGeneric,
  type Store as StoreGeneric,
  type Middleware as MiddlewareGeneric,
} from 'redux';
import {
  useSelector as useSelectorGeneric,
  useDispatch as useDispatchGeneric,
} from 'react-redux';
import logger from 'redux-logger';
import { type ReduxAction, reducer } from './actions';
import { type ReduxState } from './state';
import syncMiddleware from './sync';
import soundsMiddleware from './sounds';

export type ReduxDispatch = <T: ReduxAction>(T) => T;
export type ReduxStore = StoreGeneric<ReduxState, ReduxAction, ReduxDispatch>;
export type ReduxMiddleware = MiddlewareGeneric<ReduxState, ReduxAction, ReduxDispatch>;

export function createStore(): ReduxStore {
  const middleware = applyMiddleware(logger, soundsMiddleware, syncMiddleware);
  return createStoreGeneric(reducer, middleware);
}

export function useSelector<Result>(selector: (state: ReduxState) => Result): Result {
  return useSelectorGeneric(selector);
}

export function useDispatch(): ReduxDispatch {
  return useDispatchGeneric();
}
