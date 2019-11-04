// @flow
import type { Fighter } from '../types/Fighter';
import type { FightStage } from '../types/Stage';
import React from 'react';
import classNames from 'classnames';
import PageContainer from './PageContainer';
import styles from './FightPage.css';
import { Progress } from 'nes-react';
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

  useHotkeys('q', boostPlayerVibes);
  useHotkeys('w', hurtPlayerVibes);
  useHotkeys('[', hurtBossVibes);
  useHotkeys(']', boostBossVibes);
  useHotkeys('esc', resetGame);

  return (
    <PageContainer orientation="horizontal">
      <FighterSection fighter={player} />
      <CenterSection />
      <FighterSection fighter={boss} flipped />
    </PageContainer>
  );
}

type FighterSectionProps = {
  fighter: Fighter,
  flipped?: boolean,
  children: React$Node,
};

function FighterSection({ fighter, flipped }: FighterSectionProps) {
  return (
    <div className={classNames(styles.fighterSection, flipped && styles.flipped)}>
      <div className={styles.vibesRow}>
        <div className={styles.fighterVibes}>
          <Progress
            value={fighter.vibes}
            max={GOOD_VIBES_MAX}
            {...getProgressProps(fighter.vibes)}
          />
        </div>
      </div>
      <div className={styles.fighterRow}>
        <div
          className={styles.fighterImage}
          style={{ backgroundImage: `url('${fighter.image}')` }}
        />
        <div className={styles.fighterInfo}>
          <div className={styles.fighterName}>{fighter.name}</div>
          <div className={styles.fighterTitle}>{fighter.title}</div>
        </div>
      </div>

      <div className={styles.weaponRow}>
        <div className={styles.weaponHeader}>WEAPON</div>
        <div className={styles.weaponInfo}>
          <div
            className={styles.weaponImage}
            style={{ backgroundImage: `url('${fighter.weapon.image}')` }}
          />
          <div className={styles.itemDescription}>{fighter.weapon.name}</div>
        </div>
      </div>

      {/* {fighter.weapon.attacks.map(({ header, description }) => (
        <FighterItem
          key={header}
          header={header}
          description={description}
          flipped={flipped}
        />
      ))} */}
    </div>
  );
}

function CenterSection() {
  return (
    <div className={styles.centerSection}>
      <div className={styles.vibesText}>VIBES</div>
    </div>
  );
}

function getProgressProps(vibes: number) {
  if (vibes <= BAD_VIBES_MAX) return { error: true };
  if (vibes <= OK_VIBES_MAX) return { warning: true };
  if (vibes < GOOD_VIBES_MAX) return { success: true };
  return { primary: true };
}
