// @flow
import type { ChooseWeaponStage } from '../types/Stage';
import React from 'react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import PLAYER_WEAPONS from '../config/playerWeapons';

export default function ChooseWeaponPage(_props: ChooseWeaponStage) {
  const dispatch = useDispatch();

  const selectWeapon = (weapon) => dispatch(actions.selectWeapon(weapon));
  const unsetName = () => dispatch(actions.unsetName());

  useHotkeys('esc', unsetName);

  return (
    <div>
      <h1>Choose Your Weapon</h1>
      <ul>
        {PLAYER_WEAPONS.map((weapon) => (
          <li key={weapon.name}>
            <span>{weapon.name}</span>&nbsp;
            <button onClick={() => selectWeapon(weapon)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
