// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './PageContainer.css';

type Props = {
  orientation: 'horizontal' | 'vertical',
  children: React$Node,
};

export default function PageContainer({ orientation, children }: Props) {
  return (
    <div
      className={classNames({
        [styles.root]: true,
        [styles.vertical]: orientation == 'vertical',
      })}
    >
      {children}
    </div>
  );
}
PageContainer.defaultProps = {
  orientation: 'horizontal',
};
