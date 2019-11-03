// @flow
import type { Fighter } from '../types/Fighter';
import type { FightStage } from '../types/Stage';
import React from 'react';
import PageContainer from './PageContainer';
import FlexSpacer from './FlexSpacer';
import styles from './FightPage.css';
import { Button, List, Progress } from 'nes-react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import { BAD_VIBES_MAX, OK_VIBES_MAX, GOOD_VIBES_MAX } from '../config/vibes';

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
    <PageContainer>
      <FighterSection
        fighter={player}
        boostFn={boostPlayerVibes}
        hurtFn={hurtPlayerVibes}
      />
      <FighterSection fighter={boss} boostFn={boostBossVibes} hurtFn={hurtBossVibes} />
    </PageContainer>
  );
}

type FighterSectionProps = {
  fighter: Fighter,
  hurtFn: () => mixed,
  boostFn: () => mixed,
};

function FighterSection({ fighter, hurtFn, boostFn }: FighterSectionProps) {
  return (
    <div className={styles.fighterSection}>
      <h2>👤 {fighter.name}</h2>
      <br />
      <VibeOMeter vibes={fighter.vibes} max={GOOD_VIBES_MAX} />
      <br />
      <br />
      <br />
      <h3 style={{ marginBottom: 16 }}>🗡️ {fighter.weapon.name}</h3>
      <List>
        {fighter.weapon.attacks.map(({ header, description }) => (
          <li key={header} style={{ marginBottom: 16 }}>
            <strong>{header}:&nbsp;</strong>
            <span>{description}</span>
          </li>
        ))}
      </List>
    </div>
  );
}

type VibeOMeterProps = {
  vibes: number,
  max: number,
};

function VibeOMeter({ vibes, max }: VibeOMeterProps) {
  const vibeLevel = (() => {
    if (vibes <= 0) return 'vibes killed';
    if (vibes <= BAD_VIBES_MAX) return 'regretting this experience';
    if (vibes <= OK_VIBES_MAX) return 'having second thoughts';
    if (vibes < GOOD_VIBES_MAX) return "vibin'";
    return 'out of this world';
  })();

  const colorProps = (() => {
    if (vibes <= BAD_VIBES_MAX) return { error: true };
    if (vibes <= OK_VIBES_MAX) return { warning: true };
    if (vibes < GOOD_VIBES_MAX) return { success: true };
    return { primary: true };
    // TODO: more fun when in SuperVibes
  })();
  return (
    <div>
      <div>
        <strong>Vibe Level:</strong> {vibeLevel}
      </div>
      <br />
      <Progress value={vibes} max={max} {...colorProps} />
    </div>
  );
}
