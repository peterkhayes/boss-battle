// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Marquee.css';

type MarqueeProps = {
  position: 'top' | 'bottom',
};

export default function Marquee({ position }: MarqueeProps) {
  return (
    <div className={classNames(styles.marquee, styles[position])}>
      <div className={styles.marqueeText}>I N T E R M I S S I O N</div>
    </div>
  );
}
