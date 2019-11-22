// @flow

import React from 'react';
import styles from './Title.css';
import classNames from 'classnames';

type Props = { children: React$Node, size: 'regular' | 'large' | 'giant' };

export default function Title({ children, size }: Props) {
  return <div className={classNames(styles.title, styles[size])}>{children}</div>;
}
Title.defaultProps = {
  size: 'regular',
};
