// @flow
import type { InitialStage } from '../types/Stage';
import React from 'react';
import PageContainer from './PageContainer';
import AnimatedText from './AnimatedText';
import Title from './Title';
import * as colors from '../config/colors';
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
      <AnimatedText colors={colors.PALETTE_1}>
        <Title>Boss Battle</Title>
      </AnimatedText>
    </PageContainer>
  );
}
