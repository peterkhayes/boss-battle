// @flow
import type { InitialStage } from '../types/Stage';
import React from 'react';
import PageContainer from './PageContainer';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import logo from '../images/logo.png';

export default function InitialPage(_props: InitialStage) {
  const dispatch = useDispatch();
  const startGame = () => dispatch(actions.startGame());

  useHotkeys('enter', startGame);
  useHotkeys('space', startGame);

  return (
    <PageContainer>
      <div style={{ alignSelf: 'center' }}>
        <img src={logo} />
        {/* <br /> */}
        {/* <Button onClick={startGame}>Start Game</Button> */}
      </div>
    </PageContainer>
  );
}
