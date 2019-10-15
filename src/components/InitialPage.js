// @flow
import type { InitialStage } from '../types/Stage';
import React from 'react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';

export default function InitialPage(_props: InitialStage) {
  const dispatch = useDispatch();
  const startGame = () => dispatch(actions.startGame());

  useHotkeys('enter', startGame);
  useHotkeys('space', startGame);

  return <button onClick={startGame}>Start Game</button>;
}
