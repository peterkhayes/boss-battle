// @flow
import type { ChooseNameStage } from '../types/Stage';
import React, { useState } from 'react';
import PageContainer from './PageContainer';
import { Button, TextInput } from 'nes-react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';

export default function ChooseNamePage(_props: ChooseNameStage) {
  const [tempName, setTempName] = useState('');

  const dispatch = useDispatch();
  const setName = () => dispatch(actions.setName(tempName));
  const resetGame = () => dispatch(actions.resetGame());

  // useHotkeys('enter', setName);
  useHotkeys('esc', resetGame);

  return (
    <PageContainer>
      <div style={{ alignSelf: 'center' }}>
        <h1>Enter Your Name</h1>
        <TextInput
          autoFocus
          value={tempName}
          onChange={(e) => setTempName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setName();
            if (e.key === 'Escape') resetGame();
          }}
        />
        &nbsp;
        <Button onClick={setName}>Set Name</Button>
      </div>
    </PageContainer>
  );
}
