// @flow
import type { InitialStage } from '../types/Stage';
import React from 'react';
import PageContainer from './PageContainer';
import { Button } from 'nes-react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';

export default function InitialPage(_props: InitialStage) {
  const dispatch = useDispatch();
  const startGame = () => dispatch(actions.startGame());

  useHotkeys('enter', startGame);
  useHotkeys('space', startGame);

  return (
    <PageContainer>
      <div style={{ alignSelf: 'center' }}>
        <Button onClick={startGame}>Start Game</Button>
      </div>
    </PageContainer>
  );
}
