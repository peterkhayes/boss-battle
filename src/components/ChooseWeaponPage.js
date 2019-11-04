// @flow
import type { ChooseWeaponStage } from '../types/Stage';
import React from 'react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import PLAYER_WEAPONS from '../config/playerWeapons';
import Carousel from './Carousel';

export default function ChooseWeaponPage(_props: ChooseWeaponStage) {
  const dispatch = useDispatch();

  const selectWeapon = (weapon) => dispatch(actions.selectWeapon(weapon));
  const unsetName = () => dispatch(actions.unsetName());

  useHotkeys('esc', unsetName);

  return (
    <Carousel
      key="weapons"
      title="Choose Your Weapon"
      options={PLAYER_WEAPONS}
      selectOption={selectWeapon}
      getOptionProps={(weapon) => ({ name: weapon.name, image: weapon.image })}
    />
  );
}
