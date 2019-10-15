// @flow
import type { ChooseBossStage } from '../types/Stage';
import React from 'react';
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
    <div>
      <h1>Choose Your Boss</h1>
      <ul>
        {BOSSES.map((boss) => (
          <li key={boss.name}>
            <span>{boss.name}</span>&nbsp;
            <button onClick={() => selectBoss(boss)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
