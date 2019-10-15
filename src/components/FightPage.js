// @flow
import type { Fighter } from '../types/Fighter';
import type { FightStage } from '../types/Stage';
import React from 'react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';

export default function FightPage({ player, boss }: FightStage) {
  const dispatch = useDispatch();
  const hurtPlayerVibes = () => dispatch(actions.hurtPlayerVibes());
  const boostPlayerVibes = () => dispatch(actions.boostPlayerVibes());
  const hurtBossVibes = () => dispatch(actions.hurtBossVibes());
  const boostBossVibes = () => dispatch(actions.boostBossVibes());
  const resetGame = () => dispatch(actions.resetGame());

  useHotkeys('q', hurtPlayerVibes);
  useHotkeys('w', boostPlayerVibes);
  useHotkeys('[', hurtBossVibes);
  useHotkeys(']', boostBossVibes);
  useHotkeys('esc', resetGame);

  return (
    <div>
      <h1>Fight!!!</h1>
      <FighterIndicator
        fighter={player}
        boostFn={boostPlayerVibes}
        hurtFn={hurtPlayerVibes}
      />
      <FighterIndicator fighter={boss} boostFn={boostBossVibes} hurtFn={hurtBossVibes} />
    </div>
  );
}

type FighterIndicatorProps = {
  fighter: Fighter,
  hurtFn: () => mixed,
  boostFn: () => mixed,
};
function FighterIndicator({ fighter, hurtFn, boostFn }: FighterIndicatorProps) {
  return (
    <div>
      <h2>{fighter.name}</h2>
      <div>Vibe level: {fighter.vibes}</div>
      <div>
        <button onClick={() => hurtFn}>Hurt my vibes</button>
        <button onClick={() => boostFn}>Boost my vibes</button>
      </div>
    </div>
  );
}
