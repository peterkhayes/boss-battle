// @flow

import React from 'react';
import styles from './Title.css';

type Props = { children: React$Node };

export default function Title({ children }: Props) {
  return <div className={styles.title}>{children}</div>;
}
