// @flow
import type { ChooseNameStage } from '../types/Stage';
import React from 'react';
import PageContainer from './PageContainer';
import Title from './Title';
import { TextInput } from 'nes-react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';

export default function ChooseNamePage({ name }: ChooseNameStage) {
  const dispatch = useDispatch();
  const confirmName = () => dispatch(actions.confirmName());
  const resetGame = () => dispatch(actions.resetGame());

  useHotkeys('enter', confirmName);
  useHotkeys('esc', resetGame);

  return (
    <PageContainer>
      <Title size="large">Enter Your Name</Title>
      <div style={{ textAlign: 'center', fontSize: 48 }}>
        <TextInput
          autoFocus
          value={name}
          onChange={(e) => dispatch(actions.setName(e.target.value))}
          onKeyDown={(e) => {
            if (e.key === 'Enter') confirmName();
            if (e.key === 'Escape') resetGame();
          }}
        />
      </div>
    </PageContainer>
  );
}
