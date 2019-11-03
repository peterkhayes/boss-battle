// @flow
import type { ChooseWeaponStage } from '../types/Stage';
import React from 'react';
import PageContainer from './PageContainer';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import PLAYER_WEAPONS from '../config/playerWeapons';
import Carousel from './Carousel';

export default function ChooseWeaponPage(_props: ChooseWeaponStage) {
  const dispatch = useDispatch();

  const selectWeapon = (weapon) => {
    dispatch(actions.selectWeapon(weapon));
  };
  const unsetName = () => dispatch(actions.unsetName());

  useHotkeys('esc', unsetName);

  return (
    <PageContainer orientation="vertical">
      <h1 style={{ fontSize: 64, textAlign: 'center' }}>Choose Your Weapon</h1>
      <br />
      <br />
      <br />
      <br />
      <Carousel options={PLAYER_WEAPONS} selectOption={selectWeapon} />
    </PageContainer>
  );
}
