// @flow
import type { MinigameIntro } from '../../types/Stage';
import React from 'react';
import styles from './Minigame.css';

export default function MinigameIntroPage(_props: MinigameIntro) {
  return (
    <>
      <div className={styles.titleHeader}>WELCOME TO</div>
      <div className={styles.titleText}>I N T E R M I S S I O N</div>
    </>
  );
}
