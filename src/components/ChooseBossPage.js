// @flow
import type { ChooseBossStage } from '../types/Stage';
import React from 'react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import BOSSES from '../config/bosses';
import Carousel from './Carousel';
import { positiveMod } from '../utils/math';

export default function ChooseBossPage({ index, lastMove }: ChooseBossStage) {
  const dispatch = useDispatch();
  useHotkeys('esc', () => dispatch(actions.unselectWeapon()));

  const normalizedIndex = positiveMod(index, BOSSES.length);

  return (
    <Carousel
      key="bosses"
      title="Choose Your Opponent"
      options={BOSSES}
      glow
      selectedIndex={normalizedIndex}
      lastMove={lastMove}
      changeSelectedIndex={(i) => dispatch(actions.changeBoss(i))}
      selectOption={() => dispatch(actions.selectBoss(BOSSES[normalizedIndex]))}
      getOptionProps={(boss) => ({
        name: boss.name,
        image: boss.image || boss.weapon.image,
        description: boss.title,
      })}
    />
  );
}
