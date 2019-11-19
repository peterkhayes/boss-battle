// @flow
import type { ChooseWeaponStage } from '../types/Stage';
import React from 'react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import PLAYER_WEAPONS from '../config/playerWeapons';
import Carousel from './Carousel';
import { positiveMod } from '../utils/math';

export default function ChooseWeaponPage({ index, lastMove }: ChooseWeaponStage) {
  const dispatch = useDispatch();
  useHotkeys('esc', () => dispatch(actions.unsetName()));

  const normalizedIndex = positiveMod(index, PLAYER_WEAPONS.length);

  return (
    <Carousel
      key="weapons"
      title="Choose Your Weapon"
      options={PLAYER_WEAPONS}
      selectedIndex={normalizedIndex}
      lastMove={lastMove}
      changeSelectedIndex={(i) => dispatch(actions.changeWeapon(i))}
      selectOption={() => dispatch(actions.selectWeapon(PLAYER_WEAPONS[normalizedIndex]))}
      getOptionProps={(weapon) => ({ name: weapon.name, image: weapon.image })}
    />
  );
}
