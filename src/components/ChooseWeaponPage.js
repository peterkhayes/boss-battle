// @flow
import type { ChooseWeaponStage } from '../types/Stage';
import React from 'react';
import PageContainer from './PageContainer';
import { Button, List } from 'nes-react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import PLAYER_WEAPONS from '../config/playerWeapons';

export default function ChooseWeaponPage(_props: ChooseWeaponStage) {
  const dispatch = useDispatch();

  const selectWeapon = (weapon) => {
    console.trace('selected weapon');
    dispatch(actions.selectWeapon(weapon));
  };
  const unsetName = () => dispatch(actions.unsetName());

  useHotkeys('esc', unsetName);

  return (
    <PageContainer>
      <div style={{ alignSelf: 'center' }}>
        <h1 style={{ marginBottom: 16 }}>Choose Your Weapon</h1>
        <List>
          {PLAYER_WEAPONS.map((weapon) => (
            <li key={weapon.name} style={{ marginBottom: 16 }}>
              <span>{weapon.name}</span>&nbsp;
              <Button onClick={() => selectWeapon(weapon)}>Select</Button>
            </li>
          ))}
        </List>
      </div>
    </PageContainer>
  );
}
