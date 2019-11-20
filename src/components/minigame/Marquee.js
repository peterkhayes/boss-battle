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
      <div className={styles.marqueeText}>M I N I G A M E</div>
    </div>
  );
}
