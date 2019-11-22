// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './PageContainer.css';
import useGatekeeper from './useGatekeeper';

type Props = {
  orientation: 'horizontal' | 'vertical',
  children: React$Node,
};

export default function PageContainer({ orientation, children }: Props) {
  const gatekeeper = useGatekeeper();
  return (
    <div
      className={classNames({
        [styles.root]: true,
        [styles.vertical]: orientation == 'vertical',
        [styles.gatekeeper]: gatekeeper,
      })}
    >
      {children}
    </div>
  );
}
PageContainer.defaultProps = {
  orientation: 'vertical',
};
