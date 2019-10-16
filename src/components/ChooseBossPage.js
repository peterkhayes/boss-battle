// @flow
import type { ChooseBossStage } from '../types/Stage';
import React from 'react';
import PageContainer from './PageContainer';
import { Button, List } from 'nes-react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import BOSSES from '../config/bosses';

export default function ChooseBossPage(_props: ChooseBossStage) {
  const dispatch = useDispatch();

  const selectBoss = (boss) => dispatch(actions.selectBoss(boss));
  const unselectWeapon = () => dispatch(actions.unselectWeapon());

  useHotkeys('esc', unselectWeapon);

  return (
    <PageContainer>
      <div style={{ alignSelf: 'center' }}>
        <h1 style={{ marginBottom: 16 }}>Choose Your Boss</h1>
        <List>
          {BOSSES.map((boss) => (
            <li key={boss.name} style={{ marginBottom: 16 }}>
              <span>{boss.name}</span>&nbsp;
              <Button onClick={() => selectBoss(boss)}>Select</Button>
            </li>
          ))}
        </List>
      </div>
    </PageContainer>
  );
}
