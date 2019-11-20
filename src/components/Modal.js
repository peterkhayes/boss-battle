// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './Modal.css';

type Props = {
  children: React$Node,
  className?: string,
  onOverlayClick?: () => mixed,
};

export default function Modal({ children, className, onOverlayClick }: Props) {
  // TODO: fun animation on open?
  return (
    <div className={styles.modalOverlay} onClick={onOverlayClick}>
      <div className={classNames(styles.modal, className)}>{children}</div>
    </div>
  );
}
