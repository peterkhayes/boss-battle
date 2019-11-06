// @flow
import type { ChooseBossStage } from '../types/Stage';
import React from 'react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import BOSSES from '../config/bosses';
import Carousel from './Carousel';

export default function ChooseBossPage(_props: ChooseBossStage) {
  const dispatch = useDispatch();

  const selectBoss = (boss) => dispatch(actions.selectBoss(boss));
  const unselectWeapon = () => dispatch(actions.unselectWeapon());

  useHotkeys('esc', unselectWeapon);

  return (
    <Carousel
      key="bosses"
      title="Choose Your Opponent"
      options={BOSSES}
      selectOption={selectBoss}
      getOptionProps={(boss) => ({
        name: boss.name,
        image: boss.image || boss.weapon.image,
        description: boss.title,
      })}
    />
  );
}
