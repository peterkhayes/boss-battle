// @flow
import type { Fighter, Attack } from '../types/Fighter';
import type { FightStage } from '../types/Stage';
import React from 'react';
import classNames from 'classnames';
import PageContainer from './PageContainer';
import Image from './Image';
import Title from './Title';
import styles from './FightPage.css';
import { Container, Progress } from 'nes-react';
import * as actions from '../redux/actions';
import { useDispatch } from '../redux/store';
import { useHotkeys } from 'react-hotkeys-hook';
import { BAD_VIBES_MAX, OK_VIBES_MAX, GOOD_VIBES_MAX } from '../config/vibes';

export default function FightPage({ player, boss, attack }: FightStage) {
  const dispatch = useDispatch();

  const resetGame = () => dispatch(actions.resetGame());
  const clearAttack = () => dispatch(actions.clearAttack());

  const playerPhysicalAttack = () => dispatch(actions.performPlayerAttack('physical'));
  const playerMentalAttack = () => dispatch(actions.performPlayerAttack('mental'));
  const playerInclusiveAttack = () => dispatch(actions.performPlayerAttack('inclusive'));

  const bossPhysicalAttack = () => dispatch(actions.performBossAttack('physical'));
  const bossMentalAttack = () => dispatch(actions.performBossAttack('mental'));
  const bossInclusiveAttack = () => dispatch(actions.performBossAttack('inclusive'));

  const hurtPlayerVibes = () => dispatch(actions.hurtPlayerVibes());
  const boostPlayerVibes = () => dispatch(actions.boostPlayerVibes());

  const hurtBossVibes = () => dispatch(actions.hurtBossVibes());
  const boostBossVibes = () => dispatch(actions.boostBossVibes());

  useHotkeys('1', playerPhysicalAttack);
  useHotkeys('2', playerMentalAttack);
  useHotkeys('3', playerInclusiveAttack);

  useHotkeys('0', bossPhysicalAttack);
  useHotkeys('-', bossMentalAttack);
  useHotkeys('=', bossInclusiveAttack);

  useHotkeys('q', boostPlayerVibes);
  useHotkeys('w', hurtPlayerVibes);

  useHotkeys('[', hurtBossVibes);
  useHotkeys(']', boostBossVibes);

  useHotkeys('esc', resetGame);
  useHotkeys('enter', clearAttack);
  useHotkeys('space', clearAttack);
  useHotkeys('delete', clearAttack);
  useHotkeys('backspace', clearAttack);

  return (
    <PageContainer orientation="horizontal">
      <FighterSection fighter={player}>
        {Object.keys(player.currentAttacks).map((type, i) => (
          // TODO: color attacks by types
          // TODO: more fun styling for these
          <Container
            key={type}
            centered
            dark
            title={`Attack ${i + 1}`}
            className={styles.attackItem}
          >
            {player.currentAttacks[type].name}
          </Container>
        ))}
      </FighterSection>
      <CenterSection />
      <FighterSection fighter={boss} flipped>
        {boss.facts.map(({ header, description }, i) => (
          <div className={styles.fact} key={i}>
            <div className={styles.factHeader}>{header}</div>
            <div className={styles.factDescription}>{description}</div>
          </div>
        ))}
      </FighterSection>
      {attack && <AttackModal attack={attack} clearAttack={clearAttack} />}
    </PageContainer>
  );
}

type FighterSectionProps = {
  fighter: Fighter,
  flipped?: boolean,
  children?: React$Node,
};

function FighterSection({ children, fighter, flipped }: FighterSectionProps) {
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
        <Image className={styles.fighterImage} src={fighter.image} />
        <div className={styles.fighterInfo}>
          <div className={styles.fighterName}>{fighter.name}</div>
          <div className={styles.fighterTitle}>{fighter.title}</div>
        </div>
      </div>

      <div className={styles.weaponRow}>
        <div className={styles.weaponHeader}>WEAPON</div>
        <div className={styles.weaponInfo}>
          <Image className={styles.weaponImage} src={fighter.weapon.image} />
          <div className={styles.itemDescription}>{fighter.weapon.name}</div>
        </div>
      </div>

      {children}
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

type AttackModalProps = {
  attack: Attack,
  clearAttack: () => mixed,
};

function AttackModal({ attack, clearAttack }: AttackModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={clearAttack}>
      <div className={styles.modal}>
        {/* TODO: close on click? */}
        {/* TODO: add "drumroll" or some other delay before attack? */}
        {/* TODO: "player performs" or "boss performs" */}
        {/* TODO: fun animation here */}
        <Title>{attack.name}</Title>
      </div>
    </div>
  );
}

function getProgressProps(vibes: number) {
  if (vibes <= BAD_VIBES_MAX) return { error: true };
  if (vibes <= OK_VIBES_MAX) return { warning: true };
  if (vibes < GOOD_VIBES_MAX) return { success: true };
  return { primary: true };
}
